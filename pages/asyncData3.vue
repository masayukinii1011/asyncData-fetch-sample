<template>
  <div>
    <div>
      <div>ID: {{ id }}</div>
      <div>TITLE: {{ title }}</div>
      <div>BODY: {{ body }}</div>
      <div>USERID: {{ userId }}</div>
      <hr/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData () {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    return {id: data.id, title: data.title, body: data.body, userId: data.userId}
  }
}
</script>