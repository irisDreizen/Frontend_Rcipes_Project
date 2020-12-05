<template>
  <div class="container">
    <!-- <h1 class="title">Explore these recipes</h1> -->
    <!-- <b-button variant="primary" class="otherRecipes" style="center" @click="handleClick">Other Recipes! </b-button> -->
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div v-if="!$root.store.username">
      <b-row>
        <b-col>
          <RecipePreviewList title="Explore these recipes" class="RandomRecipes center" />
        </b-col>

        <br />
        <br />
        <br />
        <br />
        <b-col>
          <br />
          <LoginPage />
        </b-col>
      </b-row>
    </div>
    <div v-else>
      <b-row>
        <b-col>
          <RecipePreviewList
            title="Explore these recipes"
            class="RandomRecipes center"
            :isLoginPreList="this.$root.store.username"
          />
        </b-col>

        <b-col>
          <RecipePreviewList
            title="Last watched recipes"
            :isLoginPreList="this.$root.store.username"
          />
        </b-col>
      </b-row>
    </div>
    <!-- </b-row> -->
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
// import ButtonRandom from "../components/ButtonRandom";
import LoginPage from "./LoginPage";
// import LastThreeRecipes from "../components/LastThreeRecipe";

export default {
  data() {
    return {
      // image_load: false,
      recipesMainPage: []

      //   {
      //   type: [],
      //   required: true
      // }
    };
  },

  components: {
    RecipePreviewList,
    LoginPage
    // ButtonRandom,
    // LastThreeRecipes,
  },
  created() {
    // this.updateRecipes()
  },
  methods: {
    // async updateRecipes() {
    //   try {
    //     const response = await this.axios.get(
    //       "http://localhost:3000/recipes/threeRandomRecipies"
    //     );
    //     console.log(response);
    //     const recipes = response.data
    //     // const recipes = [{"id":638741,"title":"Chipotle Black Bean Soup with Avocado Cream","readyInMinutes":45,"aggregateLikes":37,"vegetarian":true,"vegan":false,"glutenFree":true,"image":"https://spoonacular.com/recipeImages/638741-556x370.jpg"},{"id":639866,"title":"Coffee Cream Martinis","readyInMinutes":45,"aggregateLikes":19,"vegetarian":false,"vegan":false,"glutenFree":true,"image":"https://spoonacular.com/recipeImages/639866-556x370.jpg"},{"id":663931,"title":"Tuna Mexi Melts","readyInMinutes":45,"aggregateLikes":9,"vegetarian":false,"vegan":false,"glutenFree":false,"image":"https://spoonacular.com/recipeImages/663931-556x370.jpg"}]
    //     this.recipesMainPage = [];
    //     this.recipesMainPage.push(...recipes);
    //     //  console.log(110,recipes);
    //      console.log(111,this.recipesMainPage);
    //     // console.log(this.recipes);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>
