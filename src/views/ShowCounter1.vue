<template>

  <div>
  
    <h1> 这个页面是 1号页面 </h1>
    <p>使用说明： 本页面演示的是：同一个session 在不同的页面下，会保持同一个变量的状态（也就是值）. 
    先在当前页面多次点击 按钮，然后点击本页面的 “计时页面2”， 会发现变量是保持住的， <br/>
    在那个页面多次点击之后，再跳转会本页，发现 这个points的值还是会保持的 <br/>
    </p>
    {{points}} <br/>
    <input type='button' @click='increase' value='点击增加1'/><br/>
    <router-link :to="{name: 'ShowCounter2'}">
          计时页面2
    </router-link>
  
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { INCREASE } from '@/vuex/mutation_types'

export default {
  computed: {
    points() {
      return this.$store.state.points
    }
  },
  store: useStore(),
  mounted() {
  },
  methods: {
    increase() {
      this.$store.commit(INCREASE, this.$store.state.points + 1)
    }
  }
}


</script>
