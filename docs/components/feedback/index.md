# Progress 进度条
用户在点击或者跳转加载时通过进度条显示进度  进度条效果
:::demo

```vue
<template>
  <div class="skyFeedback">
    <sky-span class="skyFeedback-fill" ref="fill" :style="[{'background-color':color}]"></sky-span>
  </div>
</template>
<script>
export default {
  name: "skyFeedback",
  props: {
    color: {
      type: String,
      default: "hsl(260, 90%, 70%)"
    },
    value: {
      type: [String, Number],
      default: 0
    }
  },
  mounted() {
      setTimeout(()=>this.render())
  },
  methods: {
    render(){
        this.$refs.fill.style.width = this.value + "%";
    }
  },
};
</script>
```

:::
