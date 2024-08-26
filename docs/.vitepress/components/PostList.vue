<template>
  <div class="blogList flex flex-col items-center justify-center  my-8">
    <a class="blog flex flex-col md:flex-row md:items-center md:justify-between" v-for="item in markdowns"
       :href="withBase(item.regularPath)">
      <div class="title text-xl font-bold md:max-w-[600px] md:overflow-hidden md:text-ellipsis md:whitespace-nowrap">
        {{ item.frontMatter.title }}
      </div>
      <div class="min-w-[130px]">{{ transDate(item.frontMatter.date) }}</div>
    </a>
  </div>
  <div class="pagination select-none">
    <button class="absolute left-0" v-if="pageCurrent > 1" @click="go(pageCurrent - 1)">Previous page</button>
    <div v-if="pagesNum > 1">{{ `${pageCurrent}/${pagesNum}` }}</div>
    <button class="absolute right-0" v-if="pageCurrent < pagesNum" @click="go(pageCurrent + 1)">Next page</button>
  </div>
</template>

<script lang="ts" setup>
import {useData, withBase} from "vitepress";
import dayjs from "dayjs";
import {ref} from "vue";


const {theme} = useData()
const allMds: MdInfo[] = theme.value.markdowns || []

const pageTotal = theme.value.pageTotal || 0
const pageSize = theme.value.pageSize || 0
const pageCurrent = ref(1)

let pagesNum = pageTotal % pageSize === 0 ? pageTotal / pageSize : pageTotal / pageSize + 1
pagesNum = parseInt(pagesNum.toString())

let allMap: { [k: string]: MdInfo[] } = {}
for (let i = 0; i < pagesNum; i++) {
  allMap[i] = []
}
let index = 0
for (let i = 0; i < allMds.length; i++) {
  if (allMap[index].length > pageSize - 1) {
    index += 1
  }
  allMap[index].push(allMds[i])
}

const markdowns = ref<MdInfo[]>([])
markdowns.value = allMap[pageCurrent.value - 1]

const transDate = (date: string) => {
  return dayjs(date).format('YYYY年MM月DD日')
}

const go = (page: number) => {
  pageCurrent.value = page
  markdowns.value = allMap[pageCurrent.value - 1]
}


</script>


<style scoped lang="scss">
.blog {
  width: 85%;
  border-radius: 10px;
  padding: 14px 20px;
  margin: 10px;
  background: var(--vp-c-bg);
  max-width: 800px;
  box-shadow: 6px 6px var(--vp-c-brand);
  border: 4px solid #3f4e4f;
  cursor: pointer;
}

.blog:hover {
  text-decoration: none;
  transform: translate(-2px, -2px);
  box-shadow: 10px 10px var(--vp-c-brand);
}

.title {
  color: var(--vp-c-brand-dark);
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

button {
  display: inline-block;
  color: var(--vp-c-color-d);
  cursor: pointer;
  font-size: 1.2em;
  font-weight: bold;
}

button::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--vp-c-color-d);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

button:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.dark {
  .blog {
    box-shadow: 6px 6px var(--vp-c-brand-light);

    &:hover {
      box-shadow: 10px 10px var(--vp-c-brand-light);
    }
  }

  .title {
    color: var(--vp-c-brand-light);
  }

  button {
    color: var(--vp-c-brand-light);

    &::after {
      background-color: var(--vp-c-brand-light);
    }
  }
}
</style>
