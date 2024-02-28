<template>
  <div>
    <input v-model="input" />
    <!-- <p v-show="showTxt">{{ augInput }}</p> -->
    <button v-on:click="changeTitle">Change name</button>
  </div>
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
export default class InputField extends MessageProp {
  input = this.compName;

  get showTxt() {
    return this.input.length > 0;
  }

  get getInput() {
    return this.input;
  }

  get getCompName() {
    return this.compName;
  }

  get augInput() {
    return this.input + (this.showTxt ? ", funny times" : "");
  }

  changeTitle() {
    this.$emit("changeTitle", this.input);
  }
}
</script>
