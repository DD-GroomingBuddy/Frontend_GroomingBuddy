<template>
  <div class="login">
    <div class="overlap-group-wrapper">
      <div class="overlap-group">
        <div class="rectangle" />
        <img
          class="hi-WELCOME-BACK-HOPE"
          alt="Hi WELCOME BACK HOPE"
          src="hi-WELCOME-BACK-HOPE-YOU-HAD-a-PAWTASTIC-DAY.png"
        />
        <div class="rectangle-2" />
        <div class="already-account">
          <p class="p">Don’t have an account ?</p>
          <div class="text-wrapper-5">Sign Up</div>
        </div>
        <div class="frame">
          <div class="frame-2">
            <div class="frame-3">
              <div class="frame-4">
                <div class="text-wrapper-6">Login</div>
                <div class="text-wrapper-7">Enter your account details</div>
              </div>
              <div class="frame-2">
                <div class="frame-5">
                  <div class="text-wrapper-8">Username</div>
                  <img class="line" alt="Line" src="line-1.svg" />
                </div>
                <div class="frame-5">
                  <div class="frame-6">
                    <div class="text-wrapper-8">Password</div>
                    <img class="eye-slash-fill" alt="Eye slash fill" src="eye-slash-fill.svg" />
                  </div>
                  <img class="line" alt="Line" src="line-2.svg" />
                </div>
              </div>
            </div>
            <div class="text-wrapper-9">Forgot Password?</div>
          </div>
          <div class="div-wrapper">
            <div class="text-wrapper-10">Login</div>
          </div>
        </div>
        <img
          class="image-1"
          alt="Image"
          :src="require('@/assets/kost za breke 2.png')" 
        />
        <img
          class="image-4"
          alt="Image"
          :src="require('@/assets/kost za breke 2.png')" 
        />
        <img
          class="image-2"
          alt="Image"
          :src="require('@/assets/kost za breke 2.png')" 
        />
        <img
          class="image-3"
          alt="Image"
          :src="require('@/assets/kost za breke 2.png')" 
        />

        <img
        class="little-white-dog-on"
        alt="Little white dog on"
        :src="require('@/assets/Little_white_dog.png')" 
        />


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
      </div>
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
  background-color: #edcfb9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.macbook-pro .overlap-group-wrapper {
  background-color: #edcfb9;
  height: 982px;
  overflow: hidden;
  width: 1512px;
}

.macbook-pro .overlap-group {
  height: 990px;
  position: relative;
  width: 1493px;
}

.macbook-pro .rectangle {
  background-color: #d9d9d9;
  height: 982px;
  left: 470px;
  mix-blend-mode: color-burn;
  position: absolute;
  top: 8px;
  width: 1023px;
}

.macbook-pro .hi-WELCOME-BACK-HOPE {
  height: 401px;
  left: 516px;
  position: absolute;
  top: 171px;
  width: 540px;
}

.macbook-pro .text-wrapper {
  color: #ffffff;
  font-family: "Abel-Regular", Helvetica;
  font-size: 24px;
  font-weight: 400;
  left: 990px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 60px;
  width: 84px;
}

.macbook-pro .buttons-home {
  border-radius:15px !important;
  display: flex !important;
  height: 40px !important;
  left: 400px !important; 
  position: absolute !important;
  top: 25px !important; 
  width: 82px !important;
  font-family: "Abel-Regular", Helvetica !important;
  font-size: 24px !important;
  font-weight: 400 !important;
  letter-spacing: 0 !important;
  line-height: normal !important;
  background-color: #fefefe17;
  border-color: #cacaca29;
  color: #000000a5;
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
  background-color: #d9a78846;
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
  background-color: #d9a78846;
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
  background-color: #d9a78846;
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
  background-color: #d9a78846;
  border-color: #24242417;
  color: #ffffffda;
}

.macbook-pro .div {
  color: #ffffff;
  font-family: "Abel-Regular", Helvetica;
  font-size: 24px;
  font-weight: 400;
  left: 854px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 61px;
  width: 78px;
}

.macbook-pro .text-wrapper-2 {
  color: #ffffff;
  font-family: "Abel-Regular", Helvetica;
  font-size: 24px;
  font-weight: 400;
  left: 662px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 59px;
  width: 131px;
}

.macbook-pro .text-wrapper-3 {
  color: #ffffff;
  font-family: "Abel-Regular", Helvetica;
  font-size: 24px;
  font-weight: 400;
  left: 519px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 59px;
  width: 82px;
}

.macbook-pro .text-wrapper-4 {
  color: #000000;
  font-family: "Abel-Regular", Helvetica;
  font-size: 24px;
  font-weight: 400;
  left: 413px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 58px;
  width: 57px;
}

.macbook-pro .rectangle-2 {
  background-color: #3a99ce6e;
  height: 982px;
  left: 0;
  mix-blend-mode: darken;
  position: absolute;
  top: 0;
  width: 489px;
}

.macbook-pro .already-account {
  height: 22px;
  left: 115px;
  position: absolute;
  top: 951px;
  width: 249px;
}

.macbook-pro .p {
  color: #ffffff;
  font-family: "Manrope-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
}

.macbook-pro .text-wrapper-5 {
  color: #2f89fc;
  font-family: "Manrope-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  left: 186px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
}

.macbook-pro .frame {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  left: 63px;
  position: absolute;
  top: 265px;
}

.macbook-pro .frame-2 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  position: relative;
}

.macbook-pro .frame-3 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 48px;
  position: relative;
}

.macbook-pro .frame-4 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
}

.macbook-pro .text-wrapper-6 {
  color: #ffffff;
  font-family: "Poppins-Bold", Helvetica;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}

.macbook-pro .text-wrapper-7 {
  color: #ffffffb2;
  font-family: "Poppins-Medium", Helvetica;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}

.macbook-pro .frame-5 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 381px;
}

.macbook-pro .text-wrapper-8 {
  color: #ffffffde;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}

.macbook-pro .line {
  height: 1px;
  object-fit: cover;
  position: relative;
  width: 381px;
}

.macbook-pro .frame-6 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 280px;
  position: relative;
}

.macbook-pro .eye-slash-fill {
  height: 24px;
  position: relative;
  width: 24px;
}

.macbook-pro .text-wrapper-9 {
  color: #ffffffde;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}

.macbook-pro .div-wrapper {
  align-items: center;
  background-color: #3a99ce;
  border-radius: 12px;
  box-shadow: 4px 4px 4px #00000040;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  padding: 12px 0px;
  position: relative;
  width: 393px;
}

.macbook-pro .text-wrapper-10 {
  color: #ffffff;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}

.macbook-pro .image-1 {
  height: 134px;
  left: 31px;
  object-fit: cover;
  position: absolute;
  top: 41px;
  width: 126px;
  opacity: 0.7;
}

.macbook-pro .image-4 {
  height: 134px;
  left: 31px;
  object-fit: cover;
  position: absolute;
  top: 809px;
  width: 126px;
  opacity: 0.7;
}

.macbook-pro .image-2 {
  height: 134px;
  left: 1354px;
  object-fit: cover;
  position: absolute;
  top: 41px;
  width: 126px;
  opacity: 0.7;
}

.macbook-pro .image-3 {
  height: 134px;
  left: 1353px;
  object-fit: cover;
  position: absolute;
  top: 809px;
  width: 126px;
  opacity: 0.7;
}

.macbook-pro .little-white-dog-on {
  height: 481px;
  left: 1015px;
  object-fit: cover;
  position: absolute;
  top: 501px;
  width: 401px;
}
</style>
