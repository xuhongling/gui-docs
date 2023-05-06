/**
 * @type {import('vitepress').UserConfig}
 */
import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Gui 文档',
  description: 'Gui Admin 后台管理系统',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

  vue: {
    reactivityTransform: true
  },

  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: 'https://github.com/xuhongling/gui-docs/edit/main/docs/:path',
      text: '为此页提供修改建议',
    },

    outline: {
      label: '本页目录'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xuhongling/gui-docs' }
    ],


    footer: {
      message: '根据 MIT 许可证发布。',
      copyright: 'Copyright © 2023-present Xu Hongling'
    },

    nav: [
      { text: '指南', link: '/src/guide/', activeMatch: '/guide/' },
      { text: '组件', link: '/src/components/', activeMatch: '/components/' },
      {
        text: '相关链接',
        items: [
          {
            text: '在线预览',
            link: 'http://42.193.225.61:8080/'
          },
          {
            text: 'pnpm',
            link: 'https://pnpm.io/zh/motivation'
          },
          {
            text: 'TurboRepo',
            link: 'https://turbo.build/repo'
          },
        ]
      }
    ],

    sidebar: {
      '/src/guide/': [
        {
          text: '指南',
          items: [
            {
              text: '介绍',
              link: '/src/guide/'
            },
            {
              text: '项目结构',
              link: '/src/guide/directory'
            },
            {
              text: '路由',
              link: '/src/guide/router'
            },
            {
              text: '配置',
              link: '/src/guide/config'
            },
          ]
        },
      ],
      '/src/components/': [
        {
          text: '常用组件',
          items: [
            {
              text: '前言',
              link: '/src/components/'
            },
            {
              text: '图标',
              link: '/src/components/common/icon'
            },
            {
              text: '数字动画',
              link: '/src/components/common/count-to'
            },
          ]
        },
        {
          text: 'Antd组件',
          items: [
            {
              text: 'Modal',
              link: '/src/components/antd/modal'
            },
            {
              text: 'Drawer',
              link: '/src/components/antd/drawer'
            },
            {
              text: 'Form',
              link: '/src/components/antd/form'
            },
            {
              text: 'Table',
              link: '/src/components/antd/table'
            },
          ]
        }
      ],
    }
  },
});