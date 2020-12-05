<template>
  <div>
    <button class="btn btn-outline-primary" v-on:click="addToList">Other Recipes!</button>
  </div>
</template>

<script>
export default {
      name: "ButtonRandom",

  
  methods: {
    addToList() {
      this.$emit("addItem");

    }
  }
};
</script>

<style>
</style>