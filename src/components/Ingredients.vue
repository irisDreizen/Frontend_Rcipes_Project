<template>
        <div class="card">
        <div class="card-header" style="background-color: #deedde;">
          Ingredients
        </div>
         <b-card-text class="mt-4">   
              <ul>
              <ol
                v-for="(r, index) in ingredients" :key="index">
               {{ r.name_and_amount }}
                <br>
              </ol>
            </ul>    
            </b-card-text> 
            <br>      
      </div>
</template>

<script>
export default {
    props: {
    ingredients: {
      type: Array,
      required: true
    }

  }
}
</script>

<style>
/* #card-header{
   background-color: #deedde;
} */
</style>