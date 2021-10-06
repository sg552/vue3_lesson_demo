<template>
 <div>{{count}}</div>
 <button @click="addCount">添加</button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
 name: 'App',
 setup () {
  const count = ref(0)
  const getCount = () => {
   count.value = Math.floor(Math.random() * 10)
  }
  const addCount = () => {
   count.value++
  }
  onMounted(() => {
   getCount()
  })

  return {
   count,
   addCount
  }
 }
});
</script>
