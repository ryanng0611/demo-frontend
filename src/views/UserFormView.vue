<template>
  <div id="user-form">
    <user-form></user-form>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import UserForm from "@/components/UserForm";

@Component({
  components: {
    "user-form": UserForm,
  },
})
export default class UserFormView extends Vue {}
</script>

<style scoped>
#user-form {
  text-align: center;
}
</style>
