<template>
  <b-container>
    <br>
    <h1>
      {{ title }}:
      <slot></slot>
    </h1>
    
      <div v-for="r in familyArrayList" :key="r.id">
        <familyRecipePreview  :FamilyRecipe="r" />
      </div>


  </b-container>


</template>
<script>
  import familyRecipePreview from "./familyRecipePreview.vue"

export default {

  data() {
    return {

    }
    
  },
  components:{
      familyRecipePreview
  },
  props:{
    familyArrayList:{
        type:Array,
        required:true
    },
    title:{
        type:String,
        required:true
    }

  },

    created() {
      //  let recaptchaScript = document.createElement('script')
      // recaptchaScript.setAttribute('src', 'https://kit.fontawesome.com/a076d05399.js')
      // document.head.appendChild(recaptchaScript)
      // console.log("123",this.recipe,this.recipe.id)
      
      

  },
   methods: {
   
    }
   
    
    
};
</script>

<style scoped>
/* .fa-heart-o {
  color: red;
  cursor: pointer;
}

.fa-heart {
  color: red;
  cursor: pointer;
} */
.recipe-preview {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 2px 2px;
}
.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;

}

.recipe-preview .recipe-body .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 100%;
  height: auto;
  /* -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover; */
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  /* overflow: hidden; */
}

.recipe-preview .recipe-footer .recipe-title {
  /* padding: 10px 10px; */
  width: 100%;
  font-size: 12pt;
  text-align: left;
  /* white-space: nowrap; */
  /* font-family: 'italic'; */
  /* overflow: hidden; */
  /* -o-text-overflow: ellipsis;
  text-overflow: ellipsis; */
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
}

h1 { color: #CEF0D4; font-family: 'Rouge Script', cursive; font-size: 60px; font-weight: normal; line-height: 48px; margin: 0 0 50px; text-align: center; text-shadow: 1px 1px 2px #082b34; }

</style>
