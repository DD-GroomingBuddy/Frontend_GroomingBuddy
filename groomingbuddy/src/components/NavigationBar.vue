<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <div class="container">
      
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/services" class="nav-link">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="showAdminBoard" to="/appointments" class="nav-link">Appointments</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <router-link to="/profile" class="nav-link">{{ currentUser.username }}</router-link>
        <a href="/login" class="nav-link" @click="logOut">LogOut</a>
    </div>

      <div class="ml-auto" v-if="!currentUser">
          <router-link to="/login">
              <button class="btn btn-primary">Login</button>
          </router-link>
          <router-link to="/signup">
              <button class="btn btn-primary">Sign Up</button>
          </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import AuthService from "../services/auth.service";

export default {
  setup() {
  const currentUser = ref(undefined);
  const showAdminBoard = ref(false);
  const route = useRoute();
  const router = useRouter();

  onMounted(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      currentUser.value = user;
      showAdminBoard.value = user.roles.includes("ROLE_ADMIN");
    }
  });

  const logOut = () => {
    AuthService.logout();
    showAdminBoard.value = false;
    currentUser.value = undefined;
    if (route.path !== "/login") router.push("/login");
  };

  return { currentUser, showAdminBoard, logOut };
},
  name: 'Navbar', 
};
</script>
<style>

</style>
