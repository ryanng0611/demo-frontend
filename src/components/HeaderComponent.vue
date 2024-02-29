<template>
  <header class="header">
    <p>{{ headerContent }}</p>
    <div>
      <slot></slot>
    </div>
  </header>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { eventBus } from "../main";

@Component({
  props: {
    companyName: String,
  },
})
export default class HeaderComponent extends Vue {
  get headerContent() {
    return "A website by " + this.companyName;
  }

  created() {
    eventBus.$on("bus-event-trigger", (data) => {
      this.companyName = data;
    });
  }
}
</script>

<style scoped>
.header {
  text-align: center;
  padding: 1rem;
  color: #fff;
  background-color: #333;
}
</style>
