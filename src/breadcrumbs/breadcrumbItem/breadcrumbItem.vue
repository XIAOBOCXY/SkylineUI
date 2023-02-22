<template>
  <div class="breadItem">
    <span :class="['breadItemWords', to ? 'isLink' : '']" @click="jumpTo">
      <slot></slot>
    </span>
    <i
      v-if="separatorIcon"
      class="breadItemDivide"
      :class="separatorIcon"
    ></i>
    <span v-else class="breadItemDivide">{{ separator }}</span>
  </div>
</template>

<script lang="ts" setup name="breadcrumbItem">
import { getCurrentInstance, inject } from "vue";

import { useRouter } from 'vue-router'
// import { useRouter } from 'vitepress'
import type { Router } from 'vue-router'

const instance = getCurrentInstance()!
// const router = instance.appContext.config.globalProperties.$router as Router
const router = useRouter() as Router

const separatorIcon = inject('separatorIcon') as string
const separator = inject('separator') as string

const props = defineProps({
  // 跳转的path
  to: {},
    replace: {
      type: Boolean,
      default: false,
    },
});

const jumpTo = () => {
  if (!props.to) return;
  props.replace ? router.replace(props.to) : router.push(props.to)
  // props.replace ? router.go("/") : router.go("/")
}
</script>

<style lang="scss" scoped>
.breadItem {
  display: inline-block;
  .breadItemWords {
    font-weight: 400;
  }
  .isLink {
    font-weight: 700;
  }
  .isLink:hover {
    color: #409eff;
    cursor: pointer;
  }
  .breadItemDivide {
    font-size: 16px;
    margin: 0 8px;
    color: #999;
  }
}
</style>
