<template>
  <!-- 基础布局，分栏间隔，混合布局 -->
  <!-- span 和 gutter 设置完成 -->
  <skyRow :gutter="20">
    <skyCol :span="6">1</skyCol>
    <skyCol :span="6">1</skyCol>
    <skyCol :span="6">1</skyCol>
    <skyCol :span="6">1</skyCol>
  </skyRow>
  <skyRow :gutter="50">
    <skyCol :span="4">1</skyCol>
    <skyCol :span="4">1</skyCol>
    <skyCol :span="8">1</skyCol>
    <skyCol :span="8">1</skyCol>
  </skyRow>

  <!-- 分栏偏移 -->
  <!-- <skyRow>
    <skyCol :span="6" :offset="6">1</skyCol>
    <skyCol :span="6" :offset="6">1</skyCol>
  </skyRow> -->

  <!-- push栅格向右移动格数 -->
  <!-- <skyRow>
    <skyCol :span="6" :push="6">1</skyCol>
    <skyCol :span="6" :push="12">2</skyCol>
  </skyRow> -->

  <!-- pull栅格向左移动格数 -->
  <!-- <skyRow>
    <skyCol :span="6">1</skyCol>
    <skyCol :span="6" :push="6">2</skyCol>
  </skyRow> -->

  <!-- 对齐方式 通过 flex 布局来对分栏进行灵活的对齐。 -->
  <!-- <p>------默认start-------</p>
  <skyRow type="flex">
    <skyCol :span="6">1</skyCol>
    <skyCol :span="6">1</skyCol>
    <skyCol :span="6">1</skyCol>
  </skyRow>
  <p>------center-------</p>
  <skyRow type="flex" justify="center">
    <skyCol :span="6">1</skyCol>
    <skyCol :span="6">1</skyCol>
    <skyCol :span="6">1</skyCol>
  </skyRow>
  <p>-------end------</p>
  <skyRow type="flex" justify="end">
    <skyCol :span="6">1</skyCol>
    <skyCol :span="6">1</skyCol>
    <skyCol :span="6">1</skyCol>
  </skyRow>
  <p>------space-between-------</p>
  <skyRow type="flex" justify="space-between">
    <skyCol :span="6">1</skyCol>
    <skyCol :span="6">1</skyCol>
    <skyCol :span="6">1</skyCol>
  </skyRow>
  <p>------space-around-------</p>
  <skyRow type="flex" justify="space-around">
    <skyCol :span="6">1</skyCol>
    <skyCol :span="6">1</skyCol>
    <skyCol :span="6">1</skyCol>
  </skyRow> -->

  <!-- 测试align -->
  <!-- <p>------top---------</p>
  <skyRow type="flex" align="top">
    <skyCol :span="6">1</skyCol>
    <skyCol :span="6">1</skyCol>
    <skyCol :span="6">1</skyCol>
  </skyRow>

  <p>------middle---------</p>
  <skyRow type="flex" align="middle">
    <skyCol :span="6">1</skyCol>
    <skyCol :span="6">1</skyCol>
    <skyCol :span="6">1</skyCol>
  </skyRow>

  <p>------bottom---------</p>
  <skyRow type="flex" align="bottom">
    <skyCol :span="6">1</skyCol>
    <skyCol :span="6">1</skyCol>
    <skyCol :span="6">1</skyCol>
  </skyRow>
  -->

  <!-- 响应式布局 -->
  <!-- <skyRow :gutter="10">
    <skyCol xs="8" sm="6" md="4" lg="3" xl="1">1</skyCol>
    <skyCol xs="4" sm="6" md="8" lg="9" xl="11">1</skyCol>
    <skyCol xs="4" sm="6" md="8" lg="9" xl="11">1</skyCol>
    <skyCol xs="8" sm="6" md="4" lg="3" xl="1">1</skyCol>
  </skyRow> -->
</template>
<script>
import { defineComponent } from 'vue'
import skyCol from './col.vue'
import skyRow from './row.vue'

export default defineComponent({
  name: 'layout',
  components: {
    skyCol,
    skyRow
  }
})
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
</style>
