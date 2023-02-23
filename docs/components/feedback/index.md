# Progress 进度条
用户在点击或者跳转加载时通过进度条显示进度  
## 进度条效果
<sky-progress></sky-progress>
:::demo

```vue
<template>
  <div class="skyProgress">
    <sky-span class="skyProgress-fill" ref="fill" :style="[{'background-color':color}]"></sky-span>
  </div>
</template>

<script lang="ts">
  export default {
    name: "sky-progress",
    props: {
      color: {
        type: String,
        default: "hsl(260, 90%, 70%)"
      },
      value: {
        type: [String, Number],
        default: false
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
## Progress 进度条 Attributes

| 参数  | 说明              | 类型     | 可选值        | 默认值 |
| :------ | :----------------- | :------- | :-------------- | :----- |
| color  | 进度条颜色| `string` | --     | red      |
| value    | 进度条 大小       | `string number` | --  | 45     |