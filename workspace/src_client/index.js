import Vue from "vue";
import Portal from "./Portal";
import axios from "axios";
import Paginate from 'vuejs-paginate';

window.axios = axios;
Vue.component('paginate', Paginate);

new Vue({
    el: "#portal",
    template: "<Portal/>",
    components: { Portal }
});