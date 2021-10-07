<template>
  <div>
    我来自一级页面
    <ProvideLevelTwo></ProvideLevelTwo>
  </div>

  <p>加强版：
    <router-link :to="{name: 'CompositionApiProvideLevelOneReactive'}">
      把可变的内容传递到下级组件
    </router-link>
  </p>
</template>

<script>
import { provide } from 'vue'
import ProvideLevelTwo from '@/components/ProvideLevelTwo'
export default {
  components: {
    ProvideLevelTwo
  },
  setup(){
    const readme_from_level_one = "我是在第一层页面被定义的, 在第三层应该被使用"
    provide("readme_from_level_one", readme_from_level_one)
  }
}
</script>

