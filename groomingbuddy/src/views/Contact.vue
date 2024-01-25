<template>
  <div>
    <h1 style="margin-top: 80px; font-size: 30px; color: #2c3e50;">CONTACT US</h1>

    <form id="contact_form" name="contact_form" method="post" style="margin-top: 60px;">
      <div class="mb-4 row">
        <div class="col">
          <label style="color: #2c3e50;">First Name</label>
          <input type="text" required maxlength="50" class="form-control" id="first_name" name="first_name"
          placeholder="Connor" style="background-color: #ffe0bd; color: #2c3e50;">
        </div>
        <div class="col">
          <label style="color: #2c3e50;">Last Name</label>
          <input type="text" required maxlength="50" class="form-control" id="last_name" name="last_name"
          placeholder="McGregor" style="background-color: #ffe0bd; color: #2c3e50;">
        </div>
      </div>
      <div class="mb-4 row">
        <div class="col">
          <label for="email_addr" style="color: #2c3e50;">Email address</label>
          <input type="email" required maxlength="50" class="form-control" id="email_addr" name="email"
            placeholder="name@example.com" style="background-color: #ffe0bd; color: #2c3e50;">
        </div>
        <div class="col">
          <label for="phone_input" style="color: #2c3e50;">Phone</label>
          <input type="tel" required maxlength="50" class="form-control" id="phone_input" name="Phone"
            placeholder="Phone" style="background-color: #ffe0bd; color: #2c3e50;">
        </div>
      </div>
      <div class="mb-4">
        <label for="message" style="color: #2c3e50;">Message</label>
        <textarea class="form-control" id="message" name="message" rows="5"
          placeholder="Write us a message!" style="background-color: #ffe0bd; color: #2c3e50;   text-indent: 880px;"></textarea>
      </div>
      <router-link to="/thankyoucontact" v-slot="{ navigate }">
        <button type="submit" class="btn btn-primary px-4 btn-lg" style="background-color: #3a99ce;">SUBMIT</button>
      </router-link>
    </form>
  </div>
</template>

<style>
</style>
