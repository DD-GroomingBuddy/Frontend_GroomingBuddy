<template>
  <div>
      <PasPozadina>
          <GroomingBuddyTitle/>
      </PasPozadina>
  </div>
</template>

<script>

import GroomingBuddyTitle from '@/components/GroomingBuddyTitle.vue';
import PasPozadina from '../components/PasPozadina.vue';

export default {
name: 'HomeScreen',
components: {
  PasPozadina,
  GroomingBuddyTitle
},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
