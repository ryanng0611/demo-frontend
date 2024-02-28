<template>
  <div class="about">
    <h3>Your input:</h3>
    <InputField @event-trigger="companyNameEventPropagator($event)" />
    <br />
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import InputField from "../components/InputField.vue";

@Component({
  components: {
    InputField,
  },
})
export default class AboutView extends Vue {
  companyNameEventPropagator(newName) {
    // Emit event upwards to App.vue
    this.$emit("change-comp-name", newName);
  }
}
</script>
