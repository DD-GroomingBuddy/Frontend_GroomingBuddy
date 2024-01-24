<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <!-- Brand/logo -->
        <router-link to="/" class="navbar-brand">Your Logo</router-link>
  
        <!-- Toggle button for mobile view -->
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
  
        <!-- Navigation links -->
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
            <!-- Add more links as needed -->
          </ul>
        </div>
  
        <!-- Login and Sign Up buttons on the right -->
        <div class="ml-auto">
          <button class="btn btn-outline-primary mr-2">Login</button>
          <button class="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  
  export default {
    name: 'Navbar', // Name of the component
  };
  </script>
  
  <style>
  /* Add any custom styles for your component here */
  </style>
  