// src/store/index.js
import {createStore} from 'vuex';

export default createStore({
    state: {
        posts: []
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts;
        }
        
    },
    actions: {
        async fetchPosts({ commit }) {
            try {
                let response = await fetch("./posts.json");
                console.log("fetching done")
                let data = await response.json();
                console.log(data);
                commit('SET_POSTS', data.reverse());
            } catch (error) {
                console.error('error', error);
            }
        }
    },
    getters: {
        getPostById: (state) => (id) => {
            return state.posts.find(post => post.id === id);
        }
    }
});
