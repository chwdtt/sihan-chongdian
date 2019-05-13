import Vue from 'vue';
import App from './App';
import api from '@/utils/fetch.js';
import cuCustom from './node_modules/colorui/components/cu-custom.vue';
Vue.component('cu-custom',cuCustom);

// 全局挂载后使用
Vue.prototype.$api = api
Vue.config.productionTip = false

App.mpType = 'app';

const app = new Vue({
    ...App
});
app.$mount();
