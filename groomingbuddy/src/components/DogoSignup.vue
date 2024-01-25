<template>
    <div class="image">
      <slot></slot>
    </div>
  </template>
  
  <style scoped>
  .image {
    background-image: url('../assets/dogosignup.png');
    background-size: 800px 600px; 
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
  }
  </style>
  