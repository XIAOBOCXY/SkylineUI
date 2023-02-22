<template>
  <div
    class="row"
    :style="style"
    :class="[typeClass, justifyClass, alignClass]"
  >
    <slot></slot>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'skyRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: String
  },
  data() {
    return {
      style: {},
      typeClass: '',
      justifyClass: 'start',
      alignClass: ''
    }
  },
  created() {
    this.getStyle()
  },
  methods: {
    getStyle() {
      // 设置 gutter
      if (this.gutter) {
        this.style.marginLeft = -this.gutter / 2 + 'px'
        this.style.marginRight = this.style.marginLeft
      }
      if (this.type && this.type === 'flex') this.typeClass = 'row--flex'
      if (this.justify !== 'start') {
        this.justifyClass = `is-justify-${this.justify}`
      }
      if (this.align) this.alignClass = `is-align-${this.align}`
    }
  }
})
</script>
<style>
@import './style/row.css';
</style>
