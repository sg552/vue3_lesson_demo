<template>
  <div >
    <my-logo title="博客详情页">
    </my-logo>
    <div>
      <p> 标题： {{ blog.title }}  </p>
      <p> 发布于： {{blog.created_at }}</p>
      <div v-html='blog.body'>
      </div>
    </div>
  </div>
</template>

<script>
import MyLogo from '@/components/Logo.vue'
import CommonHi from '@/mixins/common_hi.js'
const axios = require('axios');

export default {
  data: function() {
    return {
      blog: {}
    }
  },
  mounted() {
    axios.get('/api/interface/blogs/show?id='+this.$route.query.id).then((response) => {
       console.info(response.data)
       this.blog = response.data.result
    }, (response) => {
       console.error(response)
    });
    alert(this.hi("jim"))
  },
  components: {
    MyLogo
  },
  mixins: [
    CommonHi
  ]
}
</script>

<style>
</style>
