<template>
  <div class="container text-center" :style="{ backgroundColor: skinColor }">
    <h1 class="display-4 mt-5 see-through-text">SERVICES</h1>

    <div class="service-table mt-5">
      <h2>Service Pricing</h2>
      <table>
        <thead>
          <tr>
            <th class="service-type">Service Type</th>
            <th class="price">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service-type">Grooming</td>
            <td class="price">$50</td>
          </tr>
          <tr>
            <td class="service-type">Bathing</td>
            <td class="price">$30</td>
          </tr>
          <tr>
            <td class="service-type">Additional</td>
            <td class="price">$20</td>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 60px;
  border-radius: 150px;
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
  margin-top: 15px;
}

.service-table th,
.service-table td {
  border: 1px solid #3a99ce;
  padding: 15px;
  text-align: center;
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
