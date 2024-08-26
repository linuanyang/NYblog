<template>
  <Layout>
    <template #doc-before>
      <Title />
      <Category />
    </template>
    <template #home-hero-before>
      <HomeHero/>
    </template>
    <template #home-features-after>
      <PostList/>
    </template>
    <template #layout-bottom><CopyWright /></template>
  </Layout>
</template>
<script lang="ts" setup>
import Title from "./Title.vue";
import Category from "./Category.vue";
import HomeHero from "./HomeHero.vue";
import PostList from "./PostList.vue";
import CopyWright from "./CopyWright.vue";


import DefaultTheme from 'vitepress/theme'
import {useData} from 'vitepress'

const {Layout} = DefaultTheme
const {page} = useData()
const filePath = page.value.filePath
const back = () => {
  history.back()
}
</script>
<style scoped lang="scss">
</style>
