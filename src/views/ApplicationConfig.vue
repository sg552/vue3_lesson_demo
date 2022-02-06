<template>
  <div class="hello">
    <p>下面3个图片都使用了 this.cdn_name 这个全局配置 作为图片URL的域名</p>
    <img :src="image1" /> <br/>
	<img :src="image2" /> <br/>
	<img :src="image3" /> <br/>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      image1: this.cdn_name + '/blog_images/from_paste_20220204_093416.png',
      image2: this.cdn_name + '/blog_images/from_paste_20220204_092835.png',
      image3: this.cdn_name + '/blog_images/from_paste_20220206_090923.png'
    }
  }
}
</script>
<style>
img{
	width: 150px;
}
</style>