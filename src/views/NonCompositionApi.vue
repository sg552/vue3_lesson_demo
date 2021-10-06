<template>
  <div>
    <h1>option API(传统方式)</h1>
    <p>本页面与 Composition API是一个对比关系,实现的功能都是一样的
    <br/>
    1. 显示博客列表 <br/>
    2. 提供检索能力 <br/>
    </p>

    根据标题搜索:<input v-model="search_text" />
    <table>
      <tr v-for="blog in blogs">
        <td>
          <router-link :to="{name: 'Blog', query: {id: blog.id}}">
            {{blog.id}}
          </router-link>
        </td>
        <td @click='show_blog(blog.id)'>{{blog.title }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

const axios = require('axios');

export default {
  data: function() {
    return {
      blogs: [{id: 0, title: '加载中'}],
      search_text: ''
    }
  },
  methods: {
    show_blog: function(blog_id) {
      console.info("blog_id:" + blog_id)
      this.$router.push({name: 'Blog', query: {id: blog_id}})
    },
  },
  mounted() {
    axios.get('/api/interface/blogs/all').then((response) => {
       console.info(response)
       this.blogs = response.data.blogs
    }, (response) => {
       console.error(response)
    });
  },
  components: {
  },
  watch: {
    // 正常的开发应该是每次search_text 改变时,直接向后台接口发送请求
    // 为了快速入门和学习,这里我们直接使用 javascript Array的filter()方法
    search_text(new_value, old_value){
      this.blogs = this.blogs.filter( function(e) {
        return e.title.indexOf(new_value) >= 0
      })
    }
  }

}
</script>

<style >
td {
  border-bottom: 1px solid grey;
}
</style>
