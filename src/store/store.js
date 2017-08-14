import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//状态
const state = {
	res:0
}

//同步数据
const mutations = {
	result:(state) =>{
		return state.res += 1
	}
}

//异步加载
const actions = {
	result:({
		commit
	})=>{
		commit('result')
	}
}

//计算属性 getters
const getters = {
	result:(state)=>{
		return state.res
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
