import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/About",
    name: "about",
    component: () => import("./pages/About"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/familyRecipes",
    name: "familyRecipes",
    component: () => import("./pages/familyRecipesPage"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/familyRecipes/:recipeId",
    name: "familyRecipe",
    component: () => import("./pages/FamilyRecipeFull"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/MyRecipe/:recipeId",
    name: "myRecipe",
    component: () => import("./pages/MyRecipeViewPage"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("./pages/favoritesPage"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/myRecipes",
    name: "myRecipes",
    component: () => import("./pages/myRecipesPage"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
