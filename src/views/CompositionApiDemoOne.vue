<template>
  <div>点击了 {{count}} 次.  </div>

  <div>
    水果的名称是: {{fruit.name}} <br/>
    水果的颜色是: {{fruit.color}} <br/>
  </div>
  <button @click = "change">换个水果</button>
</template>

<script>
import {ref, reactive } from 'vue';

export default {
  setup () {
    // ref　给基本类型使用，例如 number, string
    const count = ref(0)
    // reactive 给对象使用，例如Hash, Array等
    const fruit = reactive({
      name: '苹果',
      color: '红色'
    })

    const change = () => {
      const colors = ['红色', '黄色', '绿色']
      const names = ['苹果', '香蕉', '柠檬']

      // 每次点击后, count + 1
      count.value = count.value + 1
      let index = count.value % 3

      // 切换一种水果
      fruit.name = names[index]
      fruit.color = colors[index]
    }

    // 这里返回的count 等可以直接在 template中使用, 例如{{count}}
    return {
      count,
      change,
      fruit
    }
  }
}
</script>
