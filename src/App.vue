<template>
  <div>
    <sky-input-number
      placeholder="请输入..."
      v-model="val"
      maxlength="10"
      show-word-limit
    ></sky-input-number>
    <layout></layout>
  </div>
</template>

<script setup lang="ts">
import layout from './layout2/layout.vue'
import { ref } from 'vue'
const val = ref('')
</script>

<style scoped></style>
