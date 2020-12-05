<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    
      <div v-for="r in lastWatchedRecipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </div>

      <!-- <ButtonRandom  v-on:addItem="this.updateRecipes"> </ButtonRandom> -->

  </b-container>


</template>

<script>
import RecipePreview from "./RecipePreview.vue";

export default {
  name: "LastThreeRecipes",
  components: {
    RecipePreview,
    
  },
  props: {
    title: {
      type: String,
      required: true
    },
   


  },
    data() {
    return {
     lastWatchedRecipes:[],
     
    };
  }
  ,created(){
    this.getThreeLastRecipes()
    

  },
  methods: {
      async getThreeLastRecipes(){
        if(this.$root.store.username){
        try {
        const response = await this.axios.get(
          "http://localhost:3000/users/threeLastRecipes"
        );

        console.log(response);
        const recipes = response.data
        // const recipes = [{"id":638741,"title":"Chipotle Black Bean Soup with Avocado Cream","readyInMinutes":45,"aggregateLikes":37,"vegetarian":true,"vegan":false,"glutenFree":true,"image":"https://spoonacular.com/recipeImages/638741-556x370.jpg"},{"id":639866,"title":"Coffee Cream Martinis","readyInMinutes":45,"aggregateLikes":19,"vegetarian":false,"vegan":false,"glutenFree":true,"image":"https://spoonacular.com/recipeImages/639866-556x370.jpg"},{"id":663931,"title":"Tuna Mexi Melts","readyInMinutes":45,"aggregateLikes":9,"vegetarian":false,"vegan":false,"glutenFree":false,"image":"https://spoonacular.com/recipeImages/663931-556x370.jpg"}]
 
        this.lastWatchedRecipes = [];
        this.lastWatchedRecipes.push(...recipes);
        //  console.log(110,recipes);

         console.log(333,this.lastWatchedRecipes);
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
      }

      }
  }



};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
