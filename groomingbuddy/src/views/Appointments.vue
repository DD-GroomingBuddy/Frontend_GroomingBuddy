<template>
  <div class="container text-center" :style="{ backgroundColor: skinColor }">
    <h1 class="display-4 mt-5 see-through-text">APPOINTMENTS</h1>

    <router-link to="/register-appointment">
      <button class="btn btn-primary mt-4">Book Appointment</button>
    </router-link>

    <div class="service-content mt-5">
      <h2 class="reserved-appointments-title">RESERVED APPOINTMENTS</h2>

      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <div v-if="appointments.length === 0" class="no-appointments">
          <p>No set appointments at the moment.</p>
        </div>
        <div v-else>
          <AppointmentCard
            v-for="appointment in appointments"
            :key="appointment._id"
            :appointment="appointment"
            :currentUser = "currentUser"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from "../services/auth.service";
import { ref, onMounted } from "vue";
import AppointmentCard from "../components/AppointmentCard.vue";

export default {
  components: {
    AppointmentCard,
  },
  data() {
    return {
      skinColor: "#ffe0bd",
    };
  },
  setup() {
    const appointments = ref([]);
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      try {
        const data = await AuthService.getAppointments();
        appointments.value = data;
      } catch (err) {
        error.value = "Error fetching appointments";
        console.error(err);
      } finally {
        loading.value = false;
      }
    });

    return {
      appointments,
      loading,
      error,
    };
  },
};
</script>

<style>
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
