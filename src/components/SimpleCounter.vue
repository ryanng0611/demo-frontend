<template>
  <div>
    <button @click="decrement">-</button>
    {{ count }}
    <button @click="increment">+</button>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

// Define the component in class-style
@Component
export default class SimpleCounter extends Vue {
  // Class properties will be component data
  count = 0;

  // Methods will be component methods
  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
</script>
