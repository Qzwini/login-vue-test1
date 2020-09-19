import {
    createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import "normalize.css";
import firebase from "firebase"



var firebaseConfig = {
    apiKey: "AIzaSyANk7WDmxaVDQYGWqyew2DmYVND049S0RE",
    authDomain: "logintest-qzwini.firebaseapp.com",
    databaseURL: "https://logintest-qzwini.firebaseio.com",
    projectId: "logintest-qzwini",
    storageBucket: "logintest-qzwini.appspot.com",
    messagingSenderId: "602889190940",
    appId: "1:602889190940:web:bc214200427e6fa7dc69d9",
    measurementId: "G-KWLGL4J2YX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


createApp(App)
    .use(store)
    .use(router)
    .mount("#app");