<template>
  <div class="hello">
    <p>本页面是parent页面, 会引用 ComponentCommunicationChildSlot </p>
    <input type='button' @click='get_child_value' value="获取child中变量的值"/> :

    <br/>
    <ComponentCommunicationChildSlot>
      <div slot="slot_demo" slot-scope="props">
        {{props.text}}
      </div>
    </ComponentCommunicationChildSlot>    
  </div>
</template>

<script>
import ComponentCommunicationChildSlot from '@/components/ComponentCommunicationChildSlot'
export default {
  data () {
    return {
      value_in_parent: '',
    }
  }, 
  mounted(){
  },
  components: {
    ComponentCommunicationChildSlot
  },
  methods: {
    get_child_value(){
//      this.value_in_parent = this.$Slots.child.value_in_child
    }
  }
}
</script>

