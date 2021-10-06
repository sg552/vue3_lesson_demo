<template>
  <div>您点击了{{count}}次</div>

  <div>
    水果的名称是: {{fruit.name}} <br/>
    水果的颜色是: {{fruit.color}} <br/>
  </div>
  <button @click = "change">换个水果</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0 ,
      fruit: {name: '苹果', color: '红色'}
    }
  },
  methods: {
    change(){
      // 每次点击后, count + 1
      this.count = this.count + 1

      const colors = ['红色', '黄色', '绿色']
      const names = ['苹果', '香蕉', '柠檬']

      let index = this.count % 3

      // 切换一种水果
      this.fruit.name = names[index]
      this.fruit.color = colors[index]
    }
  }
}
</script>
