<script setup lang="ts">
import VanDivider from '..';
</script>

<template>
  <demo-block title="基础用法">
    <van-divider content-position="left" />
  </demo-block>
</template>

<style lang="less">
.demo-divider {
  background-color: var(--van-background-2);

  .van-doc-demo-block__title {
    padding-top: var(--van-padding-md);
  }

  .content {
    padding: 0 var(--van-padding-md);
    color: var(--van-text-color-2);
    font-size: var(--van-font-size-md);
  }
}
</style>
