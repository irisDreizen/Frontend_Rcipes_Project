<template>
  <b-container>
    <h3>
      {{ title }}:
      {{searchQuery}}
      {{number}}
      <slot></slot>
    </h3>
    
      <div v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </div>
    
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "SearchRecipesList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
    searchQuery: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    cuisine:{
      type: String,
      required: true
    },
    diet:{
      type: String,
      required: true
    },
    intolerence:{
      type: String,
      required: true
    }
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
   // this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          "https://assignment3-2-iris.herokuapp.com/recipes/search/query/"+this.searchQuery+"/amount/"+this.number
        );

        console.log(response);
        const recipes = response.data
        // const recipes = [{"id":638741,"title":"Chipotle Black Bean Soup with Avocado Cream","readyInMinutes":45,"aggregateLikes":37,"vegetarian":true,"vegan":false,"glutenFree":true,"image":"https://spoonacular.com/recipeImages/638741-556x370.jpg"},{"id":639866,"title":"Coffee Cream Martinis","readyInMinutes":45,"aggregateLikes":19,"vegetarian":false,"vegan":false,"glutenFree":true,"image":"https://spoonacular.com/recipeImages/639866-556x370.jpg"},{"id":663931,"title":"Tuna Mexi Melts","readyInMinutes":45,"aggregateLikes":9,"vegetarian":false,"vegan":false,"glutenFree":false,"image":"https://spoonacular.com/recipeImages/663931-556x370.jpg"}]
        this.recipes = [];
        this.recipes.push(...recipes);
        console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    },

  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
