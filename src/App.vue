<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
    />
    <app-header :companyName="compName">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/register">Register</router-link> |
        <router-link to="/users">All Users</router-link> |
        <router-link to="/update">Update Users</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/counter">Counter</router-link>
      </nav></app-header
    >
    <router-view @change-comp-name="updateCompanyName($event)" />
    <app-footer :companyName="compName"></app-footer>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class RootComponent extends Vue {
  compName = "AnitaBlackHawk Inc.";

  updateCompanyName(updatedTitle) {
    this.compName = updatedTitle;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
