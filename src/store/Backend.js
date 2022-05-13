import axios from 'axios'

const state = () => ({
	backendAddresses: 'https://italiamo-backend.bexram.online',
	content: [],
	header: [],
	advantages: [],
	client: [],
	teachers: [],
	coworks: [],
	news: [],
	programs: [],
})

const getters = {
	CONTENT(state) {
		return state.content
	},
	HEADER(state) {
		return state.header
	},
	ADVANTAGES(state) {
		return state.advantages
	},
	CLIENTS(state) {
		return state.clients
	},
	TEACHERS(state) {
		return state.teachers
	},
	COWORKS(state) {
		return state.coworks
	},
	NEWS(state) {
		return state.news
	},
	PROGRAMS(state) {
		return state.programs
	},
}

const mutations = {
	SET_CONTENT: (state, content) => {
		state.content = content
		for (let i = 0; i < content[0].blocks.length; i++) {
			if (content[0].blocks[i].name == 'header') {
				state.header = content[0].blocks[i].contents
			}
			if (content[0].blocks[i].name == 'advantages') {
				state.advantages = content[0].blocks[i].contents
			}
			if (content[0].blocks[i].name == 'coworks') {
				state.coworks = content[0].blocks[i].contents
			}
		}
	},

	SET_CLIENTS: (state, content) => {
		state.clients = content
	},

	SET_TEACHERS: (state, content) => {
		state.teachers = content.sort((prev, next) => prev.sort - next.sort)
	},
	SET_NEWS: (state, content) => {
		state.news = content
	},
	SET_PROGRAMS: (state, content) => {
		state.programs = content
	},
}

const actions = {
	GET_CONTENT({ state, commit }, page) {
		return axios({
			method: 'GET',
			url: `${state.backendAddresses}/page/${page}/`,
		})
			.then((response) => {
				commit('SET_CONTENT', response.data)
				return response
			})
			.catch((error) => {
				console.log(error)
				return error
			})
	},
	GET_CLIENTS({ state, commit }) {
		return axios({
			method: 'GET',
			url: `${state.backendAddresses}/client/`,
		})
			.then((response) => {
				commit('SET_CLIENTS', response.data)
				return response
			})
			.catch((error) => {
				console.log(error)
				return error
			})
	},
	GET_TEACHERS({ state, commit }) {
		return axios({
			method: 'GET',
			url: `${state.backendAddresses}/teacher/`,
		})
			.then((response) => {
				commit('SET_TEACHERS', response.data)
				return response
			})
			.catch((error) => {
				console.log(error)
				return error
			})
	},
	GET_NEWS({ state, commit }) {
		return axios({
			method: 'GET',
			url: `${state.backendAddresses}/news/`,
		})
			.then((response) => {
				commit('SET_NEWS', response.data)
				return response
			})
			.catch((error) => {
				console.log(error)
				return error
			})
	},
	GET_PROGRAMS({ state, commit }) {
		return axios({
			method: 'GET',
			url: `${state.backendAddresses}/programs/`,
		})
			.then((response) => {
				commit('SET_PROGRAMS', response.data)
				return response
			})
			.catch((error) => {
				console.log(error)
				return error
			})
	},
	SEND_FORM({ state }, data) {
		console.log(data)
		return axios({
			url: `${state.backendAddresses}/forms/`,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			data,
		})
			.then((response) => {
				return response.data
			})
			.catch(() => 'error')
	},
	CAPCHA_VERIFICATION({ state }, data) {
		return axios({
			url: `${state.backendAddresses}/capcha/`,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			data,
		})
			.then((response) => {
				return response.data
			})
			.catch((error) => console.error(error))
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
