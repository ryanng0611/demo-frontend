<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/counter">Counter</router-link>
    </nav>
    <router-view
      v-bind:compName.sync="company"
      v-on:changeComp="updateComp($event)"
    />
    <app-footer v-bind:compName="company"></app-footer>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class InputField extends Vue {
  company = "AnitaBlackHawk Inc.";

  updateComp(updatedTitle) {
    this.company = updatedTitle;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
