<template>
  <div>
    <div v-for="post in $store.state.posts" :key="post.id">
      <div>ID: {{ post.id }}</div>
      <div>TITLE: {{ post.title }}</div>
      <div>BODY: {{ post.body }}</div>
      <div>USERID: {{ post.userId }}</div>
      <hr/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async fetch ({ store }) {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    store.commit('setPosts', data)
  }
}
</script>