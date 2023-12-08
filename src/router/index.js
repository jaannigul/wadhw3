import { createRouter, createWebHashHistory } from "vue-router";
import postView from "@/views/postView.vue";
import registerView from "@/views/registerView.vue";
import loginView from "@/views/loginView.vue";
import aboutView from "@/views/aboutView.vue";
import addPostView from "@/views/addPostView.vue";
import certainPostView from "@/views/certainPostView.vue";
const routes = [{
        path: "/post",
        name: "postView",
        component: postView,
    },
    {
        path: "/registerView",
        name: "registerView",
        component: registerView,
    },
    {
        path: "/",
        name: "loginView",
        component: loginView
    },
    {
        path: "/aboutView",
        name: "aboutView",
        component: aboutView
    },
    {
        path: "/addPostView",
        name: "addPostView",
        component: addPostView
    },
    {
        path: "/certainPostView",
        name: "certainPostView",
        component: certainPostView
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;