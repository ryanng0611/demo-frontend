<template>
  <div class="about">
    <h1>This is an about page</h1>
    <InputField v-on:changeComp="updateComp($event)" />
    <h2>{{ getCompName }}</h2>
  </div>
</template>

<script>
// import InputField from "../components/InputField.vue";

// export default {
//   components: {
//     InputField,
//   },
// };

import Vue from "vue";
import Component from "vue-class-component";
import InputField from "../components/InputField.vue";

@Component({
  components: {
    InputField,
  },
  props: {
    compName: String,
  },
})
export default class AboutView extends Vue {
  compNameNested = "";

  get getCompName() {
    return this.compNameNested;
  }

  updateComp(updatedTitle) {
    this.compNameNested = updatedTitle;
  }
}

// console.log(this.compName);
</script>
