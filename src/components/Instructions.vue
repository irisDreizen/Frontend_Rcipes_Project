<template>
  <div>
    <div class="card">
      <div class="card-header" style="background-color: #deedde;">Instructions:</div>
      <b-card-body>
        <b-card-text class="mt-4">
          <ul>
            <ol v-for="(r, index) in instructions" :key="index">
              {{index+1}}. {{ r }}
              <br />
              <br />
            </ol>
          </ul>
        </b-card-text>
      </b-card-body>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    instructions: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  /* background-color: #ffffff; */
}

li {
  float: left;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
}
li a {
  display: block;
  color: rgb(177, 169, 169);
  text-align: center;
  font-weight: bold;
  padding: 14px 16px;
  text-decoration: none;
}
li a:hover {
  background-color: #ffcccc;
}
/* .card-header {
  background-color: #deedde;
} */
</style>