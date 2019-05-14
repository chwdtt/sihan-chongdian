/*
	引入状态管理-----1.0暂时不用分模块，全局状态较少
*/
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		number: 1
	},
	mutations: {
		
	},
	actions: {
		
	}
})

export default store;