import {defineConfig} from 'vitepress'
import {getMarkdowns, getMdTotal} from "./theme/server";
// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/NYblog/',
    title: "NuanYang - Blog",
    description: "NuanYang - Blog",
    head: [
        ['link', {rel: 'icon', href: '/NYblog/avatar.png'}],
    ],
    themeConfig: {
        logo: '/avatar.png',
        // @ts-ignore
        avator: '/avatar.png',
        aside: false,
        markdowns: await getMarkdowns(),
        pageSize: 5,
        pageTotal: await getMdTotal(),
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '首页', link: '/'},
            {text: '📝 Docs', link: '/pages/directory'},
            {text: '🏷️ Tags', link: '/pages/tags'},
            {
                text: '👀 Follow me',
                items: [
                    { text: 'Github', link: 'https://github.com/linuanyang' },
                ],
            },
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'},
        ],
        search: {
            provider: 'local'
        },
    },
    vite: {
        server: {
            host: '0.0.0.0',
            port: 5173,
            open: false,
            hmr: true,
        },
        clearScreen: true,
    }
})
