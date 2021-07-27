import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router";
import store from "../js/store"
import * as types from "../js/types"

Vue.use(VueRouter);

// configure router
const router = new VueRouter({
    routes, // short for routes: routes
    linkActiveClass: "active"
});

// When page refresh, we reset token
if (window.localStorage.getItem('user')) {
    store.commit(types.LOGIN, JSON.parse(window.localStorage.getItem('user')));
}

//Auth Checker
router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.user && store.state.user.token) {
            next();
        }
        else {
            next({
                path: '/auth/login',
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
})

export default router;