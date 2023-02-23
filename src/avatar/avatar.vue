<template>
  <img
    class="avatar-img"
    :src="url"
    :style="{ width: size + 'px', height: size + 'px' }"
  />
</template>

<script lang="ts">
export default {
  name: 'sky-avatar',
  props: {
    url: {//图片路径
      type: String,
      require: true,
    },
    urlSet: String,
    size: {//图片大小
      type: Number,
      default:100
    },
    alt: String,
  },
  data() {
    return {
      isImageExist: true,
    }
  },
  methods: {
    // 图片加载失败处理方法
    handleError() {
      this.isImageExist = false;
    },
  }
};
</script>

<style lang="scss" scoped>
.avatar-img {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>
