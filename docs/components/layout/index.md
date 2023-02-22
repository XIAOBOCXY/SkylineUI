# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局

使用单一分栏创建基础的栅格布局。
:::demo 通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

```vue
<template>
    <sky-row>
      <sky-col :span="24"></sky-col>
    </sky-row>
    <sky-row>
      <sky-col :span="12"></sky-col>
      <sky-col :span="12"></sky-col>
    </sky-row>
    <sky-row>
      <sky-col :span="8"></sky-col>
      <sky-col :span="8"></sky-col>
      <sky-col :span="8"></sky-col>
    </sky-row>
    <sky-row>
      <sky-col :span="6"></sky-col>
      <sky-col :span="6"></sky-col>
      <sky-col :span="6"></sky-col>
      <sky-col :span="6"></sky-col>
    </sky-row>
</template>

```
:::

## 分栏间隔

:::demo Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。
```vue
<template>
    <sky-row :gutter="20">
      <sky-col :span="8"></sky-col>
      <sky-col :span="8"></sky-col>
      <sky-col :span="8"></sky-col>
    </sky-row>
</template>
```

:::

## 待定
