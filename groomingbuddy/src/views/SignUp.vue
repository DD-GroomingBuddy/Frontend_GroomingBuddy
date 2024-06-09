<template>
  <!-- <section class="vh-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 text-black">
          <div class="px-5 ms-xl-4">
            <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style="color: #709085;"></i>
            <span class="h1 fw-bold mb-0"></span>
          </div>

          <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
            <form style="width: 23rem;" @submit.prevent="signup">
              <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 5px;">SIGN UP</h3>

              <div class="form-outline mb-3">
                <input type="email" id="form2Example18" class="form-control form-control-lg" v-model="username" />
                <label class="form-label" for="form2Example18">Username</label>
              </div>

              <div class="form-outline mb-3">
                <input type="email" id="form2Example18" class="form-control form-control-lg" v-model="email" />
                <label class="form-label" for="form2Example18">Email address</label>
              </div>

              <div class="form-outline mb-3">
                <input type="email" id="form2Example18" class="form-control form-control-lg" v-model="number" />
                <label class="form-label" for="form2Example18">Phone number</label>
              </div>

              <div class="form-outline mb-3">
                <input type="password" id="form2Example28" class="form-control form-control-lg" v-model="password" />
                <label class="form-label" for="form2Example28">Password</label>
              </div>
              

              <div class="pt-1 mb-4">
                <button class="btn btn-info btn-lg btn-block" type="submit">Sign up</button>
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
  </section> -->
  <dogo-signup></dogo-signup>
</template>

<script>
import DogoSignup from '../components/DogoSignup.vue';

export default {
  components: { DogoSignup },
};
</script>

<style>

</style>
