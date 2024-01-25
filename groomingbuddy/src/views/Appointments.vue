<template>
  <div class="container text-center" :style="{ backgroundColor: skinColor }">
    <h1 class="display-4 mt-5 see-through-text">APPOINTMENTS</h1>

 
    <div class="service-content mt-5">
      <h2 class="reserved-appointments-title">RESERVED APPOINTMENTS</h2>
      
    
      <div v-if="!hasAppointments" class="no-appointments">
        <p>
          No set appointments at the moment.</p>
      </div>

     
      <div v-else class="appointment">
        <div class="appointment-details" v-for="(appointment, index) in appointments" :key="index">
          <p><strong>Service:</strong> {{ appointment.service }}</p>
          <p><strong>Barber:</strong> {{ appointment.barber }}</p>
          <p><strong>Total with DISCOUNT:</strong> {{ appointment.totalWithDiscount }}</p>
          <p><strong>Date & Time:</strong> {{ appointment.dateTime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skinColor: '#ffe0bd',
      hasAppointments: false, 
      appointments: [],
    };
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
</style>
