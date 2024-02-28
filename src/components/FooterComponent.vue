<template>
  <footer class="footer">
    <p>&copy; {{ year }} AnitaBlackHawk Inc.</p>
  </footer>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class FooterComponent extends Vue {
  get year() {
    return new Date().getFullYear();
  }
}
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 1rem;
  color: #fff;
  background-color: #333;
}
</style>
