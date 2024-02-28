<template>
  <div>
    <input v-model="input" />
    <!-- <p v-show="showTxt">{{ augInput }}</p> -->
    <button @click="changeCompanyNameEvent">Change name</button>
    <!-- <p>{{ input }}</p> -->
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
  input = "";

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

  changeCompanyNameEvent() {
    this.$emit("event-trigger", this.input);
  }
}
</script>
