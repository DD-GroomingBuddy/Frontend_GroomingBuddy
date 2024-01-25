<template>
    <div :style="{ backgroundColor: skinColor }">
      <!-- Your content goes here -->
      <p>Hello, I have a skin-colored background!</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        skinColor: '#ffe0bd', // Set your desired skin color here
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your additional styling here */
  div {
    padding: 20px;
    border-radius: 10px;
    /* Add any other styles you need */
  }
  </style>
  