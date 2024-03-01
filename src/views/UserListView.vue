<template>
  <user-list />
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import UserList from "../components/UserList.vue";

@Component({
  components: {
    "user-list": UserList,
  },
})
export default class UserListView extends Vue {}
</script>
