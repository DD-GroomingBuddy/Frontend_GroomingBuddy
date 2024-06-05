<template>
  <div class="container text-center" :style="{ backgroundColor: skinColor }">
    <h1 class="display-4 mt-5 see-through-text">APPOINTMENTS</h1>

    <router-link to="/register-appointment">
      <button class="btn btn-primary mt-4">Book Appointment</button>
    </router-link>

    <div class="service-content mt-5">
      <h2 class="reserved-appointments-title">RESERVED APPOINTMENTS</h2>

      <div v-if="appointments.length === 0" class="no-appointments">
        <p>No set appointments at the moment.</p>
      </div>
      <div v-else>
        <div v-for="appointment in appointments" :key="appointment._id" class="appointment">
          <div class="appointment-details">
            <p><strong>Phone Number:</strong> {{ appointment.phoneNumber }}</p>
            <p><strong>Service:</strong> {{ appointment.service }}</p>
            <p><strong>Date:</strong> {{ new Date(appointment.date).toLocaleDateString() }}</p>
            <p><strong>Time:</strong> {{ new Date(appointment.time).toLocaleTimeString() }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      skinColor: '#ffe0bd',
      appointments: [],
    };
  },
  async created() {
    try {
      const response = await axios.get('/api/appointments', {
        params: { userId: this.$route.query.userId }
      });
      this.appointments = response.data;
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  },
};
</script>

<style lang="css">
.reserved-appointments-title {
  font-size: 24px;
  color: #3a99ce;
}

.appointment {
  border: 1px solid #3a99ce;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  text-align: left;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.appointment-details {
  font-size: 18px;
  color: #2c3e50;
}

.no-appointments {
  margin-top: 20px;
  font-size: 18px;
  color: #2c3e50;
}

.btn-primary {
  background-color: #3a99ce;
  border-color: #3a99ce;
}
</style>
