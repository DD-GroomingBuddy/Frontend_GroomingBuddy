<template>
  <div class="macbook-pro" :class="className">
    <div class="overlap">
      <div class="appointment">
        <div class="overlap-group">
          <div class="text-wrapper">Appointment</div>
          <div class="div">+</div>
        </div>
        </div>
        <div> <p class="grooming-buddy">
          <span class="span">Grooming</span>
          <span class="text-wrapper-2">Buddy</span>
        </p>
      </div>
     
      <Buttons
        class="buttons-home"
        content="text-icon"
        divClassName="design-component-instance-node"
        size="small"
        state="default"
        style="light"
        text="Home"
        type="negative"
        :visible="false"
      />
      
      <div class="text-wrapper-4">Services</div>
      <div class="text-wrapper-5">Appointments</div>
      <div class="text-wrapper-6">About</div>
      <div class="text-wrapper-7">Contact</div>


      <div class="text-wrapper-4">Services</div>
      <div class="text-wrapper-5">Appointments</div>
      <div class="text-wrapper-6">About</div>
      <div class="text-wrapper-7">Contact</div>

      <Buttons
        class="buttons-instance"
        content="text-icon"
        divClassName="design-component-instance-node"
        size="small"
        state="hover"
        style="light"
        text="SignUp"
        type="negative"
        :visible="false"
      />
      <Buttons
        class="buttons-2"
        content="text-icon"
        divClassName="design-component-instance-node"
        size="small"
        state="default"
        style="light"
        text="LogIn"
        type="negative"
        :visible="false"
      />
    </div>
  </div>
</template>

<script>
import Buttons from "./Buttons.vue"; // Adjust the path accordingly

export default {
  name: "MacbookPro",
  components: {
    Buttons,
  },
  props: {
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.macbook-pro {
  -webkit-backdrop-filter: blur(57.4px) brightness(100%);
  backdrop-filter: blur(57.4px) brightness(100%);
  background-color: #ffffff;
  height: 982px;
  width: 1512px;
}

.macbook-pro .overlap {
  background-image: url(../assets/IMG_7032.JPG);
  background-position: 50% 50%;
  background-size: cover;
  height: 982px;
  position: relative;
}

.macbook-pro .appointment {
  height: 290px;
  left: 35px;
  position: absolute;
  top: 200px; /* Adjusted the top value to 300px */
  width: 1000px;
}

.macbook-pro .overlap-group {
  background-color: #3a99ce;
  border-radius: 18px;
  box-shadow: 6px 6px 4px #0000005e;
  height: 107px;
  left: 0;
  position: absolute;
  top: 183px;
  width: 510px;
}

.macbook-pro .text-wrapper {
  color: #ffffff;
  font-family: "Roboto-Bold", Helvetica;
  font-size: 66px;
  font-weight: 700;
  height: 68px;
  left: 100px;
  letter-spacing: -3.3px;
  line-height: 66px;
  position: absolute;
  top: 19px;
  white-space: nowrap;
  width: 351px;
}

.macbook-pro .div {
  color: #ffffff;
  font-family: "Roboto-Bold", Helvetica;
  font-size: 100px;
  font-weight: 700;
  height: 96px;
  left: 26px;
  letter-spacing: -5px;
  line-height: 100px;
  position: absolute;
  top: 5px;
  white-space: nowrap;
  width: 52px;
}

.macbook-pro .grooming-buddy {
  -webkit-text-stroke: 1px #ffffff;
  color: transparent;
  font-family: "Roboto-Bold", Helvetica;
  font-size: 150px;
  font-weight: 700;
  height: 0px;
  left: 40px;
  letter-spacing: -7.5px;
  line-height: 280px;
  position: absolute;
  text-shadow: 6px 6px 4px #00000040;
  top: -1px;
  white-space: nowrap;
}

.macbook-pro .span {
  color: #ffffff;
}

.macbook-pro .text-wrapper-2 {
  color: #3a99ce;
}

.macbook-pro .buttons-home {
  border-radius:15px !important;
  display: flex !important;
  height: 40px !important;
  left: 422px !important; /* Adjust left position to match the old "text-wrapper-3" */
  position: absolute !important;
  top: 45px !important; /* Adjust top position to match the old "text-wrapper-3" */
  width: 82px !important;
  font-family: "Abel-Regular", Helvetica !important;
  font-size: 24px !important;
  font-weight: 400 !important;
  letter-spacing: 0 !important;
  line-height: normal !important;
  background-color: #3a9ace2e;
  border-color: #3a9ace2e;
  color: #ffffff;
}

.macbook-pro .text-wrapper-4 {
  color: #ffffff;
  font-family: "Abel-Regular", Helvetica;
  font-size: 24px;
  font-weight: 400;
  left: 507px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 45px;
  width: 82px;
}

.macbook-pro .text-wrapper-5 {
  color: #ffffff;
  font-family: "Abel-Regular", Helvetica;
  font-size: 24px;
  font-weight: 400;
  left: 620px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 45px;
  width: 82px;
}

.macbook-pro .text-wrapper-6 {
  color: #ffffff;
  font-family: "Abel-Regular", Helvetica;
  font-size: 24px;
  font-weight: 400;
  left: 880px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 45px;
  width: 82px;
}

.macbook-pro .text-wrapper-7 {
  color: #ffffff;
  font-family: "Abel-Regular", Helvetica;
  font-size: 24px;
  font-weight: 400;
  left: 785px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 45px;
  width: 82px;
}

.macbook-pro .buttons-instance {
  border-radius: 15px !important;
  display: flex !important;
  height: 48px !important;
  left: 1325px !important;
  position: absolute !important;
  top: 47px !important;
  width: 147px !important;
}

.macbook-pro .design-component-instance-node {
  font-family: "Gotham-Book", Helvetica !important;
  font-size: 17px !important;
  font-style: unset !important;
  font-weight: 400 !important;
  letter-spacing: -0.85px !important;
  line-height: 17px !important;
  margin-top: unset !important;
}

.macbook-pro .buttons-2 {
  border-radius: 15px !important;
  display: flex !important;
  height: 48px !important;
  left: 1150px !important;
  position: absolute !important;
  top: 47px !important;
  width: 147px !important;
}
</style>

