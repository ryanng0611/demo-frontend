<template>
  <footer class="footer">
    <p>&copy; {{ footerContent }}</p>
  </footer>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    companyName: String,
  },
})
export default class FooterComponent extends Vue {
  get footerContent() {
    return new Date().getFullYear() + " " + this.companyName;
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
