<template>
  <div class="hello">
    <p>本页面是parent页面, 会引用 ComponentCommunicationChildEmit </p>
    value_in_parent:       {{value_in_parent}}
    <br/>
    <!-- 注意这里的@child_page_value_changed 它会响应 child组件中的emit event -->
    <ComponentCommunicationChildEmit @child_page_value_changed="monitor_child">
    </ComponentCommunicationChildEmit>    
  </div>
</template>

<script>
import ComponentCommunicationChildEmit from '@/components/ComponentCommunicationChildEmit'
export default {
  data () {
    return {
      value_in_parent: '',
    }
  }, 
  components: {
    ComponentCommunicationChildEmit
  },
  methods: {
    monitor_child(new_value){
      this.value_in_parent = new_value
    }
  }
}
</script>

