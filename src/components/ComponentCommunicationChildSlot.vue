<template>
  <div style='border: 1px solid red; margin-left: 50px; width: 600px'>
    本页面是child. 演示使用slot向parent传值<br/>
    <slot name="slot_demo" :text="value_in_child"></slot>
    
    value_in_child: <input type="text" v-model="value_in_child"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value_in_child: ""
    }
  },
}
</script>

