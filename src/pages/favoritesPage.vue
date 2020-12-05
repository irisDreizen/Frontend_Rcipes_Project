<template>
  <div>
    <recipePreviewList class="recipePreview" :recipes="recipes" title="Your favorite recipes"></recipePreviewList>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList.vue";
export default {
  name: "favoritePage",
  data() {
    return {
      recipes: [],
   
    };
  },
  components: {
    RecipePreviewList
  },
  mounted() {
    // this.getFavoriteRecipes();
  },
  methods: {
    // async getFavoriteRecipes() {
    //   const url = "http://localhost:3000/users/myFavorites";
    //   const response = await this.axios.get(url);
    //   const recipesFromServer = response.data;
    //   this.recipes = [];
    //   if (recipesFromServer != null && recipesFromServer != false) {
    //     this.recipes.push(...recipesFromServer);
    //   }
    //   if (this.recipes.length == 0) {
    //     this.showDismissibleAlert = true;
    //   }
    // }
  }
};
</script>

<style>
</style>