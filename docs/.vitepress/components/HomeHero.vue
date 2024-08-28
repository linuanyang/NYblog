<template>
  <div :class="$style.avator">
    <img :src="withBase(avator)" width="140" height="140">
  </div>
  <div :class="$style.shareCard">
    <h1 :class="$style.title">👋 Hello~</h1>
    <p :class="$style.description">A passionate web developer based in Beijing.</p>
    <h2 class="blog-title text-center text-lg font-bold">欢迎！！！</h2>
  </div>
</template>


<script lang="ts" setup>
import {useData, withBase} from "vitepress";

const {theme} = useData()
const avator: string = theme.value.avator
</script>

<style module lang="scss">
@keyframes avator_rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.avator {
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    border-radius: 50%;
    border: 5px solid var(--vp-avator-border);
  }

  > img:hover {
    animation: avator_rotate 5s linear infinite;
  }
}

.shareCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  text-align: center;
}

.title {
  display: flex;
  align-items: center;
  font-size: 2.2em;
  font-weight: bold;
}

.blog-title {
  color: var(--vp-c-brand-dark);
}

.dark {
  .blog-title {
    color: var(--vp-c-brand-light);
  }
}

.description {
  margin: 1em 0;
}
</style>
