<template>
  <footer class="flex justify-center items-center gap-2 w-full p-8">
    <div>
      Powered by
      <a href="https://github.com/linuanyang" target="_blank" title="作者">Nyang</a>
    </div>
    |
    <div>Copyright © 2023-present</div>
    |
    <div>Released under the MIT License</div>
  </footer>
</template>
<script lang="ts" setup>
</script>
<style module lang="scss">
footer {
  color: var(--vp-c-text);
  border-top: 1px solid var(--vp-c-gutter);
  background-color: var(--vp-c-bg);

  a {
    color: var(--vp-c-brand);
    font-weight: bold;
  }
}
</style>
