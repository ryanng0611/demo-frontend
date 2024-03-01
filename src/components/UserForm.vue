<template>
  <div>
    <h1>User Register Form</h1>
    <hr />
    <form id="user-registration-form">
      <b-field grouped label="Username" label-position="on-border">
        <b-input
          icon="account"
          v-model="username"
          placeholder="Tess Thickell"
          maxlength="30"
          expanded
        ></b-input>
      </b-field>
      <b-field grouped label="Password" label-position="on-border">
        <b-input
          icon="lock"
          v-model="password"
          type="password"
          placeholder="bendover123"
          password-reveal
          expanded
        >
        </b-input>
      </b-field>
      <b-button grouped type="submit is-success" @click="registerUser"
        >Submit</b-button
      >
    </form>
    <p v-if="loading">Sending</p>
    <p v-else>{{ responseMessage }}</p>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";

@Component()
export default class UserForm extends Vue {
  username = "";
  password = "";
  loading = false;
  responseMessage = "";

  async registerUser() {
    this.loading = true;
    try {
      const baseURL = "http://localhost:3000";
      const data = { username: this.username, password: this.password }; // Prepare JSON data object
      console.log(data.username + data.password);
      const response = await axios.post(`${baseURL}/users/createUser`, data, {
        headers: { "Content-Type": "application/json" },
      });
      this.responseMessage = response.data.message; // Extract response message
    } catch (error) {
      console.error(error);
      this.responseMessage = "Error sending data.";
    } finally {
      this.loading = false;
      this.username = "";
      this.password = "";
    }
  }

  submitForm() {
    console.log("yes it's me, " + this.username + " | " + this.password);
  }
}
</script>

<style scoped>
#user-registration-form * {
  box-sizing: border-box;
}

#user-registration-form {
  margin: 20px auto;
  max-width: 500px;
}

h1 {
  font-size: xx-large;
  font-weight: bold;
  padding-top: 1em;
}
/* 
form {
  padding: auto;
} */
</style>
