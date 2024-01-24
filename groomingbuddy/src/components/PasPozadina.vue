<template>
    <div class="background-image">
    <slot></slot>
    </div>
</template>

  <style scoped>
  .background-image {
    background-image: url('../assets/doge.JPG');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
  }
  </style>