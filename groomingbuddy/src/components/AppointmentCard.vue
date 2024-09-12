<template>
  <div class="appointment-card">
    <h3>Appointment Details</h3>
    <p><strong>User:</strong> {{ appointment.user.username }}</p>
    <p><strong>Phone Number:</strong> {{ appointment.phoneNumber }}</p>
    <p><strong>Service:</strong> {{ appointment.service }}</p>
    <p><strong>Date:</strong> {{ formatDate(appointment.dateTime) }}</p>
    <p><strong>Time:</strong> {{ formatTime(appointment.dateTime) }}</p>
    <p><strong>Status:</strong> {{ appointment.status }}</p>

    <!-- Delete button, shown only if the user is an admin -->
    <button @click="deleteAppointment" v-if="isAdmin" class="btn btn-danger">Delete</button>
    
    <!-- Update status button, shown only if the appointment is not yet completed -->
    <button @click="updateStatusToCompleted" v-if="isAdmin && appointment.status !== 'Completed'" class="btn btn-success">Mark as Completed</button>
  </div>
</template>

<script>
import AuthService from '../services/auth.service';

export default {
  name: "AppointmentCard",
  props: {
    appointment: {
      type: Object,
      required: true,
      validator(value) {
        return (
          value.hasOwnProperty("user") &&
          value.hasOwnProperty("phoneNumber") &&
          value.hasOwnProperty("service") &&
          value.hasOwnProperty("dateTime") // Ensure dateTime property is present
        );
      }
    }
  },
  data(){
    return {
      currentUser: AuthService.getCurrentUser()
    }
  },
  computed: {
    isAdmin() {
      return this.currentUser.roles.includes('ROLE_ADMIN');
    }
  },
  methods: {
    formatDate(dateTime) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateTime).toLocaleDateString(undefined, options);
    },
    formatTime(dateTime) {
      const options = { hour: '2-digit', minute: '2-digit' };
      return new Date(dateTime).toLocaleTimeString(undefined, options);
    },
    async deleteAppointment() {
      // Check if appointment's date and time are in the future
      const appointmentDateTime = new Date(this.appointment.dateTime);
      const now = new Date();
      if (appointmentDateTime <= now) {
        window.alert("Cannot delete past appointments.");
        return;
      }
      
      try {
        await AuthService.deleteAppointment(this.appointment._id);
        // Emit an event to notify the parent component that an appointment was deleted
        this.$emit('appointment-deleted', this.appointment._id);
        window.location.reload()
      } catch (error) {
        console.error('Error deleting appointment:', error);
      }
    },
    async updateStatusToCompleted() {
      try {
        await AuthService.updateAppointmentStatus(this.appointment._id);
        this.appointment.status = 'Completed'; // Update the local state
        window.location.reload();
      } catch (error) {
        console.error('Error updating appointment status:', error);
      }
    }
  }
};
</script>

<style scoped>
.appointment-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1em;
  margin: 1em 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h3 {
  margin-bottom: 0.5em;
}

p {
  margin: 0.5em 0;
}

strong {
  font-weight: bold;
}
</style>