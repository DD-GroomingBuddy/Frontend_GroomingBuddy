<template>
  <section class="vh-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 text-black">
          <div class="px-5 ms-xl-4">
            <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style="color: #709085;"></i>
            <span class="h1 fw-bold mb-0"></span>
          </div>

          <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
            <form style="width: 23rem;" @submit.prevent="handleLogin" ref="form">
              <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">LOGIN</h3>

              <div class="form-outline mb-4">
                <input
                  type="text"
                  class="form-control"
                  name="username"
                  v-model="username"
                  @input="onChangeUsername"
                />
                <label class="form-label" for="form2Example18">Username</label>
              </div>

              <div class="form-outline mb-4">
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
                <button type="submit" class="btn btn-primary btn-block" :disabled="loading">
                  <span v-if="loading" class="spinner-border spinner-border-sm"></span>
                  <span>Login</span>
                </button>
              </div>

              <div v-if="message" class="form-group">
                <div class="alert alert-danger" role="alert">
                  {{ message }}
                </div>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-muted"></a></p>
              <router-link to="/signup" v-slot="{ navigate }">
                <p><a class="link-info">Register here</a></p>
              </router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'; // Ensure ref is imported from vue
import { useRouter } from 'vue-router';
import AuthService from '../services/auth.service';

export default {
  setup() {
    const form = ref(null);
    const username = ref("");
    const password = ref("");
    const loading = ref(false);
    const message = ref("");
    const router = useRouter();

    const onChangeUsername = (e) => {
      username.value = e.target.value;
    };

    const onChangePassword = (e) => {
      password.value = e.target.value;
    };

    const handleLogin = (e) => {
      e.preventDefault();

      message.value = "";
      loading.value = true;

      AuthService.login(username.value, password.value)
        .then(() => {
          router.push({ name: "home", replace: true }).then(() => {
            window.location.reload(); // Reload the page after navigation
          });      
        })
        .catch((error) => {
          const resMessage =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();

          loading.value = false;
          message.value = resMessage;
        });
    };

    return { form, username, password, loading, message, onChangeUsername, onChangePassword, handleLogin };
  },
};
</script>
