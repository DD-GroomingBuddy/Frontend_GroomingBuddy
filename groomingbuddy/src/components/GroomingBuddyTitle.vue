<template>
    <div>
      <h1 class="grooming-buddy-title">Grooming <span class="buddy-text">Buddy</span></h1>
      <button class="appointment-button"><span class="plus-text">+</span> Appointment</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GroomingBuddy',
  };
  </script>
  
  <style scoped>
  .grooming-buddy-title {
    font-family: 'Roboto', Helvetica, sans-serif;
    font-size: 150px;
    font-weight: bold;
    margin: 0;
    display: flex;
    align-items: center;
    color: white; 
    margin-left: 100px;
    padding-top: 110px;
  }
  
  .buddy-text {
    color: #3a99ce; 
  }
  
  .appointment-button {
  background-color: #3a99ce;
  color: white;
  font-size: 66px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  margin-left: -65%; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.appointment-button:hover {
  background-color: #2c7bb6; 
}

.plus-text {
    font-weight: bolder;
}

@media (max-width: 1600px) {
  .appointment-button {
    margin-left: -50%;
  }
}

@media (max-width: 1200px) {
  .appointment-button {
    margin-left: -40%;
  }
}

@media (max-width: 800px) {
  .appointment-button {
    margin-left: -30%;
  }
}
  </style>
  