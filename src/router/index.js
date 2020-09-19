import {
    createRouter,
    createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
import login from "../views/login.vue";
import register from "../views/register.vue";
import dashbord from "../views/dashbord.vue";
import firebase from "firebase";

const routes = [


    {
        path: "/",
        name: "Home",
        component: Home,

        beforeEnter: async(to, from, next) => {
            await firebase
                .auth()
                .signInWithEmailAndPassword(
                    "" + localStorage.getItem("email"),
                    "" + localStorage.getItem("pass")
                )
                .then(user => {
                    console.log(user.user);
                    next()
                })
                .catch(function(error) {
                    console.log("error :  " + error.message);
                    next({
                        name: "login"
                    })
                });
        }
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
        beforeEnter: async(to, from, next) => {
            await firebase
                .auth()
                .signInWithEmailAndPassword(
                    "" + localStorage.getItem("email"),
                    "" + localStorage.getItem("pass")
                )
                .then(user => {
                    console.log(user.user);
                    next()
                })
                .catch(function(error) {
                    console.log("error :  " + error.message);
                    next({
                        name: "login"
                    })
                });
        }
    },
    {
        path: "/login",
        name: "login",
        component: login,
        register

    },
    {
        path: "/register",
        name: "register",
        component: register
    },
    {
        path: "/dashbord",
        name: "dashbord",
        component: dashbord,
        beforeEnter: async(to, from, next) => {
            await firebase
                .auth()
                .signInWithEmailAndPassword(
                    "" + localStorage.getItem("email"),
                    "" + localStorage.getItem("pass")
                )
                .then(user => {
                    console.log(user.user);
                    next()
                })
                .catch(function(error) {
                    console.log("qzwini -  :  " + error.message);
                    next({
                        name: "login"
                    })
                });
        }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;