<template>
  <footer class="footer">
    <p>&copy; {{ footerContent }}</p>
  </footer>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

const MessageProp = Vue.extend({
  props: {
    compName: String,
  },
});

@Component
export default class FooterComponent extends MessageProp {
  get footerContent() {
    return new Date().getFullYear() + " " + this.compName;
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
