<template>
  <div>
    <user-form></user-form>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import UserForm from "@/components/UserForm.vue";

@Component({
  components: {
    "user-form": UserForm,
  },
})
export default class UserFormView extends Vue {}
</script>
