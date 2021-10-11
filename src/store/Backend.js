import axios from "axios";

const state = () => ({
    header: [],
    advantages: [],
    client: [],
    teachers: [],
    coworks: [],
    news: [],
})

const getters = {
    HEADER(state) {
        return state.header;
    },
    ADVANTAGES(state) {
        return state.advantages;
    },
    CLIENTS(state) {
        return state.clients;
    },
    TEACHERS(state) {
        return state.teachers;
    },
    COWORKS(state) {
        return state.coworks;
    },
    NEWS(state) {
        return state.news;
    },
}

const mutations = {
    SET_CONTENT: (state, content) => {
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
        state.teachers = content
    },
    SET_NEWS: (state, content) => {
        state.news = content
    }

}

const actions = {
    GET_CONTENT({commit}, page) {
        return axios({
            method: "GET",
            url: `https://bexram.pythonanywhere.com/page/${page}/`
        })
            .then((response) => {
                commit("SET_CONTENT", response.data);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    GET_CLIENTS({commit}) {
        return axios({
            method: "GET",
            url: `https://bexram.pythonanywhere.com/client/`
        })
            .then((response) => {
                commit("SET_CLIENTS", response.data);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    GET_TEACHERS({commit}) {
        return axios({
            method: "GET",
            url: `https://bexram.pythonanywhere.com/teacher/`
        })
            .then((response) => {
                commit("SET_TEACHERS", response.data);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    GET_NEWS({commit}) {
        return axios({
            method: "GET",
            url: `https://bexram.pythonanywhere.com/news/`
        })
            .then((response) => {
                commit("SET_NEWS", response.data);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}