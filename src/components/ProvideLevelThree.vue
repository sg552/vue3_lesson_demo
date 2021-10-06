<template>
  <div style='border: 1px solid red; margin-left: 50px; width: 600px'>
    我来自三级页面 <br/>
    <span style='color: red'>
      readme_from_level_one: {{readme_from_level_one}} <br/>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  inject: ["readme_from_level_one"]
}
</script>

