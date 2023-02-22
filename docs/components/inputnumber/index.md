# Input Number 数字输入框
仅允许输入标准的数字值，可定义范围

## 基础用法
要使用它，只需要在 `<sky-input-number>` 元素中使用 `v-model` 绑定变量即可，变量的初始值即为默认值。

:::demo 

```vue
<template>
    <div>
        <sky-input-number v-model="num"></sky-input-number>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    const num = ref(1)
</script>
```

:::

## 禁用状态
`disabled`属性接受一个 `Boolean`，设置为`true`即可禁用整个组件。 如果你只需要控制数值在某一范围内，可以设置 min 属性和 max 属性， 默认最小值为 0。

:::demo 

```vue
<template>
    <div>
        <sky-input-number v-model="num" disabled></sky-input-number>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    const num = ref(1)
</script>
```

:::

## 步进
允许定义递增递减的步进控制

设置 step 属性可以控制步长。
:::demo 

```vue
<template>
    <div>
        <sky-input-number v-model="num" :step="2"></sky-input-number>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    const num = ref(1)
</script>
```

:::

## 严格步进
step-strictly属性接受一个Boolean。 

如果这个属性被设置为 true，则只能输入步进的倍数。
:::demo 

```vue
<template>
    <div>
        <sky-input-number v-model="num" :step="2" step-strictly></sky-input-number>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    const num = ref(1)
</script>
```

:::

## 精度
设置 precision 属性可以控制数值精度，接收一个 Number。

:::demo 

```vue
<template>
    <div>
        <sky-input-number v-model="num" :precision="2" :step="0.1" :max="10"></sky-input-number>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    const num = ref(1)
</script>
```

:::

## 不同的输入框尺寸
使用 size 属性额外配置尺寸，可选的尺寸大小为：large 或 small
:::demo 

```vue
<template>
    <div>
        <sky-input-number v-model="num1" size="large"></sky-input-number>
        <br>
        <sky-input-number v-model="num2"></sky-input-number>
        <br>
        <sky-input-number v-model="num3" size="small"></sky-input-number>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    const num1 = ref(1)
    const num2 = ref(2)
    const num3 = ref(3)
</script>
```

:::

## API接口

### 属性

| 属性名                | 说明                                | 类型      | 默认值    |
| :-------------------- | :---------------------------------- | :-------- | :-------- |
| model-value / v-model | 选中项绑定值                        | `number`  | —         |
| min                   | 设置计数器允许的最小值              | `number`  | -Infinity |
| max                   | 设置计数器允许的最大值              | `number`  | Infinity  |
| step                  | 计数器步长                          | `number`  | 1         |
| step-strictly         | 是否只能输入 step 的倍数            | `boolean` | false     |
| precision             | 数值精度                            | `number`  | —         |
| size                  | 计数器尺寸                          | `enum`    | default   |
| readonly              | 原生 ` readonly` 属性，是否只读     | `boolean` | false     |
| disabled              | 是否禁用状态                        | `boolean` | false     |
| controls              | 是否使用控制按钮                    | `boolean` | true      |
| name                  | 等价于原生 input `name` 属性        | `string`  | —         |
| label                 | 等价于原生 input `label` 属性       | `string`  | —         |
| placeholder           | 等价于原生 input `placeholder` 属性 | `string`  | —         |
| id                    | 等价于原生 input `id` 属性          | `string`  | —         |

### 事件

| 事件名 | 说明                        | 类型       |
| :----- | :-------------------------- | :--------- |
| change | 绑定值被改变时触发          | `Function` |
| blur   | 在组件 Input 失去焦点时触发 | `Function` |
| focus  | 在组件 Input 获得焦点时触发 | `Function` |

### 