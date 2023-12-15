// src/store/index.js
import {createStore} from 'vuex';

export default createStore({
    state: {
        posts: [],
        currentPostId: null
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts;
        },
        UPDATE_POST(state, updatedPost) {
            const index = state.posts.findIndex(post => post.id === updatedPost.id);
            if (index !== -1) {
                state.posts.splice(index, 1, updatedPost);
            }
        },
        SET_CURRENT_POST_ID: (state, id) => {
            state.currentPostId = id;
        },
        DELETE_POST: (state, id) => {
            state.posts = state.posts.filter(post => post.id !== id);
        },
    },
    actions: {
        async fetchPosts({ commit }) {
            try {
                let response = await fetch("http://localhost:3000/auth/posts");
                console.log("fetching done")
                let data = await response.json();
                console.log(data);
                commit('SET_POSTS', data.reverse());
            } catch (error) {
                console.error('error', error);
            }
        },
        async updatePost({ commit }, { id, content }) {
            try {
                let response = await fetch(`http://localhost:3000/auth/posts/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        content: content,
                    }),
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                let data = await response.json();
                commit('UPDATE_POST', data);
            } catch (error) {
                console.error('error', error);
            }
        },
        async deletePost({ commit }, id) {
            try {
              let response = await fetch(`http://localhost:3000/auth/posts/${id}`, {
                method: "DELETE",
              });
              if (response.ok) {
                commit('DELETE_POST', id);
              } else {
                console.error('Failed to delete post');
              }
            } catch (error) {
              console.error('error', error);
            }
        },
        setCurrentPostId: ({ commit }, id) => {
            commit('SET_CURRENT_POST_ID', id);
        },
    },
    getters: {
        getPostById: (state) => (id) => {
            return state.posts.find(post => post.id === id);
        }
    }
});
