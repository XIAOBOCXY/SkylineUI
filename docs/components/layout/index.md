# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局

使用单一分栏创建基础的栅格布局。
:::demo 通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

```vue
<template>
  <skyRow>
    <skyCol :span="24"><div class="grid-content bg-purple-dark"></div></skyCol>
  </skyRow>
  <skyRow>
    <skyCol :span="12"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="12"><div class="grid-content bg-purple-light"></div></skyCol>
  </skyRow>
  <skyRow>
    <skyCol :span="8"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="8"><div class="grid-content bg-purple-light"></div></skyCol>
    <skyCol :span="8"><div class="grid-content bg-purple"></div></skyCol>
  </skyRow>
  <skyRow>
    <skyCol :span="6"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="6"><div class="grid-content bg-purple-light"></div></skyCol>
    <skyCol :span="6"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="6"><div class="grid-content bg-purple-light"></div></skyCol>
  </skyRow>
  <skyRow>
    <skyCol :span="4"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="4"><div class="grid-content bg-purple-light"></div></skyCol>
    <skyCol :span="4"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="4"><div class="grid-content bg-purple-light"></div></skyCol>
    <skyCol :span="4"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="4"><div class="grid-content bg-purple-light"></div></skyCol>
  </skyRow>
</template>
<style lang="less">
.row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.col {
  border-radius: 8px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```

:::

## 分栏间隔

分栏之间存在间隔。
:::demo Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。

```vue
<template>
  <skyRow :gutter="20">
    <skyCol :span="6"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="6"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="6"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="6"><div class="grid-content bg-purple"></div></skyCol>
  </skyRow>
</template>
<style lang="less">
.row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.col {
  border-radius: 8px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```

:::

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

:::demo

```vue
<template>
  <skyRow :gutter="20">
    <skyCol :span="16"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="8"><div class="grid-content bg-purple"></div></skyCol>
  </skyRow>
  <skyRow :gutter="20">
    <skyCol :span="8"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="8"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="4"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="4"><div class="grid-content bg-purple"></div></skyCol>
  </skyRow>
  <skyRow :gutter="20">
    <skyCol :span="4"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="16"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="4"><div class="grid-content bg-purple"></div></skyCol>
  </skyRow>
</template>
<style lang="less">
.row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.col {
  border-radius: 8px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```

:::

## 分栏偏移

支持偏移指定的栏数。
:::demo 通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。

```vue
<template>
  <skyRow :gutter="20">
    <skyCol :span="6"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="6" :offset="6"
      ><div class="grid-content bg-purple"></div
    ></skyCol>
  </skyRow>
  <skyRow :gutter="20">
    <skyCol :span="6" :offset="6"
      ><div class="grid-content bg-purple"></div
    ></skyCol>
    <skyCol :span="6" :offset="6"
      ><div class="grid-content bg-purple"></div
    ></skyCol>
  </skyRow>
  <skyRow :gutter="20">
    <skyCol :span="12" :offset="6"
      ><div class="grid-content bg-purple"></div
    ></skyCol>
  </skyRow>
</template>
<style lang="less">
.row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.col {
  border-radius: 8px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```

:::

## 对齐方式

通过 flex 布局来对分栏进行灵活的对齐。
:::demo 将 type 属性赋值为 'flex'，可以启用 flex 布局，并可通过 justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。

```vue
<template>
  <skyRow type="flex" class="row-bg">
    <skyCol :span="6"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="6"><div class="grid-content bg-purple-light"></div></skyCol>
    <skyCol :span="6"><div class="grid-content bg-purple"></div></skyCol>
  </skyRow>
  <skyRow type="flex" class="row-bg" justify="center">
    <skyCol :span="6"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="6"><div class="grid-content bg-purple-light"></div></skyCol>
    <skyCol :span="6"><div class="grid-content bg-purple"></div></skyCol>
  </skyRow>
  <skyRow type="flex" class="row-bg" justify="end">
    <skyCol :span="6"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="6"><div class="grid-content bg-purple-light"></div></skyCol>
    <skyCol :span="6"><div class="grid-content bg-purple"></div></skyCol>
  </skyRow>
  <skyRow type="flex" class="row-bg" justify="space-between">
    <skyCol :span="6"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="6"><div class="grid-content bg-purple-light"></div></skyCol>
    <skyCol :span="6"><div class="grid-content bg-purple"></div></skyCol>
  </skyRow>
  <skyRow type="flex" class="row-bg" justify="space-around">
    <skyCol :span="6"><div class="grid-content bg-purple"></div></skyCol>
    <skyCol :span="6"><div class="grid-content bg-purple-light"></div></skyCol>
    <skyCol :span="6"><div class="grid-content bg-purple"></div></skyCol>
  </skyRow>
</template>
<style lang="less">
.row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.col {
  border-radius: 8px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
```

:::

## skyRow Attributes

| 参数    | 说明                      | 类型     | 可选值                                      | 默认值 |
| :------ | :------------------------ | :------- | :------------------------------------------ | :----- |
| gutter  | 栅格间隔                  | `number` | --                                          | 0      |
| type    | 布局模式，可选 flex       | `string` | flex                                        | --     |
| justify | flex 布局下的水平排列方式 | `string` | start/end/center/space-around/space-between | start  |
| align   | flex 布局下的垂直排列方式 | `string` | top/middle/bottom                           | --     |

## skyCol Attributes

| 参数   | 说明               | 类型     | 可选值 | 默认值 |
| :----- | :----------------- | :------- | :----- | :----- |
| span   | 栅格占据的列数     | `number` | --     | 24     |
| offset | 栅格左侧的间隔格数 | `number` | --     | 0      |
| push   | 栅格向右移动格数   | `number` | --     | 0      |
| pull   | 栅格向左移动格数   | `number` | --     | 0      |
