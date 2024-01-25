<template>
  <section id="about-section" class="pt-5 pb-5 d-flex align-items-center justify-content-center">
    <div class="container wrapabout" :style="{ backgroundColor: skinColor }">
      <div class="red"></div>
      <div class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="blockabout text-center">
            <div class="blockabout-inner">
              <div class="title-big pb-3 mb-3">
                <h3 class="reserved-appointments-title">ABOUT US</h3>
              </div>
              <p class="description-p text-muted pe-0 pe-lg-0">
                In GroomingBuddy, we understand that pets are more than just animals; they are beloved members of the family.
              </p>
              <p class="description-p text-muted pe-0 pe-lg-0">
                With this in mind, our skilled and  compassionate team provides exceptional grooming services tailored to the specific needs and preferences of each pet.
              </p>
              <div class="sosmed-horizontal pt-3 pb-3">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-pinterest"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mt-5 mt-lg-0">
          <img src="@/assets/Little_white_dog.png"
            alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: left;">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skinColor: '#ffe0bd',
    };
  },
};
</script>

<style>
  .sosmed-horizontal a {
    margin-right: 10px;
  }

  .sosmed-horizontal i {
    font-size: 24px;
    color: #333;
  }


  .wrapabout {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px; 
    overflow: hidden; 
  }

  .reserved-appointments-title {
    font-size: 24px;
    color: #3a99ce;
  }

  .description-p {
    font-size: 18px;
    color: #2c3e50;
  }
</style>
