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
              <router-link to="/appointments" class="nav-link">Appointments</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
          </ul>
        </div>

        <div class="ml-auto">
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
  
  export default {
    name: 'Navbar', 
  };
  </script>
  <style>
  
  </style>
  