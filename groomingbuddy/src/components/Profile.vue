<template>
    <section class="vh-100">
     
      
     <div class="col-sm-6 text-black">
       <div class="px-5 ms-xl-4">
         <i class="fas fa-user-circle fa-2x me-3 pt-5 mt-xl-4" style="color: #2c3e50;"></i>
  
  
       <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
         <div style="width: 23rem;">
           <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px; color: #2c3e50;">Profile</h3>
  
           <div class="form-outline mb-4">
             <p style="color: #2c3e50;"><strong>Name:</strong> {{ currentUser.username }}</p>
           </div>
  
                <div class="form-outline mb-4">
                  <p style="color: #2c3e50;"><strong>Id:</strong> {{ currentUser.id }}</p>
                </div>
  
                <div class="form-outline mb-4">
                  <p style="color: #2c3e50;"><strong>Email:</strong> {{ currentUser.email }}</p>
                </div>
  
                <div class="form-outline mb-4">
                  <p style="color: #2c3e50;"><strong>Authorities:</strong> {{ currentUser.roles }}</p>
                </div>
  
              </div>
            </div>
          </div>
        </div>
    
    </section>
  </template>
  
  <script>
  import AuthService from "../services/auth.service";
  
  export default {
    data() {
      return {
        currentUser: AuthService.getCurrentUser(),
      };
    },
  };
  </script>
  
  <style scoped>
  .vh-100 {
    height: 100vh;
  }
  
  .h-custom-2 {
    height: calc(100% - 60px);
  }
  
  .form-outline p {
    background-color: #ffe0bd;
    padding: 10px;
    border-radius: 5px;
  }
  
  .username-box {
    background-color: #ffe0bd;
    padding: 10px;
    border-radius: 5px;
  }
  </style>
  