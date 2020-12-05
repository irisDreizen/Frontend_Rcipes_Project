<template>
  <div id="app">

    <div id="d">
      <b-nav pills id="c" style="background-color: #deedde">
        <b-nav-item v-if="!$root.store.username" disabled><a>Hello Guest!</a></b-nav-item>
        <b-nav-item v-if="$root.store.username" disabled><a>Hello {{$root.store.username}}!</a></b-nav-item>
        <b-nav-item><router-link :to="{ name: 'main' }">Recipes Main Page</router-link></b-nav-item>
        <b-nav-item><router-link :to="{ name: 'search' }">Search</router-link></b-nav-item>
          <b-nav-item><router-link :to="{ name: 'about' }">About</router-link></b-nav-item>
        <b-nav-item v-if="!$root.store.username"><router-link :to="{ name: 'register' }">Register</router-link></b-nav-item>
        <b-nav-item v-if="!$root.store.username"><router-link :to="{ name: 'login' }">Login</router-link></b-nav-item>
        <b-nav-item-dropdown v-if="$root.store.username"
          id="my-nav-dropdown"
          text="My Area"
          toggle-class="m-2"
          right
        >
          <b-dropdown-item>
            <router-link :to="{ name: 'favorites' }">My Favorites</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link :to="{ name: 'myRecipes' }">My Recipes</router-link>
          </b-dropdown-item>
          <!-- <b-dropdown-divider></b-dropdown-divider> -->
          <b-dropdown-item>
            <router-link :to="{ name: 'familyRecipes' }">My Family Recipes</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item v-if="$root.store.username">
          <a @click="Logout">Logout</a>
        </b-nav-item>
      </b-nav>
    </div>
    <!-- 
    <ul class="nav nav-pills">
      <li>
        <router-link :to="{ name: 'main' }">Recipes Main Page</router-link>
      </li>
      <li><router-link :to="{ name: 'search' }">Search</router-link></li>
      <li v-if="!$root.store.username">
        <router-link :to="{ name: 'register' }">Register</router-link>
      </li>
      <li v-if="!$root.store.username">
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>
      <li v-if="!$root.store.username"><a>Hello Guest!</a></li>
      <li v-if="$root.store.username"><a>My Area</a></li>

      <li v-if="$root.store.username"><a @click="Logout">Logout</a></li>

    </ul>-->

    <!-- <div
      class="header"
      style="background-image: url('https://res.cloudinary.com/dw5rvx9m6/image/upload/v1594561547/BT1-HEADER-RECIPES-1_whyhxi.png'); background-size: 100% 100%;"
    ></div> -->
    <br>
    <br>



    <!-- <div id="nav">
      <router-link :to="{ name: 'main' }">Recipes Main Page</router-link>|
      <router-link :to="{ name: 'search' }">Search</router-link>|
      <router-link :to="{ name: 'favorites' }">favorite</router-link>|
       <router-link :to="{ name: 'myRecipes' }">favorite</router-link>|
      {{ !$root.store.username }}
      <span v-if="!$root.store.username">
        Guest:
        <router-link :to="{ name: 'register' }">Register</router-link>|
        <router-link :to="{ name: 'login' }">Login</router-link>|
      </span>
      <span v-else>
        {{ $root.store.username }}: <button @click="Logout">Logout</button>|
      </span>
       <router-link :to="{ name: 'familyRecipes' }">family recipes</router-link>|
    </div>-->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-image: url(https://res.cloudinary.com/dw5rvx9m6/image/upload/v1594748759/backgroundRecipes_rzjgbf.jpg);
  background-size: 100% 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  // color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.header {
  padding: 180px;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 30px;
}
#c ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  // overflow: hidden;
  background-color: #deedde;
}

#d b-nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  // overflow: hidden;
  background-color: #deedde;
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
button {
  display: inline-block;
  background: #4285f4;
  color: #fff;
  text-transform: uppercase;
  padding: 20px 30px;
  border-radius: 5px;
  box-shadow: 0px 17px 10px -10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  -webkit-transition: all ease-in-out 300ms;
  transition: all ease-in-out 300ms;
}
button:hover {
  box-shadow: 0px 37px 20px -20px rgba(0, 0, 0, 0.2);
  -webkit-transform: translate(0px, -10px) scale(1.2);
  transform: translate(0px, -10px) scale(1.2);
}
.divider {
  width: 5px;
  height: auto;
  display: inline-block;
}


</style>
