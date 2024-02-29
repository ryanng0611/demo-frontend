<template>
  <div class="counter">
    <br />
    <simple-counter />
    <br />
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import SimpleCounter from "../components/SimpleCounter.vue";

@Component({
  components: {
    "simple-counter": SimpleCounter,
  },
})
export default class CounterView extends Vue {}
</script>
