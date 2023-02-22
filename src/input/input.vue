<template>
  <div>
    <template v-if="type === 'textarea'">
      <div class="sky-textarea-wrap" :class="[isDisabled]">
        <textarea
          class="sky-textarea-inner"
          :cols="cols"
          :rows="rows"
          :value="modelValue"
          @input="input"
          :disabled="props.disabled"
          :class="[isDisabled]"
          :readonly="props.readonly"
          :placeholder="inputPlaceholder"
          :maxlength="props.maxlength"
          :autocomplete="props.autocomplete"
          :name="props.name"
          :autofocus="props.autofocus"
          :form="props.form"
          :aria-label="props.label"
          :tabindex="props.tabindex"
          :style="[resizeStyle, inputStyle]"
          @blur="blurEvent"
          @focus="focusEvent"
          @change="changeEvent"
        >
        </textarea>
        <div
          class="sky-textarea-count"
          v-if="props.showWordLimit && props.maxlength"
        >
          {{ currentCount }}/{{ maxlength }}
        </div>
      </div>
    </template>
    <template v-else="type === 'text'">
      <div class="sky-input-group" :class="[prependClass, appendClass]">
        <!-- 前缀 -->
        <div class="sky-input-group__prepend" v-if="$slots.prepend" :class="[sizeClass]">
          <slot name="prepend"></slot>
        </div>
        <!-- input -->
        <div class="sky-input-wrap" :class="[isFocus, isDisabled, sizeClass]">
          <input
            class="sky-input-inner"
            @focus="focusEvent"
            @blur="blurEvent"
            @change="changeEvent"
            :placeholder="inputPlaceholder"
            :class="[isDisabled, sizeClass, centerClass,clearInputClass,countInputClass]"
            :disabled="props.disabled"
            :type="inputType"
            :maxlength="props.maxlength"
            :minlength="props.minlength"
            :name="props.name"
            :readonly="props.readonly"
            :value="modelValue"
            :autofocus="props.autofocus"
            :form="props.form"
            :aria-label="props.label"
            :tabindex="props.tabindex"
            :style="[inputStyle]"
            @input="input"
          />
          <!-- 清除 -->
          <span class="clear-icon" :style="clearStyle" @click="clearInput">
            <sky-icon class="sky-icon-close_circle"></sky-icon>
          </span>
          <!-- 计数 -->
          <span
            class="sky-input-count"
            v-if="props.showWordLimit && props.maxlength"
          >
            {{ currentCount }} / {{ maxlength }}
          </span>
        </div>
        <!-- 后缀 -->
        <div class="sky-input-group__append" v-if="$slots.append" :class="[sizeClass]">
          <slot name="append"></slot>
        </div>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'sky-input',
  }
</script>
<script setup lang="ts">
//name: "sky-input,
//import skyIcon from '../../components/skyIcon/skyIcon.vue'
import { ref, computed, useSlots } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  maxlength: {
    type: [Number, String],
    default: ''
  },
  minlength: {
    type: Number,
    default: 0
  },
  clearable: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Number]
  },

  rows: {
    type: Number,
    default: 2
  },
  cols: {
    type: Number,
    default: 75
  },
  readonly: {
    type: Boolean,
    default: false
  },
  showWordLimit: {
    type: Boolean,
    default: false
  },
  autocomplete: {
    type: String,
    default: 'off'
  },
  name: {
    type: String,
    default: ''
  },
  resize: {
    type: String,
    default: 'vertical'
  },
  inputStyle: {
    type: [String, Object],
    default: {}
  },
  formatter: {
    type: String
  },
  // showPassword:{
  //     type:Boolean,
  //     default:''
  // },
  size: {
    type: String,
    default: ''
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  form: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  tabindex: {
    type: [String, Number],
    default: ''
  },
  clear: {
    type: Function,
    default: () => {}
  },
  center: Boolean,
  onBlur: Function,
  onFocus: Function,
  onChange: Function
})
let inputType = computed(() => {
  return props.type
})
const inputPlaceholder = computed(() => {
  return props.placeholder
})
let isFocus = ref('')
const isDisabled = computed(() => {
  return props.disabled ? 'is-disabled' : ''
})
const resizeStyle = computed(() => {
  enum resizeType {
    'none',
    'both',
    'horizontal',
    'vertical'
  }
  return props.resize in resizeType ? `resize:${props.resize}` : ''
})
const emit = defineEmits([
  'update:modelValue'
  // 'blur',
  // 'focus',
  // 'change',
])
const currentCount = ref(0)
const input = (e: any) => {
  currentCount.value =
    currentCount.value > props.maxlength
      ? props.maxlength
      : e.target.value.length
  emit('update:modelValue', e.target.value)
}
const clearStyle = computed(() => {
  return [
    {
      display: props.clearable && props.modelValue ? 'block' : 'none'
    }
  ]
})
const clearInputClass = computed(()=>{
  return props.clearable?'clear':''
})
const countInputClass = computed(()=>{
  return props.showWordLimit?'count':''
})
const clearInput = () => {
  props.clear() || emit('update:modelValue', '')
}
// const passwordInput = computed(()=>{
//     return [
//         {
//             'display':props.clearable&&props.modelValue?'block':'none'
//         }
//     ]
// })
const prependClass = computed(() => {
  const prependSlot = !!useSlots()
  return prependSlot ? `sky-input-group-prepend` : ''
})
const appendClass = computed(() => {
  const appendSlot = !!useSlots()
  return appendSlot ? `sky-input-group-append` : ''
})

const sizeClass = computed(() => {
  return props.size ? `sky-input--${props.size}` : ''
})
const centerClass = computed(() => {
  return props.center ? `sky-input-center` : ''
})
const blurEvent = (e: any) => {
  isFocus.value = ''
  if (props.onBlur) {
    props.onBlur()
  }
}
const focusEvent = (e: any) => {
  isFocus.value = 'is-focus'
  if (props.onFocus) {
    props.onFocus()
  }
}
const changeEvent = (e: any) => {
  if (props.onChange) {
    props.onChange()
  }
}
</script>

<style lang="scss" scoped>
.sky-input-group {
  display: inline-flex;
  width: 100%;
  &.sky-input-group-prepend {
    .sky-input-wrap {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &.sky-input--large{
      width: 40px;
      font-size: 14px;
    }
    &.sky-input--small{
      width: 24px;
      font-size: 12px;
    }
  }
  &.sky-input-group-append {
    .sky-input-wrap {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  .sky-input-group__prepend,
  .sky-input-group__append {
    background-color: #f5f7fa;
    color: #909399;
    min-height: 100%;
    border-radius: 4px;
    padding: 0 3px;
    white-space: nowrap;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .sky-input-group__prepend {
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: 1px 0 0 0 #dcdfe6 inset, 0 1px 0 0 #dcdfe6 inset,
      0 -1px 0 0 #dcdfe6 inset;
  }
  .sky-input-group__append {
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    box-shadow: 0 1px 0 0 #dcdfe6 inset, 0 -1px 0 0 #dcdfe6 inset,
      -1px 0 0 0 #dcdfe6 inset;
  }
  // .sky-input-group__append.sky-input--large,
  // .sky-input-group__prepend.sky-input--large{
  //   font-size: 14px;
  // }
  // .sky-input-group__append.sky-input--small,
  // .sky-input-group__prepend.sky-input--small{
  //   font-size: 12px;
  //   height: 24px;
  // }
}
.sky-input-wrap {
  font-size: 14px;
  display: inline-block;
  padding: 1px 11px;
  background: #fff;
  background-image: none;
  border-radius: 4px;
  box-shadow: 0 0 0 1px #dcdfe6 inset;
  position: relative;

  &.is-focus {
    box-shadow: 0 0 0 1px #409eff inset;
  }
  &.is-disabled {
    background-color: #f5f7fa;
    box-shadow: 0 0 0 1px #e4e7ed inset;
  }
  // padding-right: 8px;
  .clear-icon {
    position: absolute;
    top: 6px;
    right: 6px;
    cursor: pointer;
    color: #a8abb2;
    &:hover {
      color: #909399;
    }
  }
  .sky-input-inner {
    width: 100%;
    height: 30px;
    flex-flow: 1;
    line-height: 30;
    padding: 0;
    outline: none;
    border: none;
    background: none;
    color: #606266;
    &.clear{
      padding-right: 16px;
    }
    &.is-disabled {
      color: #a8abb2;
      cursor: not-allowed;
    }
    &::placeholder {
      color: #a8abb2;
    }
    &.sky-input--small {
      height: 22px;
      font-size: 12px;
    }
    &.sky-input--large {
      height: 38px;
      font-size: 14px;
    }
    &.count{
      padding-right: 50px;
    }
  }
  .sky-input-count {
    display: inline-block;
    padding-left: 8px;
    margin-left: 8px;
    line-height: 20px;
    font-size: 12px;
    text-align: right;
    color: #909399;
    position: absolute;
    bottom: 6px;
    right: 10px;
    box-sizing: border-box;
  }
}
.sky-textarea-wrap {
  width: auto;
  display: inline-block;
  overflow: hidden;
  color: #606266;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  position: relative;
  &:hover {
    border-color: #c0c4cc;
  }
  &:focus {
    border-color: #409eff;
    outline: none;
  }
  &.is-disabled {
    background-color: #f5f7fa;
    box-shadow: 0 0 0 1px #e4e7ed inset;
  }
  .sky-textarea-inner {
    font-size: 14px;
    font-family: auto;
    display: block;
    resize: vertical;
    padding: 5px 11px;
    line-height: 1.5;
    width: 100%;
    min-height: 31px;
    color: #606266;
    background: none;
    border-radius: 4px;
    border: none;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px #409eff inset;
    }
    &::placeholder {
      color: #a8abb2;
    }

    &.is-disabled {
      color: #a8abb2;
      cursor: not-allowed;
    }
  }
  .sky-textarea-count {
    padding: 0 10px;
    line-height: 20px;
    font-size: 12px;
    text-align: right;
    color: #909399;
    position: absolute;
    bottom: 10px;
    right: 10px;
    box-sizing: border-box;
  }
}
.sky-input-inner::-webkit-inner-spin-button,
.sky-input-inner::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
.sky-input-inner.sky-input-center {
  text-align: center;
}
</style>
