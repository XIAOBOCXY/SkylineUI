<template>
  <div class="breadWrap">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup name="breadcrumb">
import { provide } from 'vue';
const props = defineProps({
  // 使用icon类名进行分隔
  separatorIcon: {
      type: String,
      default: "",
    },
    // 自定义分隔
    separator: {
      type: String,
      default: "/",
    },
});

provide("separatorIcon", props.separatorIcon);
provide("separator", props.separator);
</script>

<style lang="scss" scoped>
.breadWrap {
  font-size: 14px;
  :deep(.breadItem:first-child .breadItemWords) {
    font-weight: 700;
  }

  :deep(.breadItem:last-child .breadItemDivide) {
    display: none;
  }
}
</style>
