<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <hello-world msg="Yeet yeet beat my meat" />
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import HelloWorld from "../components/HelloWorld.vue";

@Component({
  components: {
    "hello-world": HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
