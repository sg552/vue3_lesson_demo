<template>
  <button @click="switchModalWindow()">开启悬浮窗(modal window)</button>
  <div v-if="isModalOpen" class="modal">
    <div class="content">
      <p>学习使我快乐~</p>
      <button @click="switchModalWindow()">关闭悬浮窗</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false
    }
  },
  methods: {
    switchModalWindow(){
      this.isModalOpen = !this.isModalOpen
    }
  },
  mounted(){
    // 先通过js代码的方式,把body的 position css属性设置成为absolute
    let body = document.querySelector('body')
    body.style.position = 'absolute'
  }
}
</script>

<style>
body{
  position: absolute;
  margin: 0
}
.modal{
  z-index: 10;
  position: absolute;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  background-color: rgba(0,0,255,0.1);
}

.content {
  z-index: 20;
  width: 400px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 50px;
  height: auto;
  border: 1px solid red;
  background-color: white;
}
</style>
