<template>
  <div>
    <b-alert
      variant="success"
      dismissible
      fade
      :show="showDismissibleAlert"
      @dismissed="showDismissibleAlert=false"
    >You don't have your own recipes :(</b-alert>
    <recipePreviewList
      class="recipePreview"
      title="Your recipes"
      :isLoginPreList="this.$root.store.username"
    ></recipePreviewList>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList.vue";
export default {
  name: "myRecipesPage",
  data() {
    return {
      recipes: [],
      showDismissibleAlert: false
    };
  },
  components: {
    RecipePreviewList
  },
  mounted() {
    //this.getMyRecipes();
  },
  methods: {
    //   async getMyRecipes(){
    //     let url = "http://localhost:3000/users/myRecepies/getPreview";
    //     const response = await this.axios.get(url );
    //     const recipesFromServer = response.data;
    //     this.recipes = [];
    //     if(recipesFromServer!=null && recipesFromServer!=false){
    //         this.recipes.push(...recipesFromServer);
    //     }
    //     if(this.recipes.length==0){
    //         this.showDismissibleAlert=true;
    //     }
    //   }
  }
};
</script>

<style>
</style>