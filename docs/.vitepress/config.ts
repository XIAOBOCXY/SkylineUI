import { demoBlockPlugin } from 'vitepress-theme-demoblock'
const sidebar = {
    '/': [
        { text: '快速开始', link: '/' },
        {
            text: '通⽤',
            children: [
                { text: 'Button 按钮', link: '/components/button/' },
                { text: 'Icon 图标', link: '/components/icon/' },
            ]
        },
        {
            text: '导航',
            children: [
              { text: 'Affix 固钉', link: '/components/affix/' },
              { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb/' },
          ]
        },
        {
            text: '表单组件',
            children: [
              { text: 'Input 输入框', link: '/components/input/' },
              { text: 'Input Number 数字输入框', link: '/components/inputnumber/' },
          ]
        },
        { text: '反馈' },
        { text: '数据录⼊' },
        { text: '数据展示' },
        { text: '布局', link: '/components/layout/' },
    ]
}
const config = {
    title: 'SkylineUI',
    description: 'Just another fantastic UI Library.',
    markdown: {
        config: (md) => {
            // 添加DemoBlock插槽
            md.use(demoBlockPlugin)
        }
    },
    themeConfig: {
        sidebar,
    }
}
export default config
