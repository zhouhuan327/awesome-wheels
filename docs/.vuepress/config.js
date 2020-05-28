module.exports = {
    base:"/awesome-wheels/",
    title: '还没想好',
    description: 'Just playing around',
    themeConfig:{
        sidebar: [
            '/',
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
                    '/components/button'
                ]
            },

        ]
    },

}