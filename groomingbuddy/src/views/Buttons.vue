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
   
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  