import { createRouter, createWebHashHistory } from "vue-router";
import postView from "@/views/postView.vue";
import registerView from "@/views/registerView.vue";
import loginView from "@/views/loginView.vue";
import aboutView from "@/views/aboutView.vue";
import addPostView from "@/views/addPostView.vue";
import certainPostView from "@/views/certainPostView.vue";
import auth from "../auth";
const requireAuth = async (to, from, next) => {//checks if the user is authenticated
    let authResult = await auth.authenticated();
    if (!authResult) {
        next('/');
    } else {
        if (from === '/') next('/posts')
        next();
    }
};
const routes = [{
        path: "/post",
        name: "postView",
        component: postView,
        beforeEnter: requireAuth,
    },
    {//does not need auth
        path: "/registerView",
        name: "registerView",
        component: registerView,
    },
    {//does not need auth
        path: "/",
        name: "loginView",
        component: loginView
    },
    {//does not need auth
        path: "/aboutView",
        name: "aboutView",
        component: aboutView
    },
    {
        path: "/addPostView",
        name: "addPostView",
        component: addPostView,
        beforeEnter: requireAuth,
    },
    {
        path: "/certainPostView",
        name: "certainPostView",
        component: certainPostView,
        beforeEnter: requireAuth,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;