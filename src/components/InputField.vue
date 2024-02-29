<template>
  <div>
    <input v-model="input" />
    <button @click="changeCompanyNameEvent">Change name</button>
    <br />
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { eventBus } from "../main";

const MessageProp = Vue.extend({
  props: {
    compName: String,
  },
});

@Component
export default class InputField extends MessageProp {
  input = "";

  changeCompanyNameEvent() {
    eventBus.$emit("bus-event-trigger", this.input);
    this.$emit("event-trigger", this.input);
  }
}
</script>
