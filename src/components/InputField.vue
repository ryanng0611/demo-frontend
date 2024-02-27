<template>
  <div>
    <input v-model="input" />
    <p v-show="showTxt">{{ augInput }}</p>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class InputField extends Vue {
  input = "";

  get showTxt() {
    return this.input.length > 0;
  }

  get augInput() {
    return this.input + (this.showTxt ? ", funny times" : "");
  }
}
</script>
