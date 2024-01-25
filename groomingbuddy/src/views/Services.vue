<template>
  <div class="container text-center" :style="{ backgroundColor: skinColor }">
    <h1 class="display-4 mt-5 see-through-text">SERVICES</h1>

    
    <div class="service-table mt-5">
      <h2>Grooming Pricing</h2>
      <table>
        <thead>
          <tr>
            <th class="service-type">Service Type</th>
            <th class="price">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service-type">Hair Brushing</td>
            <td class="price">€40</td>
          </tr>
          <tr>
            <td class="service-type">Ear Cleaning</td>
            <td class="price">€20</td>
          </tr>
          <tr>
            <td class="service-type">Nail Trim</td>
            <td class="price">€30</td>
          </tr>
        </tbody>
      </table>
    </div>

   
    <div class="service-table mt-5">
      <h2>Bath and Hygiene Pricing</h2>
      <table>
        <thead>
          <tr>
            <th class="service-type">Service Type</th>
            <th class="price">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service-type">Regular Bath</td>
            <td class="price">€25</td>
          </tr>
          <tr>
            <td class="service-type">Dental Care</td>
            <td class="price">€15</td>
          </tr>
          <tr>
            <td class="service-type">Pawdicure</td>
            <td class="price">€15</td>
          </tr>
        </tbody>
      </table>
    </div>

    
    <div class="service-table mt-5">
      <h2>Additional Services Pricing</h2>
      <table>
        <thead>
          <tr>
            <th class="service-type">Service Type</th>
            <th class="price">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service-type">Flea Treatment</td>
            <td class="price">€20</td>
          </tr>
          <tr>
            <td class="service-type">De-shedding</td>
            <td class="price">€25</td>
          </tr>
          <tr>
            <td class="service-type">Aromatherapy</td>
            <td class="price">€15</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
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

<style lang="css">
.container {
  font-family: 'Your-Fancy-Font', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
  border-radius: 50px;
}

.see-through-text {
  opacity: 0.4; 
}

.service-content {
  margin-top: 30px;
}

.service-content h2 {
  font-size: 24px;
  color: #3a99ce;
}

.service-content ul {
  list-style-type: none;
  padding: 0;
}

.service-content li {
  font-size: 18px;
  margin-bottom: 10px;
}

.service-table {
  margin-top: 30px;
}

.service-table h2 {
  font-size: 36px;
  color: #3a99ce;
}

.service-table table {
  width: 70%;
  margin: auto;
  border-collapse: collapse;
  margin-top: 20px; 
}

.service-table th,
.service-table td {
  border: 1px solid #3a99ce;
  padding: 20px;
  text-align: center;
  font-weight: bold; 
  font-size: 18px; 
  font-family: 'Your-Fancy-Font', Avenir, Helvetica, Arial, sans-serif;
}

.service-table th {
  background-color: #3a99ce;
  color: #fff;
  font-size: 24px;
}

.service-table .service-type {
  width: 60%;
}

.service-table .price {
  width: 40%;
}
</style>
