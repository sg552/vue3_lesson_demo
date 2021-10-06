<template>
  <div style='border: 1px solid green; margin-left: 50px; width: 700px'>
    我来自二级页面
    <ProvideLevelThree></ProvideLevelThree>
  </div>
</template>

<script>
import ProvideLevelThree from '@/components/ProvideLevelThree'
export default {
  data () {
    return {
    }
  },
  components: {
    ProvideLevelThree
  }
}
</script>

