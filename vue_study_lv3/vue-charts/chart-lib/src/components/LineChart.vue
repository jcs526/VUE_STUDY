<template>
  <canvas id="myChart1" width="400" height="400"></canvas>
</template>

<script>
/* eslint-disable */

export default {
    props:['propsdata'],
  mounted() {
    const labels = ["January", "February", "March", "April", "May", "June"];

    const data = {
      labels: labels,
      datasets: this.propsdata,
    };

    const config = {
      type: "bar",
      data: data,
      options: {
        onclick: function () {
            this.$emit('refresh:chart');
        }
      },
    };
    const myChart = new this.$_Chart(
    document.getElementById('myChart1'),
    config
  );
  },  
};
</script>
<style>
</style>