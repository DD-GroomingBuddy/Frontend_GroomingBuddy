<template>
    <div class="image">
    <slot></slot>
    </div>
</template>

  <style scoped>
  .image {
    background-image: url('../assets/contactdog.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
  }
  </style>