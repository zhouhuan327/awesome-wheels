module.exports = {
    base:"/awesome-wheels/",
    title: 'awesome-wheels',
    description: 'A Vue based component library',
    themeConfig:{
        nav: [
            { text: '主页', link: '/' },
            { text: 'GitHub', link: 'https://github.com/zhouhuan327/awesome-wheels' },
        ],
        sidebar: [
            '/guide/',
            {
                title: '开发指南',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/install/',
                    '/get-start/',
                ]
            },
            {
                title: '组件',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/components/layout',
                    '/components/icon',
                    '/components/button',
                    '/components/input',
                    '/components/message',
                    '/components/tab'
                ]
            },

        ]
    },

}