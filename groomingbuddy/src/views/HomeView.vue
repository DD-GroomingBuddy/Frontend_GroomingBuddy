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
      
      <Buttons
        class="buttons-Services"
        content="text-icon"
        divClassName="design-component-instance-node"
        size="small"
        state="default"
        style="light"
        text="Services"
        type="negative"
        :visible="false"
      />

      <Buttons
        class="buttons-Appointments"
        content="text-icon"
        divClassName="design-component-instance-node"
        size="small"
        state="default"
        style="light"
        text="Appointments"
        type="negative"
        :visible="false"
      />

      <Buttons
        class="buttons-About"
        content="text-icon"
        divClassName="design-component-instance-node"
        size="small"
        state="default"
        style="light"
        text="About"
        type="negative"
        :visible="false"
      />

      <Buttons
        class="buttons-Contact"
        content="text-icon"
        divClassName="design-component-instance-node"
        size="small"
        state="default"
        style="light"
        text="Contact"
        type="negative"
        :visible="false"
      />

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
  top: -20px;
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
  left: 420px !important; 
  position: absolute !important;
  top: 25px !important; 
  width: 82px !important;
  font-family: "Abel-Regular", Helvetica !important;
  font-size: 24px !important;
  font-weight: 400 !important;
  letter-spacing: 0 !important;
  line-height: normal !important;
  background-color: #24242417;
  border-color: #24242417;
  color: #ffffffda;
}

.macbook-pro .buttons-Services {
  border-radius:15px !important;
  display: flex !important;
  height: 40px !important;
  left: 510px !important; 
  position: absolute !important;
  top: 25px !important; 
  width: 108px !important;
  font-family: "Abel-Regular", Helvetica !important;
  font-size: 24px !important;
  font-weight: 400 !important;
  letter-spacing: 0 !important;
  line-height: normal !important;
  background-color: #24242417;
  border-color: #24242417;
  color: #ffffffda;
}

.macbook-pro .buttons-Appointments {
  border-radius:15px !important;
  display: flex !important;
  height: 40px !important;
  left: 625px !important; 
  position: absolute !important;
  top: 25px !important; 
  width: 163px !important;
  font-family: "Abel-Regular", Helvetica !important;
  font-size: 24px !important;
  font-weight: 400 !important;
  letter-spacing: 0 !important;
  line-height: normal !important;
  background-color: #24242417;
  border-color: #24242417;
  color: #ffffffda;
}

.macbook-pro .buttons-About {
  border-radius:15px !important;
  display: flex !important;
  height: 40px !important;
  left: 795px !important; 
  position: absolute !important;
  top: 25px !important; 
  width: 78px !important;
  font-family: "Abel-Regular", Helvetica !important;
  font-size: 24px !important;
  font-weight: 400 !important;
  letter-spacing: 0 !important;
  line-height: normal !important;
  background-color: #24242417;
  border-color: #24242417;
  color: #ffffffda;
}

.macbook-pro .buttons-Contact {
  border-radius:15px !important;
  display: flex !important;
  height: 40px !important;
  left: 880px !important; 
  position: absolute !important;
  top: 25px !important; 
  width: 100px !important;
  font-family: "Abel-Regular", Helvetica !important;
  font-size: 24px !important;
  font-weight: 400 !important;
  letter-spacing: 0 !important;
  line-height: normal !important;
  background-color: #24242417;
  border-color: #24242417;
  color: #ffffffda;
}

.macbook-pro .buttons-instance {
  border-radius: 15px !important;
  font-size: 18px;
  justify-content: center; 
  align-items: center;
  display: flex !important;
  height: 48px !important;
  left: 1325px !important;
  position: absolute !important;
  top: 47px !important;
  width: 147px !important;
  background-color: #ffffff05;
  border-color: #ffffff;
  color: #ffffffda;
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
  font-size: 18px;
  justify-content: center; 
  align-items: center;
  display: flex !important;
  height: 48px !important;
  left: 1150px !important;
  position: absolute !important;
  top: 47px !important;
  width: 147px !important;
  background-color: #ffffff;
  border-color: #ffffff;
  color: #000000da;
}
</style>

