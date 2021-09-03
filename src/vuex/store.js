import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state() {
        return {
            content: [
                {
                    id: 1,
                    pageId: 'MizurinaTA',
                    name: 'Мизурина Татьяна Андреевна',
                    image: 'teacher'
                },
                {
                    id: 2,
                    pageId: 'MizurinaTA',
                    name: 'Мизурина Татьяна Андреевна',
                    image: 'teacher'
                },
                {
                    id: 3,
                    pageId: 'MuratovaVV',
                    name: 'Муратова Валентина Владимировна',
                    image: 'teacher'
                },
                {
                    id: 4,
                    pageId: 'MizurinaTA',
                    name: 'Мизурина Татьяна Андреевна',
                    image: 'teacher'
                },
            ]
        }
    },
    mutations: {
        SET_CONTENT(state, content) {
            state.content = content.data;
        },
    },
    actions: {
        async GET_CONTENT({ commit }, page) {
            try {
                console.log(`https://bexram.pythonanywhere.com/getcontent/${page}/`)
                commit('SET_CONTENT', await axios({
                    method: 'GET',
                    url: `https://bexram.pythonanywhere.com/getcontent/${page}/`
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
