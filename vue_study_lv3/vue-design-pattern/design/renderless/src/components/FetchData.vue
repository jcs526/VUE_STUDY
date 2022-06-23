<script>
import axios from "axios";

export default {
  props: ["url"],
  data() {
    return {
      response: null,
      loading: true,
    };
  },
  created() {
    axios
      .get(this.url)
      .then(({ data }) => {
        this.response = data;
        this.loading = !this.loading;
      })
      .catch((error) => {
        alert("[ERROR] fetching the data", error);
        console.log(error);
      });
  },
  render() {
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading,
    });
  },
};
</script>

<style>
</style>