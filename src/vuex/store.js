import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state() {
        return {
            content: []
        }
    },
    mutations: {
        SET_CONTENT(state, content) {
            state.content = content.data;
        },
    },
    actions: {
        async GET_CONTENT({ commit }) {
            try {
                commit('SET_CONTENT', await axios({
                    method: 'GET',
                    url: 'https://bexram.pythonanywhere.com/getcontent/1/'
                }))
            }
            catch (error) {
                console.log(error)
                commit('SET_CONTENT', 'Error')
            }
        }
    },
    getters: {
        CONTENT(state) {
            return state.content
        }
    }
})
