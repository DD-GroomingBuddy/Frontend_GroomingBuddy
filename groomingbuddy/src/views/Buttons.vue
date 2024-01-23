<template>
    <button :class="className" @click="handleClick">{{ text }}</button>
  </template>
  
  <script>
  export default {
    props: {
      className: String,
      text: String,
    },
    methods: {
      handleClick() {
        // Handle button click logic
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your button styling here */
  </style>
  