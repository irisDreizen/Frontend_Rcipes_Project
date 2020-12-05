<template>
<div>

    <h2> Let's Find The Best Recipe For You! </h2>
    <br>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.query"
          required
          placeholder="Enter your search words"
        ></b-form-input>
      </b-form-group>
      
        <b-form-select id="selectedResultsNum" v-model="form.selectedResultsNum" :options="selectedResultsNum">
              <!-- <template v-slot:first>
                <b-form-select-option :value="null" disabled>-- Results Number --</b-form-select-option>
            </template> -->
          </b-form-select>
        <br>
        <br> 
        <b-form-select id="cuisine" v-model="form.cuisine" :options="cuisine">
         <!-- <template v-slot:first>
              <b-form-select-option :value="null" disabled>-- choose cuisine --</b-form-select-option>
          </template> -->
        </b-form-select>
        <br>
        <br>
        <b-form-select id="diet" v-model="form.diet" :options="diet">
         <!-- <template v-slot:first>
              <b-form-select-option :value="null" disabled>-- choose diet --</b-form-select-option>
          </template> -->
        </b-form-select>
        <br>
        <br>
        <b-form-select id="intolerence" v-model="form.intolerence" :options="intolerence">
         <!-- <template v-slot:first>
              <b-form-select-option :value="null" disabled>-- choose intolerance --</b-form-select-option>
          </template> -->
        </b-form-select>
        <br>
        <br>
      <b-button type="submit" variant="primary">Submit</b-button>
       <div class="divider"/>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

</div>
</template>

<script>
 import cuisine from "../assets/cuisine";
 import diet from "../assets/diet";
 import intolerence from "../assets/intolerance";
 import selectedResultsNum from "../assets/selectedResultsNum"
export default {
    name: "SearchForm",
   data(){
    return{
        form: {
          query: '',
          selectedResultsNum: null,
          cuisine: null,
          diet: null,
          intolerence: null
        },
        show: true,
        cuisine:[{ text: 'choose cuisine', value: null }],
        diet:[{ text: 'choose diet', value: null }],
        intolerence:[{ text: 'choose intolerance', value: null }],
        selectedResultsNum: [{ text: 'Results Number', value: null }]
    }
  },
  methods:{
      // onClick(){
      //     this.$emit('move-query', this.query, this.selectedResultsNum , this.selectedSort)
      //   //   this.$emit('move-query', 'a', '5' , 'none')
      // },
        onSubmit(evt) {
          if(!(/^[a-zA-Z\s]*$/.test(this.form.query))){
            alert("Your search query must include only English letters")
          }
          else{
            evt.preventDefault()
            // alert(JSON.stringify(this.form))
            let cuisineValue=this.form.cuisine;
            let dietValue=this.form.diet;
            let intolerenceValue=this.form.intolerence;
          // this.$emit('removeRecipes')
            if(cuisineValue==null){
                cuisineValue='';
            }
            if(dietValue==null){
              dietValue='';
            }
            if(intolerenceValue==null){
              intolerenceValue=''
            }
            this.$emit('move-query', this.form.query, this.form.selectedResultsNum, cuisineValue, dietValue, intolerenceValue)
          }

         
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.query = ''
        this.form.selectedResultsNum = null
        this.form.cuisine = null
        this.form.diet = null 
        this.form.intolerence = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
  },
   mounted() {
    this.cuisine.push(...cuisine);
    this.diet.push(...diet);
    this.intolerence.push(...intolerence);
    this.selectedResultsNum.push(...selectedResultsNum);
  },
}
</script>

<style>
h2 { color: #1b3d46; font-family: 'Julius Sans One', sans-serif; font-size: 30px; font-weight: bold; line-height: 32px; margin: 0 0 24px; text-shadow: 1px 1px 1px #082b34; }
</style>