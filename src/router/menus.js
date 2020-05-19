const menus = [
    {
        title: '首页',
        path: '/home',
        icon: 'home'
    },
    {
        title: '关于',
        path: '/about',
        icon: 'word'
    },
    {
        title: '关键字',
        path: '/sensitive-word',
        icon: 'word'
    },
    {
        title: '敏感句',
        path: '/sensitive-sentence',
        icon: 'sentence',

    },
    {
        title:'非法记录',
        path:'/illegal-message',
       icon:'message'
    },
    {
        title:'私聊群发',
        path:'/private-records',
        icon:'privaterecords'

    },
    {
        title:'聊天记录',
        path:'/message',
        icon:'message',
        children: [
            {
                title: '聊天记录',
                path: '/message/records',
                icon:'message',
            },
            {
                title: '实时监控',
                path: '/message/monitoring',
                icon: 'monit',
            }
        ]
    },
    {
        title:'举报记录',
        path:'/report-records',
        icon:'reportrecords'
    },
    {
        title:'帮会信息',
        path:'/clan-show',
        icon:'clanshow'
    },
    {
        title:'在线日志',
        path:'/log',
        icon:'log'

    },
    {
        title: '封禁管理',
        path: '/manage',
        icon:'closuremanage',
        children: [
            {
                title: '禁言',
                path: '/manage/mute',
                icon:'message',
            },
            {
                title: '禁言详情',
                path: '/manage/details',
                icon:'mutemanage',
                hidden:true
            },
            {
                title: '封号',
                path: '/manage/freeze',
                icon: 'freezemanage',
            }
        ]
    },
]

export default menus
