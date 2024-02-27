<template>
  <div>
    <h1>Computed Properties</h1>
    <button @click="incrementA">Add to A</button>
    <button @click="incrementB">Add to B</button>
    <p>A: {{ a }}</p>
    <p>B: {{ b }}</p>
    <p>A Total: {{ addA }}</p>
    <p>B Total: {{ addB }}</p>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class ComputedProps extends Vue {
  a = 0;
  b = 0;

  c = 100;

  incrementA() {
    this.a++;
    console.log("Increment A");
  }
  incrementB() {
    this.b++;
    console.log("Increment B");
  }

  get addA() {
    return this.a + this.c;
  }

  get addB() {
    return this.b + this.c;
  }
}
</script>
