<template>
  <div class="container-fluid">
  <div class="row">
    <div class="col-sm-6 text-black">
      <div class="px-5 ms-xl-4">
        <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style="color: #709085;"></i>
        <span class="h1 fw-bold mb-0"></span>
      </div>

      <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
        <form style="width: 23rem;" @submit.prevent="handleRegister" ref="form">
          <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 5px;">SIGN UP</h3>

          <div class="form-outline mb-3">
            <input
          type="text"
          class="form-control"
          name="username"
          v-model="username"
          @input="onChangeUsername"
        />
            <label class="form-label" for="form2Example18">Username</label>
          </div>

          <div class="form-outline mb-3">
            <input
          type="text"
          class="form-control"
          name="email"
          v-model="email"
          @input="onChangeEmail"
        />
            <label class="form-label" for="form2Example18">Email address</label>
          </div>

          <!-- <div class="form-outline mb-3">
            <input type="email" id="form2Example18" class="form-control form-control-lg" v-model="number" />
            <label class="form-label" for="form2Example18">Phone number</label>
          </div> -->

          <div class="form-outline mb-3">
            <input
          type="password"
          class="form-control"
          name="password"
          v-model="password"
          @input="onChangePassword"
        />
            <label class="form-label" for="form2Example28">Password</label>
          </div>
          

          <div class="pt-1 mb-4">
            <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
          </div>

          <div v-if="message" class="form-group">
            <div :class="successful ? 'alert alert-success' : 'alert alert-danger'" role="alert">
              {{ message }}
            </div>
          </div>

          <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!"></a></p>
          <router-link to="/login" v-slot="{ navigate }">
            <p>Already have an account? <a href="#!" class="link-info">Login</a></p>
          </router-link>
        </form>
      </div>
    </div>

    <div class="col-sm-6 px-0 d-none d-sm-block">
      <img
        src="@/assets/dogosignup.png"
        alt="Login image"
        class="w-70 vh-70"
        style="object-fit: cover; object-position: bottom; margin-top: 230px;">
    </div>
  </div>
</div>
<!-- <div class="col-md-12">
<div class="card card-container">

  <form @submit.prevent="handleRegister" ref="form">
    <div>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          class="form-control"
          name="username"
          v-model="username"
          @input="onChangeUsername"
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="text"
          class="form-control"
          name="email"
          v-model="email"
          @input="onChangeEmail"
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          name="password"
          v-model="password"
          @input="onChangePassword"
        />
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
      </div>
    </div>

    <div v-if="message" class="form-group">
      <div :class="successful ? 'alert alert-success' : 'alert alert-danger'" role="alert">
        {{ message }}
      </div>
    </div>
  </form>
</div>
</div> -->
</template>

<script>
import AuthService from "../services/auth.service";

export default {
data() {
return {
  username: "",
  email: "",
  password: "",
  successful: false,
  message: "",
};
},
methods: {
onChangeUsername(e) {
  this.username = e.target.value;
},
onChangeEmail(e) {
  this.email = e.target.value;
},
onChangePassword(e) {
  this.password = e.target.value;
},
handleRegister() {
  AuthService.register(this.username, this.email, this.password)
    .then(response => {
      this.message = response.data.message;
      this.successful = true;
    })
    .catch(error => {
      const resMessage =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      this.message = resMessage;
      this.successful = false;
    });
},
},
};
</script>
