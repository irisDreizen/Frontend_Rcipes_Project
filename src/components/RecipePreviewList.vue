<template>
  <b-container>
    <h1>{{ title }}:</h1>

    <div v-for="r in recipesMainPage" :key="r.id">
      <RecipePreview class="recipePreview" :recipe="r" :title="title" />
    </div>

    <div v-if="this.title == 'Explore these recipes'">
      <ButtonRandom v-on:addItem="this.updateRecipes"></ButtonRandom>
    </div>
    <b-alert
      variant="success"
      dismissible
      fade
      :show="showDismissibleAlert"
      @dismissed="showDismissibleAlert=false"
    >There is no recipes!</b-alert>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
import ButtonRandom from "../components/ButtonRandom.vue";

export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
    ButtonRandom
  },

  props: {
    title: {
      type: String,
      required: true
    },
    isLoginPreList: {
      type: String,
      required: false
    }
  },

  data() {
    return {
      recipesMainPage: [],
      showDismissibleAlert: false
    };
  },
  watch: {
    isLoginPreList: async function(val) {
      console.log("chen watch");
      this.getInfo();
    }
  },

  created() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      let isExistGlobal = false;
      let recipesGlobal = [];
      let urlPath = "";
      if (this.title == "Explore these recipes") {
        urlPath = "http://localhost:3000/recipes/threeRandomRecipies";
      } else if (this.title == "Last watched recipes") {
        urlPath = "http://localhost:3000/users/threeLastRecipes";
        if (this.$root.store.lastWatcheRecipes.length != 0) {
          console.log("there is last watched recipes global storage");
          recipesGlobal = this.$root.store.lastWatcheRecipes;
          isExistGlobal = true;
        }
      } else if (this.title == "Your favorite recipes") {
        urlPath = "http://localhost:3000/users/myFavorites";
        if (this.$root.store.myFavorites.length != 0) {
          console.log("there is favorite global storage");
          recipesGlobal = this.$root.store.myFavorites;
          isExistGlobal = true;
        }
      } else if (this.title == "Your recipes") {
        urlPath = "http://localhost:3000/users/myRecepies/getPreview";
        if (this.$root.store.myRecipes.length != 0) {
          console.log("there is my recipes global storage");
          recipesGlobal = this.$root.store.myRecipes;
          isExistGlobal = true;
        }
      }
      try {
        let recipes = [];
        if (isExistGlobal) {
          this.recipesMainPage = [];
          recipes = recipesGlobal;
          console.log("there is favorite global storage");
        } else {
          const response = await this.axios.get(urlPath);
          this.recipesMainPage = [];
          recipes = response.data;
          if (this.title == "Your favorite recipes") {
            this.$root.store.myFavorites = recipes;
          } else if (this.title == "Your recipes") {
            this.$root.store.myRecipes = recipes;
          } else if (this.title == "Last watched recipes") {
            this.$root.store.lastWatcheRecipes = recipes;
          }

          console.log(
            this.$root.store.myFavorites.length,
            "my global favorites"
          );
        }

        let tempArray = [];
        tempArray.push(...recipes);
        // console.log("ksa");

        // console.log(this.recipesMainPage, "recipes Main page");
        if (this.title != "Your recipes") {
          if (this.$root.store.username) {
            let recipesiD = [];

            for (let i = 0; i < tempArray.length; i++) {
              if (tempArray[i]) {
                recipesiD.push(tempArray[i].id);
                // console.log(tempArray[i].id, "rcipe id");
              }
            }

            const responseInfo = await this.axios.get(
              "http://localhost:3000/users/recipeInfo/[" + recipesiD + "]"
            );

            // console.log(responseInfo, "info array");

            for (let i = 0; i < tempArray.length; i++) {
              if (tempArray[i]) {
                // if(responseInfo.data[this.recipesMainPage[i].id][1].saveFavorites)
                //   if(responseInfo.data[tempArray[i].id][1].saveFavorites){
                tempArray[i].isFavorite =
                  responseInfo.data[tempArray[i].id][1].saveFavorites;
                // console.log(
                //   responseInfo.data[tempArray[i].id][1].saveFavorites,
                //   "is favorires"
                // );

                tempArray[i].isWatched =
                  responseInfo.data[tempArray[i].id][0].watched;
                // console.log(
                //   responseInfo.data[tempArray[i].id][0].watched,
                //   "is watched"
                // );
              }
            }
          }
          // }
        }
        this.recipesMainPage.push(...tempArray);
        if (this.recipesMainPage.length == 0) {
          this.showDismissibleAlert = true;
        }
      } catch (error) {
        this.$router.push("/login");
        console.log(error);
      }
    },
    async getInfo() {
      if (this.title == "Explore these recipes") {
        if (this.$root.store.username) {
          console.log("chen info after watch");
          let tempArray = this.recipesMainPage;
          this.recipesMainPage = [];
          let recipesiD = [];

          for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i]) {
              recipesiD.push(tempArray[i].id);
              console.log(tempArray[i].id, "rcipe id");
            }
          }

          const responseInfo = await this.axios.get(
            "http://localhost:3000/users/recipeInfo/[" + recipesiD + "]"
          );

          console.log(responseInfo, "info array");

          for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i]) {
              // if(responseInfo.data[this.recipesMainPage[i].id][1].saveFavorites)
              //   if(responseInfo.data[tempArray[i].id][1].saveFavorites){
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
          this.recipesMainPage.push(...tempArray);
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
h1 {
  color: #cef0d4;
  font-family: "Rouge Script", cursive;
  font-size: 60px;
  font-weight: normal;
  line-height: 48px;
  margin: 0 0 50px;
  text-align: center;
  text-shadow: 1px 1px 2px #082b34;
}
</style>
