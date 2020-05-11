import axios from 'axios'

export const state = () => ({
  posts: [{
    id: '',
    title: '',
    body: '',
    userId: ''
  }]
})

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  }
}

export const actions = {
  async getPosts({ commit }) {
    const res = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts/')
    commit("setPosts", res)
  }
}