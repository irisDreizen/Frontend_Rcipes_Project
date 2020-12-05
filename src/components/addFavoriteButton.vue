<template>
  <div v-if="this.saved==1">
    <li>Saved!</li>
  </div>
  <div v-else>
    <li>
      <b-button class="save" v-on:click="addToFavorite">Save</b-button>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      saved: 0
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    },
    isFavorite: {
      type: Number,
      required: true
    }
  },
  computed: {
    checkIfFavorite() {
      if (this.isFavorite == 1) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    this.saved = this.isFavorite;
  },
  methods: {
    async addToFavorite() {
      if (this.$root.store.username) {
        try {
          console.log("chen check favorite coockie");
          const response = await this.axios.post(
            "http://localhost:3000/users/addNewRecipeToFavorites",
            {
              id: this.recipe.id
            }
          );
          this.$root.store.myFavorites = [];
          console.log("global favorite empty");

          console.log(this.recipe, "recipe added to favorite");
          console.log(this.recipe.isFavorite, "is favorite");
          //   this.saved = 1;
          this.saved = 1;

          if (localStorage.lastSearch) {
            console.log(
              localStorage.lastSearch,
              "information from local storage"
            );
            var recipesArray = JSON.parse(localStorage.lastSearch);
            console.log(recipesArray);
            for (var i = 0; i < recipesArray.length; i++) {
              console.log("1");
              if (recipesArray[i].id == this.recipe.id) {
                recipesArray[i].isFavorite = 1;
                console.log("2");
              }
            }
            console.log(recipesArray, "new array");
            localStorage.setItem("lastSearch", JSON.stringify(recipesArray));
          }

          // let savedButton = document.getElementsByClassName("save");
          // console.log(savedButton);
          // savedButton.disabled = true;
        } catch (error) {
          console.log("unathurized");
          this.$router.push("/login");
        }
      }
    }
  }
};
</script>

<style>
</style>