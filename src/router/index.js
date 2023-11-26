import { createRouter, createWebHashHistory } from "vue-router";
import postView from "@/views/postView.vue";
import registerView from "@/views/registerView.vue";

const routes = [{
        path: "/post",
        name: "postView",
        component: postView,
    },
    {
        path: "/",
        name: "registerView",
        component: registerView,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;