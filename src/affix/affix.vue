<template>
  <div class="affix" ref="root" :style="rootStyle">
      <div class="affix-content" :class="{ fixed }" :style="affixStyle">
          <slot></slot>
      </div>
  </div>
</template>

<script setup lang="ts" name="affix">
import type { CSSProperties } from "vue"
import { useElementBounding, useWindowSize } from "@vueuse/core";
import { computed, onMounted, ref, shallowRef, watchEffect } from 'vue'

const props = withDefaults(
  defineProps<{
    offset?: number;
    zIndex?: number;
    position?: "top" | "bottom";
    target?: string;
  }>(),
  { offset: 0, zIndex: 100, position: "top", target: "" }
);
// 目标元素
const root = shallowRef<HTMLElement>();
const fixed = ref(false)
// 目标元素信息
const {
    height: rootHeight,
    width: rootWidth,
    top: rootTop,
    bottom: rootBottom,
    update: updateRoot,
} = useElementBounding(root);
// 滚动容器
const scrollContainer = shallowRef<HTMLElement | Window>();

//  指定父容器
const target = shallowRef<HTMLElement>();
// 指定父容器的位置/长宽信息
const targetRect = useElementBounding(target);
const transform = ref(0);
const { height: windowHeight } = useWindowSize();

onMounted(() => {
    // 以 window 为滚动容器
    scrollContainer.value = window
    // 更新 root 的信息
    updateRoot()

    if (props.target) {
        target.value = document.querySelector<HTMLElement>(props.target) ?? undefined
        if (!target.value) {
            throw new Error('Target is not existed')
        }
    } else {
        // 如果没有默认设置为document.documentElement
        target.value = document.documentElement
    }
})

const update = () => {
  if (!scrollContainer.value) return;
  if (props.position === "top") {
    if (props.target) {
      const difference =
        targetRect.bottom.value - props.offset - rootHeight.value;
      transform.value = difference < 0 ? difference : 0;

      fixed.value = props.offset > rootTop.value && targetRect.bottom.value > 0;
    } else {
      fixed.value = props.offset >= rootTop.value;
    }
  } else if (props.target) {
    fixed.value =
      windowHeight.value - props.offset < rootBottom.value &&
      windowHeight.value > targetRect.top.value;

    const difference =
      windowHeight.value -
      targetRect.top.value -
      props.offset -
      rootHeight.value;

    transform.value = difference < 0 ? -difference : 0;
  } else {
    fixed.value = windowHeight.value - props.offset < rootBottom.value;
  }
};
watchEffect(update)

const rootStyle = computed<CSSProperties>(() => {
    return {
        width: fixed.value ? `${rootWidth.value}px` : '',
        height: fixed.value ? `${rootHeight.value}px` : '',
    }
})
const affixStyle = computed<CSSProperties>(() => {
    if (!fixed.value) return {}
    return {
        width: `${rootWidth.value}px`,
        height: `${rootHeight.value}px`,
        top: props.position === "top" ? `${props.offset}px` : "",
        bottom: props.position === 'bottom' ? `${props.offset}px` : '',
        zIndex: props.zIndex,
        transform: transform.value ? `translateY(${transform.value}px)` : "",
    }
})
</script>

<style scoped lang="scss">
.fixed {
    position: fixed;
}
</style>
