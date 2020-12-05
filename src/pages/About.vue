<template>
  <div class="container">
    <h1 class="title">About Us!</h1>

    <div class="imageUs">
      <img
        src="https://res.cloudinary.com/dw5rvx9m6/image/upload/v1594746931/IMG-20180516-WA0005_myat8z.jpg"
        class="image"
        style="width:30em; height:20em;"
      />
    </div>
    <br />
    <br />

    <div>
      <b-card
        class="text-center"
        style="width:70%; margin: 0 auto; background-color: #deedde; line-height: 1.6;  font-family: Arial, Helvetica, sans-serif; "
      >
        <div
          class="primary"
          style="font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;"
        >
          <b>Hello everyone!</b>
          <br />
          <br />We are Chen and Iris, third year information systems engineering students.
          <br />As part of an Internet development environment course, we have created a recipe site for you!
          Our site presents recipes with ingredients and preparation instructions so you can prepare them easily!
          <br />You can search for types of recipes according to certain sensitivities and filters!
          You can sign up for the site and save your own favorite recipes so you can go to the site and see them again!
          <br />Hope you enjoy the site and we will be happy to answer any questions!
          <br />Links to our previous projects:
          <br />
          <br />
          <a
            href="https://github.com/SISE-Web-Development-Environments/assignment2-iris-chen"
          >Packman</a>
          <br />

          <a
            href="https://github.com/SISE-Web-Development-Environments/assignment3-1-iris_chen_assignment3"
          >Api 3.1</a>
          <br />
          <a
            href="https://github.com/SISE-Web-Development-Environments/assignment-3-2-iris_chen_assignment3"
          >Server side-3.2</a>
        </div>
      </b-card>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
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
img {
  width: 70%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.body {
  text-align: center;
}
.title {
  text-align: center;
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

.primary {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}
</style>
