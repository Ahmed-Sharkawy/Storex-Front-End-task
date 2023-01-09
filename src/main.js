import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import router from "./router";
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
import "./registerServiceWorker";

// axios.defaults.baseURL   = "http://127.0.0.1:8000/api/";
axios.defaults.baseURL   = "https://test-api.storexweb.com/api/";
// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
Vue.config.productionTip = false;
Vue.use(VueSweetalert2);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
