# Input Number 数字输入框
仅允许输入标准的数字值，可定义范围

## 基础用法
要使用它，只需要在 `<sky-input-number>` 元素中使用 `v-model` 绑定变量即可，变量的初始值即为默认值。

:::demo 

```vue
<template>
    <div>
        <sky-input-number v-model="val"></sky-input-number>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    const val = ref(1)
</script>
```

:::

## 禁用状态
`disabled`属性接受一个 `Boolean`，设置为`true`即可禁用整个组件。 如果你只需要控制数值在某一范围内，可以设置 min 属性和 max 属性， 默认最小值为 0。

:::demo 

```vue
<template>
    <div>
        <sky-input-number v-model="val" disabled></sky-input-number>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    const val = ref(1)
</script>
```

:::