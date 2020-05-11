<template>
  <div>
    <div v-for="post in posts" :key="post.id">
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
  async asyncData () {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    return {posts: data}
  }
}
</script>