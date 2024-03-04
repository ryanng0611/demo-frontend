<template>
  <user-update />
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import UserUpdate from "@/components/UserUpdate.vue";

@Component({
  components: {
    "user-update": UserUpdate,
  },
})
export default class UserUpdateView extends Vue {}
</script>
