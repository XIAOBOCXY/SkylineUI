<template>
  <div class="row">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'sky-row',
  props: {
    gutter: {
      type: Number,
      default: 0
    }
  }
})
</script>
<style lang="less">
.row {
  &::after,
  &::before {
    content: '';
    display: table;
  }
  &::after {
    clear: both; // 清除浮动
  }
}
</style>
