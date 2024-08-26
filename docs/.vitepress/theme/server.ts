import {globby} from "globby";
import matter from "gray-matter";
import fs from "fs-extra";

function formatDate(date: Date) {
    return new Date(date).toJSON().split('T')[0]
}
function compareDate(obj1: MdInfo, obj2: MdInfo) {
    return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1
}


export async function getMarkdowns() {
    const paths = await getMarkdownFiles()
    const markdowns = paths.map(path => {
        const md = fs.readFileSync(path, 'utf-8')
        const {data} = matter(md)
        data.date = formatDate(data.date)
        const mdInfo: MdInfo = {
            frontMatter: data as FrontMatter,
            regularPath: `/${path.replace('.md', '.html').replace('docs/', '')}`,
        }
        return mdInfo
    })
    markdowns.sort(compareDate)
    return markdowns
}

export async function getMdTotal() {
    return [...(await getMarkdownFiles())].length
}


async function getMarkdownFiles() {
    const paths = await globby(['**/*.md'], {
        ignore: ['node_modules', 'README.md']
    })
    return paths.filter(path => path.includes('markdowns'))
}
