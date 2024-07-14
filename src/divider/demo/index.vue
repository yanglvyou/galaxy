<script setup lang="ts">
import GalaxyDivider from '..';
</script>

<template>
  <demo-block title="基础用法">
    <galaxy-divider content-position="left" />
  </demo-block>
</template>

<style lang="less">
.demo-divider {
  background-color: var(--galaxy-background-2);

  .galaxy-doc-demo-block__title {
    padding-top: var(--galaxy-padding-md);
  }

  .content {
    padding: 0 var(--galaxy-padding-md);
    color: var(--galaxy-text-color-2);
    font-size: var(--galaxy-font-size-md);
  }
}
</style>
