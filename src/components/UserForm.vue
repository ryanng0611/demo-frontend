<template>
  <div id="user-register-form">
    <h1>User Register Form</h1>
    <hr />
    <form>
      <label>Username: </label>
      <input type="text" required />
      <label>Password: </label>
      <input type="password" required />
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component()
export default class UserForm extends Vue {}
</script>

<style scoped>
#user-register-form * {
  box-sizing: border-box;
}

#user-register-form {
  margin: 20px auto;
  max-width: 500px;
}

input[type="text"],
input[type="password"] {
  display: block;
  width: 100%;
  padding: 8px;
}

label {
  display: block;
  margin: 20px 0 10px;
  text-align: left;
}
</style>
