<template>
  <div class="container">
    <br>
    <h1>Search Page</h1>
    <br>
    <SearchForm v-on:move-query="SerchForResults" />
      <br>
      <b-button id="sortDuration" @click="sortRecipesByDuration" class="invisible">sort by duration</b-button>
      <div class="divider"/>
      <b-button id="sortPopulaity" @click="sortRecipesByPopularity" class="invisible">sort by popularity</b-button>
      <br>
      <br>
      <b-alert variant="danger" dismissible fade :show="showDismissibleAlert"  @dismissed="showDismissibleAlert=false">
      There is no results, try another search words
    </b-alert>
    <div v-for="r in recipes" :key="r.id">
      <RecipePreview
        class="recipePreview"
        :recipe="r"
        :isLogin="$root.store.username"
      />
    </div>
    <br>
    <br>
      <!-- <recipePreviewList class="recipePreview" :recipes="recipes" title='Your search results'></recipePreviewList> -->
  </div>
</template>

<script>
import RecipePreview from "../components/RecipePreview";
import SearchForm from "../components/SearchForm"
export default {
  name: "SearchPage",
  components:{
    SearchForm,
    RecipePreview
  },
  data(){
    return{
      recipes: [],
      isReadyToShow: true,
      showDismissibleAlert: false
    }
  },
  mounted(){
    this.loadSearchHistory();
  },
  methods:{
       loadSearchHistory(){
          try {
            if(this.$root.store.username){
              if(localStorage.lastSearch){
                this.recipes=JSON.parse(localStorage.lastSearch);
                if(this.recipes.length!=0){
                  this.enableSortButtons();
                }
              }
            }
            else{
               if(localStorage.lastSearch){
                localStorage.removeItem('lastSearch');
              }
            }
          } catch (error) {
            
          }
       },
       async updateRecipes(query, num, cuisine, diet, intolerence) {
      try {
        let amount = num;
        if(amount==null){
          amount='5';
        }
        let url = "http://localhost:3000/recipes/search/query/"+query+"/amount/"+amount
        if(cuisine!=''||diet!=''||intolerence!=''){
          url=url+"?";
        }
        if(cuisine!=''){
          if(url.slice(-1)=="?"){
            url=url+"cuisine="+cuisine;
          }
          else{
            url=url+"&cuisine="+cuisine;
          }
          
        }
        if(diet!=''){
           if(url.slice(-1)=="?"){
            url=url+"diet="+diet;
           }
           else{
             url=url+"&diet="+diet;
           }
        }
        if(intolerence!=''){
          if(url.slice(-1)=="?"){
            url=url+"intolerence="+intolerence;
          }
          else{
            url=url+"&intolerence="+intolerence;
          }
        }
        const response = await this.axios.get(url );

        console.log(response.data);
        const recipesFromServer = response.data;
        // const recipes = [{"id":638741,"title":"Chipotle Black Bean Soup with Avocado Cream","readyInMinutes":45,"aggregateLikes":37,"vegetarian":true,"vegan":false,"glutenFree":true,"image":"https://spoonacular.com/recipeImages/638741-556x370.jpg"},{"id":639866,"title":"Coffee Cream Martinis","readyInMinutes":45,"aggregateLikes":19,"vegetarian":false,"vegan":false,"glutenFree":true,"image":"https://spoonacular.com/recipeImages/639866-556x370.jpg"},{"id":663931,"title":"Tuna Mexi Melts","readyInMinutes":45,"aggregateLikes":9,"vegetarian":false,"vegan":false,"glutenFree":false,"image":"https://spoonacular.com/recipeImages/663931-556x370.jpg"}]
        this.recipes = [];
        // if(recipesFromServer!=null && recipesFromServer!=false){
        //     this.recipes.push(...recipesFromServer);
        // }
        // localStorage.setItem("lastSearch",this.recipes);
      
   

      ////////////////////////////////////
     // const recipes = response.data;
        let tempArray = [];
        if(recipesFromServer!=false && recipesFromServer!=null){
           tempArray.push(...recipesFromServer);
           console.log("ksa");
        }
       

        // console.log(this.recipesMainPage, "recipes Main page");
      if(tempArray.length!=0){
        if (this.$root.store.username) {
          let recipesiD = [];

          for (let i = 0; i < amount; i++) {
            if (tempArray[i]) {
              recipesiD.push(tempArray[i].id);
              console.log(tempArray[i].id, "rcipe id");
            }
          }

          const responseInfo = await this.axios.get(
            "http://localhost:3000/users/recipeInfo/[" + recipesiD + "]"
          );

          console.log(responseInfo, "info array");

          for (let i = 0; i < amount; i++) {
            if (tempArray[i]) {
              // if(responseInfo.data[this.recipesMainPage[i].id][1].saveFavorites)
              tempArray[i].isFavorite =
                responseInfo.data[tempArray[i].id][1].saveFavorites;
              console.log(
                responseInfo.data[tempArray[i].id][1].saveFavorites,
                "is favorires"
              );

              tempArray[i].isWatched =
                responseInfo.data[tempArray[i].id][0].watched;
              console.log(
                responseInfo.data[tempArray[i].id][0].watched,
                "is watched"
              );
            }
          }
          localStorage.setItem("lastSearch",JSON.stringify(tempArray));
        }
         if(recipesFromServer!=null && recipesFromServer!=false){
            this.recipes.push(...tempArray);
        }
          

      }
 
       if(this.recipes.length==0){
          this.showDismissibleAlert=true;
        }
        else{
          this.enableSortButtons();
        }

        console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    },
    SerchForResults(query, num, cuisine, diet, intolerence){
      this.updateRecipes(query, num, cuisine, diet, intolerence);
      //removeRecipes();
          this.isReadyToShow=true;
    },
    removeRecipes(){
      isReadyToShow=false;
    },
    sortRecipesByDuration(){
      let tempRecipes=[];
      tempRecipes=this.recipes;
      tempRecipes.sort(function(a,b){
        return a.readyInMinutes-b.readyInMinutes;
      })
      this.recipes=[];
      this.recipes.push(...tempRecipes);
    },
    sortRecipesByPopularity(){
      let tempRecipes=[];
      tempRecipes=this.recipes;
      tempRecipes.sort(function(a,b){
        return b.aggregateLikes-a.aggregateLikes;
      })
      this.recipes=[];
      this.recipes.push(...tempRecipes);
    },
    enableSortButtons(){
          document.getElementById("sortDuration").classList.remove('invisible');
          document.getElementById("sortPopulaity").classList.remove('invisible');
    }
  
  }

}
</script>

<style>
h1 { color: #CEF0D4; font-family: 'Rouge Script', cursive; font-size: 60px; font-weight: normal; line-height: 48px; margin: 0 0 50px; text-align: center; text-shadow: 1px 1px 2px #082b34; }
</style>