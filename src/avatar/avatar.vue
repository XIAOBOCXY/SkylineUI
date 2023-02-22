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
    size: {//图片大小
      type: Number,
      default:100
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-img {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>
