<template>
  <div class="hello">
    <p>本页面是parent页面, 会引用 ComponentCommunicationChildRef </p>
    <input type='button' @click='get_child_value' value="获取child中变量的值"/> :

    value_in_parent:    {{value_in_parent}}  
    <br/>
    <ComponentCommunicationChildRef ref="child"></ComponentCommunicationChildRef>    
  </div>
</template>

<script>
import ComponentCommunicationChildRef from '@/components/ComponentCommunicationChildRef'
export default {
  data () {
    return {
      value_in_parent: '',
    }
  }, 
  mounted(){
  },
  components: {
    ComponentCommunicationChildRef
  },
  methods: {
    get_child_value(){
      this.value_in_parent = this.$refs.child.value_in_child
    }
  }
}
</script>

