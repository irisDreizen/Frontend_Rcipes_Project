<template>
  <div class="container">
    <b-row>
      <b-col>
        <familyRecipePreviewList title="Family Recipes" :familyArrayList="familyArray" />
      </b-col>
    </b-row>
       <b-alert variant="danger" dismissible fade :show="showDismissibleAlert"  @dismissed="showDismissibleAlert=false">
      You have no family recipes :( , contact us and we will add them for you!
    </b-alert>
  </div>
</template>

<script>
import familyRecipePreviewList from "../components/FamilyRecipesPreviewList";

export default {
  data() {
    return {
      // image_load: false,
      familyArray: {
        type: [],
        required: true
      },
      showDismissibleAlert: false
    };
  },

  components: {
    familyRecipePreviewList
  },
  created() {
    this.getFamilyRecipes();
  },
  methods: {
    async getFamilyRecipes() {
      let recipesGlobal = [];
      let isExistGlobal = false;
      let infoArray = [];
      if (this.$root.store.username) {
        try {
          if (this.$root.store.familyRecipes.length != 0) {
            console.log("there is my family global storage");
            recipesGlobal = this.$root.store.familyRecipes;
            isExistGlobal = true;
          }

          if (isExistGlobal) {
            infoArray = recipesGlobal;
            this.familyArray = [];
            this.familyArray.push(...infoArray);
          } else {
            const response = await this.axios.get(
              "http://localhost:3000/users//myFamilyRecepies/getPreview"
            );
            console.log(response);
            infoArray = response.data;
            this.familyArray = [];
            this.familyArray.push(...infoArray);
            this.$root.store.familyRecipes = this.familyArray;
            console.log(this.$root.store.familyRecipes);
          }
          if(this.familyArray.length==0){
          this.showDismissibleAlert=true;
        }
        } catch (error) {
          console.log(error);
        }
      }
    }
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
