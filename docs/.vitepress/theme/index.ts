// https://vitepress.dev/guide/custom-theme
import {h, onMounted} from 'vue'
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import '../style/index.scss'
import MyLayout from '../components/MyLayout.vue'
import "element-plus/dist/index.css";
import Directory from "../components/Directory.vue";
import Tags from "../components/Tags.vue";
import dynamicBackground from "./background";


export default {
    extends: DefaultTheme,
    Layout: MyLayout,
    async enhanceApp({app, router, siteData}) {
        app.component('Directory', Directory)
        app.component('Tags', Tags)


        const elementPlus = await import('element-plus')
        app.use(elementPlus)
    },
    setup() {
        onMounted(() => {
            dynamicBackground()
        })
    }
} satisfies Theme
