<template>
  <Layout>

  </Layout>
</template>
<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { page } = useData()
const filePath = page.value.filePath
const back = () => {
  history.back()
}
</script>
<style scoped lang="scss">
</style>
