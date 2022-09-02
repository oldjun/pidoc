// .vuepress/config.js
module.exports = {
    title: 'The Pi Programming Language',
    description: '动态类型多范式高级编程语言',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '入门', link: '/guide/intro.html' },
            { text: '文档', link: '/document/' },
            { text: 'GitHub', link: 'https://github.com/oldjun/pi' },
        ],
        sidebar: {
            '/document/': [
                {
                    title: '基础语法',
                    children: [
                        {
                            title: '标识符',
                            path: 'basic/identifier',
                        },
                        {
                            title: '分隔符',
                            path: 'basic/semicolon',
                        },
                        {
                            title: '关键字',
                            path: 'basic/keywords',
                        },
                        {
                            title: '注释',
                            path: 'basic/comments',
                        }
                    ]
                },
                {
                    title: '数据类型',
                    children: [
                        {
                            title: '空值',
                            path: 'types/null',
                        },
                        {
                            title: '布尔',
                            path: 'types/bool',
                        },
                        {
                            title: '整数',
                            path: 'types/integer',
                        },
                        {
                            title: '浮点数',
                            path: 'types/float',
                        },
                        {
                            title: '字符串',
                            path: 'types/string',
                        },
                        {
                            title: '列表',
                            path: 'types/list',
                        },
                        {
                            title: '字典',
                            path: 'types/hash',
                        },
                        {
                            title: '函数',
                            path: 'types/func',
                        },
                        {
                            title: '类',
                            path: 'types/class',
                        }
                    ]
                },
                {
                    title: '运算符',
                    children: [
                        {
                            title: '算术运算符',
                            path: 'operator/arithmetic',
                        },
                        {
                            title: '赋值运算符',
                            path: 'operator/assign',
                        },
                        {
                            title: '逻辑运算符',
                            path: 'operator/logic',
                        },
                        {
                            title: '比较运算符',
                            path: 'operator/compare',
                        },
                        {
                            title: '位运算符',
                            path: 'operator/bits',
                        },
                        {
                            title: '成员运算符',
                            path: 'operator/in',
                        },
                        {
                            title: '三元运算符',
                            path: 'operator/ternary',
                        },
                        {
                            title: '运算符优先级',
                            path: 'operator/priority',
                        }
                    ]
                },
                {
                    title: '条件语句',
                    children: [
                        {
                            title: 'if',
                            path: 'condition/if',
                        },
                        {
                            title: 'switch',
                            path: 'condition/switch',
                        }
                    ]
                },
                {
                    title: '循环语句',
                    children: [
                        {
                            title: 'for',
                            path: 'loop/for',
                        },
                        {
                            title: 'while',
                            path: 'loop/while',
                        }
                    ]
                },
                {
                    title: '延迟语句',
                    children: [
                        {
                            title: 'defer',
                            path: 'defer/defer',
                        }
                    ]
                },
                {
                    title: '装饰器',
                    children: [
                        {
                            title: '装饰函数',
                            path: 'decorator/func',
                        },
                        {
                            title: '装饰方法',
                            path: 'decorator/method',
                        }
                    ]
                },
                {
                    title: '文件操作',
                    children: [
                        {
                            title: '文件操作',
                            path: 'file/file',
                        }
                    ]
                },
                {
                    title: '模块',
                    children: [
                        {
                            title: '本地模块',
                            path: 'module/local',
                        },
                        {
                            title: '开源包',
                            path: 'module/package',
                        },
                        {
                            title: '搜索路径',
                            path: 'module/search',
                        }
                    ]
                },
                {
                    title: '协程',
                    children: [
                        {
                            title: 'async',
                            path: 'routine/async',
                        }
                    ]
                },
                {
                    title: '标准库',
                    children: [
                        {
                            title: 'os',
                            path: 'library/os',
                        },
                        {
                            title: 'time',
                            path: 'library/time',
                        },
                        {
                            title: 'math',
                            path: 'library/math',
                        },
                        {
                            title: 'json',
                            path: 'library/json',
                        },
                        {
                            title: 'regexp',
                            path: 'library/regexp',
                        },
                        {
                            title: 'net',
                            path: 'library/net',
                        },
                        {
                            title: 'sync',
                            path: 'library/sync',
                        }
                    ]
                }
            ],
            '/guide/': [
                {
                    title: '简介',
                    path: 'intro'
                },
                {
                    title: '安装',
                    path: 'install'
                },
                {
                    title: '脚本编程',
                    path: 'script'
                },
                {
                    title: '交互模式',
                    path: 'interact'
                }
            ]
        }
    }
  }