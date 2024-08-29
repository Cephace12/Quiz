import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Result from "../views/Result.vue";
import Quiz from "../views/Quiz.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/quiz",
      name: "quiz",
      component: Quiz,
    },
    {
      path: "/result",
      name: "Result",
      component: Result,
    },
  ],
});

export default router;
