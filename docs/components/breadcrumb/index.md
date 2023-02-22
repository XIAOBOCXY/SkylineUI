# breadcrumb 面包屑
显示当前页面的位置，使浏览器更容易返回
## 基础⽤法
在`breadcrumb`中，有`separator`属性，它决定以什么内容作为分隔符，其默认值为“/”。组件中每个`breadcrumbItem`组件都为一个tag，代表从主页开始的每个级别。
:::demo 
```vue
<template>
  <div>
    <breadcrumb>
      <breadcrumbItem>首页</breadcrumbItem>
      <breadcrumbItem :to="{ path: '/' }">第二页</breadcrumbItem>
      <breadcrumbItem>第三页</breadcrumbItem>
    </breadcrumb>
    <breadcrumb separator=">">
      <breadcrumbItem>首页</breadcrumbItem>
      <breadcrumbItem>第二页</breadcrumbItem>
      <breadcrumbItem>第三页</breadcrumbItem>
    </breadcrumb>
  </div>
</template>
```
:::
## 图标分隔
若想使用图标作为分隔符，需设置`separatorIcon`属性。
:::demo 
```vue
<template>
  <div>
    <breadcrumb separatorIcon="sky-icon-search">
      <breadcrumbItem>首页</breadcrumbItem>
      <breadcrumbItem>第二页</breadcrumbItem>
      <breadcrumbItem replace :to="{ path: '/' }">第三页</breadcrumbItem>
    </breadcrumb>
  </div>
</template>
```

:::
## 点击跳转
在`breadcrumbItem`组件中设置`to`属性实现跳转，可选`replace`属性，默认为 push
