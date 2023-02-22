# affix 固钉
将元素固定到特定的可见区域。
## 基础⽤法
默认情况下，元素以`top`固定。

可以设置`offset`属性以更改偏移量，默认值为0。

:::demo 
```vue
<template>
  <affix :offset="120">
    <sky-button type="primary">Offset top 120px</sky-button>
  </affix>
</template>
```

:::
## 目标容器
您可以设置`target`属性以始终将元素保留在容器中。如果超出范围，它将被隐藏。

:::demo 
```vue
<template>
  <div class="affix-container">
    <affix target=".affix-container" :offset="80">
      <sky-button type="primary">Target container</sky-button>
    </affix>
  </div>
</template>
<style scoped>
.affix-container {
  text-align: center;
  height: 300px;
  border-radius: 4px;
  background: #E5E9F2;
}
</style>
```

:::
## 固定位置
固钉组件提供两个固定位置：`top`和`bottom`。

:::demo 通过`position`属性设置。
```vue
<template>
  <affix position="bottom" :offset="20">
    <sky-button type="primary">Offset bottom 20px</sky-button>
  </affix>
</template>
```
