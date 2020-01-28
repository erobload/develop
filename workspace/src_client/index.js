import Vue from "vue";
import Portal from "./Portal";
import store from "./store";
import axios from "axios";
import Paginate from 'vuejs-paginate';

window.store = store;
window.axios = axios;
Vue.component('paginate', Paginate);

new Vue({
    el: "#portal",
    template: "<Portal/>",
    components: { Portal }
});