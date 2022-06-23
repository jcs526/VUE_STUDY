<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart></bar-chart>
    <line-chart @refresh:chart="refreshChart" v-bind:propsdata="chartDataSet"></line-chart>
  </div>
</template>

<script>
import BarChart from "./components/BarChart.vue";
import LineChart from "./components/LineChart.vue";
export default {
  components: {
    BarChart,
    LineChart,
  },
  data() {
    return {
      chartDataSet:[
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    }
  },
  methods: {
    refreshChart(){
      this.chartDataSet=[10,20]
    }
  },
  created() {
    // axios.get()
  },
};
</script>

<style>
</style>