<template>
  <div>
    我来自一级页面, 请输入任意内容:
    <input v-model="readme_from_level_one" />
    <ProvideLevelTwo></ProvideLevelTwo>

  </div>
</template>

<script>
import { provide, ref } from 'vue'
import ProvideLevelTwo from '@/components/ProvideLevelTwo'
export default {
  components: {
    ProvideLevelTwo
  },
  setup(){

    // 这里使用了ref方法来定义一个响应式的变量，供provide使用．
    let readme_from_level_one = ref("学习使我快乐~ 这个变量可以修改")
    provide("readme_from_level_one", readme_from_level_one)
    return {
      readme_from_level_one
    }
  }
}
</script>

