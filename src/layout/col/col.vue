<template>
  <div class="col" :class="widthSpan" :style="style">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'sky-col',
  props: {
    span: {
      type: Number,
      default: 24
    }
  },
  data() {
    return {
      widthSpan: '',
      style: {}
    }
  },
  created() {
    this.widthSpan = 'col-' + this.span
    if (this.$parent.gutter) {
      this.style.marginLeft = `${this.$parent.gutter}px`
      this.style.marginRight = this.style.marginLeft
    }
  }
})
</script>
<style lang="less">
@import './SkyCol.css';
.col {
  float: left;
  box-sizing: border-box;
  // padding-left: 10px;
  // padding-right: 10px;
  border: 1px solid black;
  border-radius: 4px;
  min-height: 30px;
}
</style>
