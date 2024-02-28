<template>
  <div class="about">
    <h1>This is an about page</h1>
    <InputField
      v-bind:compName="this.compName"
      v-on:changeTitle="updateTitle($event)"
    />
    <h1 v-on:click="changeComp">{{ comp }}</h1>
  </div>
</template>

<script>
import InputField from "../components/InputField.vue";

export default {
  data() {
    return {
      comp: String,
    };
  },
  components: {
    InputField,
  },
  props: {
    compName: String,
  },
  methods: {
    updateTitle: function (updatedTitle) {
      this.comp = updatedTitle;
    },

    changeComp: function () {
      this.$emit("changeComp", this.comp);
    },
  },
};

// console.log(this.compName);
</script>
