# Input 输入框

通过鼠标或键盘输入字符。

## 基本用法

:::demo 

```vue
<template>
  <div>
    <sky-input placeholder="请输入..." v-model="val"></sky-input>
    <br>
    <span>{{ val }}</span>
  </div>
</template>
<script setup lang="ts">
    import {ref} from 'vue'
    const val = ref('')
</script>
```

:::

## 禁用状态
通过 `disabled` 属性指定是否禁用 input 组件

:::demo 

```vue
<template>
  <div>
    <sky-input placeholder="请输入..." v-model="val" disabled></sky-input>
  </div>
</template>
```

:::

## 一键清空
使用 `clearable` 属性即可得到一个可一键清空的输入框

:::demo 

```vue
<template>
  <div>
    <sky-input placeholder="请输入..." v-model="val" clearable></sky-input>
  </div>
</template>
<script setup lang="ts">
    import {ref} from 'vue'
    const val = ref('')
</script>
```

:::

## 文本域
添加 `type="textarea"` 属性，可以转为文本域输入框，用于输入多行文本信息可缩放的输入框。 

文本域高度可通过 `rows` 属性控制.

:::demo 

```vue
<template>
    <div>
        <sky-input placeholder="请输入..." type="textarea"></sky-input>
    </div>
</template>
```

:::


## 自适应文本域
设置文字输入类型的 `autosize` 属性使得根据内容自动调整的高度。 

<!-- 你可以给 `autosize` 提供一个包含有最大和最小高度的对象，让输入框自动调整。 -->

:::demo 

```vue
<template>
    <div>
        <sky-input placeholder="请输入..." type="textarea" autosize></sky-input>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    const val = ref('')

</script>
```

:::

## 复合型输入框
可以在输入框中前置或后置一个元素，通常是标签或按钮。

<!-- 可通过 `slot` 来指定在 Input 中分发的前置或者后置的内容。 -->

:::demo

```vue
<template>
    <div>
        <sky-input placeholder="请输入...">
          <template #prepend>Http://</template>
        </sky-input>
        <br>
        <sky-input placeholder="请输入...">
          <template #append>.com</template>
        </sky-input>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    const val = ref('')

</script>
```

:::

## 尺寸
使用 `size` 属性改变输入框大小。 除了默认大小外，还有另外两个选项： `large`, `small`。

:::demo

```vue
<template>
        <sky-input placeholder="请输入..." v-model="val1" size="large"></sky-input>
        <br>
        <sky-input placeholder="请输入..." v-model="val2"></sky-input>
        <br>
        <sky-input placeholder="请输入..." v-model="val3" size="small"></sky-input>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    const val1 = ref('')
    const val2 = ref('')
    const val3 = ref('')
</script>
```

:::

## 输入长度限制
使用 `maxlength` 和 `minlength` 属性, 来控制输入内容的最大字数和最小字数。 
"字符数"使用JavaScript字符串长度来衡量。 为文本或文本输入类型设置 maxlength prop可以限制输入值的长度。 
允许你通过设置 `show-word-limit` 到 `true` 来显示剩余字数。

:::demo

```vue
<template>
    <div>
        <sky-input 
            placeholder="请输入..." 
            v-model="val"
            maxlength="100"
            show-word-limit
        ></sky-input>
        <br>
        <sky-input 
            type="textarea"
            placeholder="请输入..." 
            v-model="val"
            maxlength="100"
            show-word-limit
        ></sky-input>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    const val = ref('')
</script>
```

:::

## API

### 属性

| 属性名                      | 说明                                                         | 类型                | 默认值 |
| :-------------------------- | :----------------------------------------------------------- | :------------------ | :----- |
| type                        | 类型                                                         | `string`            | text   |
| model-value / <br />v-model | 绑定值                                                       | `string` / `number` | —      |
| maxlength                   | 最大输入长度                                                 | `string` / `number` | —      |
| minlength                   | 原生属性，最小输入长度                                       | `number`            | —      |
| show-word-limit             | 是否显示统计字数, 只在 `type` 为 'text' 或 'textarea' 的时候生效 | `boolean`           | false  |
| placeholder                 | 输入框占位文本                                               | `string`            | —      |
| clearable                   | 是否显示清除按钮，只有当 `type` 不是 textarea时生效          | `boolean`           | false  |
| disabled                    | 是否禁用                                                     | `boolean`           | false  |
| size                        | 输入框尺寸，只在 `type` 不为 'textarea' 时有效               | `enum`              | —      |
| rows                        | 输入框行数，仅 `type` 为 'textarea' 时有效                   | `number`            | 2      |
| autocomplete                | 原生 `autocomplete` 属性                                     | `string`            | off    |
| name                        | 等价于原生 input `name` 属性                                 | `string`            | —      |
| readonly                    | 原生 ` readonly` 属性，是否只读                              | `boolean`           | false  |
| resize                      | 控制是否能被用户缩放                                         | `enum`              | —      |
| autofocus                   | 原生属性，自动获取焦点                                       | `boolean`           | false  |
| form                        | 原生属性                                                     | `string`            | —      |
| label                       | 等价于原生 input `aria-label` 属性                           | `string`            | —      |
| tabindex                    | 输入框的 tabindex                                            | `string` / `number` | —      |
| input-style                 | input 元素或 textarea 元素的 style                           | `string` / `object` | {}     |

### 事件

| 事件名 | 说明                                                        | 类型       |
| :----- | :---------------------------------------------------------- | :--------- |
| blur   | 当选择器的输入框失去焦点时触发                              | `Function` |
| focus  | 当选择器的输入框获得焦点时触发                              | `Function` |
| change | 仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发 | `Function` |
| input  | 在 Input 值改变时触发                                       | `Function` |
| clear  | 在点击由 `clearable` 属性生成的清空按钮时触发               | `Function` |

