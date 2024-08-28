import {defineConfig, defineConfigWithTheme} from 'vitepress'
import {getMarkdowns, getMdTotal} from "./theme/server";
// https://vitepress.dev/reference/site-config
import {type DefaultTheme} from "vitepress/types/default-theme";

type ThemeConfig = DefaultTheme.Config & {
    avator: string;
    markdowns: any[];
    pageSize: number;
    pageTotal: number;
}

export default defineConfigWithTheme<ThemeConfig>({
    base: '/NYblog/',
    title: "NuanYang - Blog",
    description: "NuanYang - Blog",
    appearance: 'dark',
    head: [
        ['link', {rel: 'icon', href: '/NYblog/avatar.png'}],
    ],
    markdown: {
        lineNumbers: true,
        theme: 'one-dark-pro'
    },
    themeConfig: {
        logo: '/avatar.png',
        aside: false,
        avator: '/avatar.png',
        markdowns: await getMarkdowns(),
        pageSize: 5,
        pageTotal: await getMdTotal(),
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '🏠 Home', link: '/'},
            {text: '📝 Docs', link: '/pages/directory'},
            {text: '🏷️ Tags', link: '/pages/tags'},
            {
                text: '😜 Follow me',
                items: [
                    {text: 'Github', link: 'https://github.com/linuanyang'},
                ],
            },
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'},
        ],
        search: {
            // provider: 'local'
            provider: 'algolia',
            options: {
                appId: 'PZWI6OOD1R',
                apiKey: 'e205b43af3236b78cf7c2fa089f198d5',
                indexName: 'linuanyangio',
            },
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
    },
    sitemap: {
        hostname: 'https://linuanyang.github.io/NYblog/',
    }
})
