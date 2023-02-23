# Avatar 头像

Avatar 组件可以用来代表人物或对象， 支持使用图片作为 Avatar。

## 基础⽤法

使用 size 属性来设置 Avatar 的形状和大小。

:::demo

```vue
<template>
  <div>
    <sky-avatar :url="avatarImgOne" :size="100" />
    <sky-avatar :url="avatarImgTwo" :size="200"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      avatarImgOne: 'https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF',
      avatarImgTwo:
        'https://t7.baidu.com/it/u=3332251293,4211134448&fm=193&f=GIF'
    }
  }
}
</script>
```

<component is="style">
.avatar-img{
  margin:0 10px;
  float:left;
}
</component>
:::
## Avatar Attributes

| 参数  | 说明              | 类型     | 可选值        | 默认值 |
| :------ | :----------------- | :------- | :-------------- | :----- |
| url  | Avatar 图片的源地址| `string` | --     | --      |
| size    | Avatar 大小       | `number` | --  | 100     |
