<template>
  <div class="container">
    <h1 class="display-4 mt-5 see-through-text">Register Appointment</h1>
    <form @submit.prevent="registerAppointment">
      <div class="form-group">
        <label for="phoneNumber">Phone Number</label>
        <input type="text" id="phoneNumber" class="form-control" v-model="phoneNumber" required />
      </div>
      <div class="form-group">
        <label for="service">Service</label>
        <input type="text" id="service" class="form-control" v-model="service" required />
      </div>
      <div class="form-group">
        <label for="appointmentDate">Appointment Date</label>
        <input type="date" id="appointmentDate" class="form-control" v-model="appointmentDate" required />
      </div>
      <div class="form-group">
        <label for="appointmentTime">Appointment Time</label>
        <input type="time" id="appointmentTime" class="form-control" v-model="appointmentTime" required />
      </div>
      <button type="submit" class="btn btn-primary mt-4">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      phoneNumber: '',
      service: '',
      appointmentDate: '',
      appointmentTime: '',
    };
  },
  methods: {
    async registerAppointment() {
      try {
        const response = await axios.post('http://localhost:3000/api/appointment/add', {
          phoneNumber: this.phoneNumber,
          service: this.service,
          date: this.appointmentDate,
          time: this.appointmentTime,
        }, {
          withCredentials: true // Ensure cookies are sent with the request
        });
        console.log('Appointment registered:', response.data);
        this.$router.push('/appointments');
      } catch (error) {
        console.error('Error registering appointment:', error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #ffe0bd;
  padding: 20px;
  border-radius: 10px;
}
.see-through-text {
  color: #2c3e50;
}
.btn-primary {
  background-color: #3a99ce;
  border-color: #3a99ce;
}
</style>
