import Vue from "vue";
import HomeView from "../views/HomeView.vue";
import VueRouter from "vue-router";
import LoginView from "../views/Auth/LoginView.vue";
import SignInView from "../views/Auth/SignInView.vue";
import NotFundView from "../views/NotFundView.vue";
import MovieCreate from "@/components/Movie/MovieCreate.vue";
import MovieUpdate from "@/components/Movie/MovieUpdate";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "*",
        name: "NotFundView",
        component: NotFundView,
    },
    {
        path: "/login",
        name: "Login",
        component: LoginView,
    },
    {
        path: "/signin",
        name: "SignIn",
        component: SignInView,
    },
    {
        path: "/create-movie",
        name: "MovieCreate",
        component: MovieCreate,
    },
    {
        path: "/update-movie/:id",
        name: "MovieUpdate",
        component: MovieUpdate,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

// router.beforeEach((to, from, next) => {
//     console.log(to);
//     console.log(from);
//     console.log(next);
//     next()
// });
export default router;
