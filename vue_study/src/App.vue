<template>
  <div>
    {{ str }}
    <app-header :props-data="str" @renew="renewStr" />
    <form @submit.prevent="submitForm">
    <div>
      <label for="username"></label>
      id:
      <input type="text" id="username" v-model="username"/>
    </div>
    <div>
      <label for="password"></label>
      pw:
      <input type="text" id="password" v-model="password"/>
      <button>login</button>
    </div>
    </form>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import axios from 'axios';

export default {
  data() {
    return {
      str: "hi",
      username: "",
      password: "",
    };
  },
  components: {
    AppHeader,
  },
  methods: {
    renewStr: function () {
      this.str = "new!!";
    },
    submitForm : function(){
      let url ="https://jsonplaceholder.typicode.com/users/";
      let data = {
        username: this.username,
        password : this.password
      }
      axios.post(url,data)
      .then(res=>console.log(res))
      .catch(err=>console.log(err));
    }
  },
};
</script>

<style>
</style>