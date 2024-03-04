<template>
  <div id="user-form">
    <user-form></user-form>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import UserRegister from "@/components/UserRegister";

@Component({
  components: {
    "user-form": UserRegister,
  },
})
export default class UserFormView extends Vue {}
</script>

<style scoped>
#user-form {
  text-align: center;
}
</style>
