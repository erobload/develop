import Vue from "vue";
import Portal from "./Portal";
import Paginate from 'vuejs-paginate';
Vue.component('paginate', Paginate);

new Vue({
    el: "#portal",
    template: "<Portal/>",
    components: { Portal }
});