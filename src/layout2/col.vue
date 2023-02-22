<template>
  <div
    class="col"
    :style="style"
    :class="[spanClass, offsetClass, sizeClass, pullClass, pushClass]"
  >
    <slot></slot>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'skyCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    xl: Number
  },
  data() {
    return {
      style: {},
      spanClass: '',
      offsetClass: '',
      pullClass: '',
      pushClass: '',
      sizeClass: '',
      xsClass: '',
      smClass: '',
      mdClass: '',
      lgClass: '',
      xlClass: ''
    }
  },
  created() {
    this.getStyle()
  },
  methods: {
    getStyle() {
      if (this.$parent.gutter) {
        this.style.paddingLeft = this.$parent.gutter / 2 + 'px'
        this.style.paddingRight = this.style.paddingLeft
      }
      if (this.span) this.spanClass = 'col-' + this.span
      this.offsetClass = 'col-offset-' + this.offset
      this.pullClass = 'col-pull-' + this.pull
      this.pushClass = 'col-push-' + this.push

      // this.xsClass = "col-xs-" + this.xs;
      // this.smClass = "col-sm-" + this.sm;
      // this.mdClass = "col-md-" + this.md;
      // this.lgClass = "col-lg-" + this.lg;
      // this.xlClass = "col-xl-" + this.xl;
    }
  }
})
</script>
<style lang="less">
@import './style/col.css';

.col {
  float: left;
  box-sizing: border-box;
  background-color: pink;
  background-clip: content-box;
  border-radius: 5px;
}
</style>
