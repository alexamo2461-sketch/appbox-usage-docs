import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/appbox-usage-docs/',
  title: 'AppBox Usage',
  description: 'AppBox 帮助文档',

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'AppBox 使用帮助',
      description: 'AppBox 帮助文档 - 简体中文',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '常见问题', link: '/faq' },
          { text: '基础功能', link: '/basic-features' },
          { text: '设置', link: '/settings' },
        ],
        sidebar: [
          {
            text: '入门',
            items: [
              { text: '首页', link: '/' },
              { text: '如何添加应用到收藏', link: '/how-to-add-apps' },
            ],
          },
          {
            text: '常见问题',
            items: [
              { text: '常见问题', link: '/faq' },
            ],
          },
          {
            text: '基础功能',
            items: [
              { text: '应用集管理', link: '/collection-management' },
              { text: '应用管理', link: '/app-management' },
              { text: '应用详情', link: '/app-details' },
            ],
          },
          {
            text: '其他',
            items: [
              { text: '产品路线图', link: '/roadmap' },
              { text: '会员相关', link: '/membership' },
              { text: '数据同步', link: '/sync' },
              { text: '数据备份与恢复', link: '/backup-restore' },
              { text: '设置功能', link: '/settings' },
            ],
          },
        ],
      },
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      title: 'AppBox 使用幫助',
      description: 'AppBox 幫助文檔 - 繁體中文',
      themeConfig: {
        nav: [
          { text: '首頁', link: '/zh-TW/' },
          { text: '常見問題', link: '/zh-TW/faq' },
          { text: '基礎功能', link: '/zh-TW/basic-features' },
          { text: '設定', link: '/zh-TW/settings' },
        ],
        sidebar: [
          {
            text: '入門',
            items: [
              { text: '首頁', link: '/zh-TW/' },
              { text: '如何添加應用到收藏', link: '/zh-TW/how-to-add-apps' },
            ],
          },
          {
            text: '常見問題',
            items: [
              { text: '常見問題', link: '/zh-TW/faq' },
            ],
          },
          {
            text: '基礎功能',
            items: [
              { text: '應用集管理', link: '/zh-TW/collection-management' },
              { text: '應用管理', link: '/zh-TW/app-management' },
              { text: '應用詳情', link: '/zh-TW/app-details' },
            ],
          },
          {
            text: '其他',
            items: [
              { text: '產品路線圖', link: '/zh-TW/roadmap' },
              { text: '會員相關', link: '/zh-TW/membership' },
              { text: '數據同步', link: '/zh-TW/sync' },
              { text: '數據備份與恢復', link: '/zh-TW/backup-restore' },
              { text: '設定功能', link: '/zh-TW/settings' },
            ],
          },
        ],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'AppBox User Manual',
      description: 'AppBox Documentation - English',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'FAQ', link: '/en/faq' },
          { text: 'Core Features', link: '/en/basic-features' },
          { text: 'Settings', link: '/en/settings' },
        ],
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Home', link: '/en/' },
              { text: 'How to Add Apps', link: '/en/how-to-add-apps' },
            ],
          },
          {
            text: 'FAQ',
            items: [
              { text: 'FAQ', link: '/en/faq' },
            ],
          },
          {
            text: 'Core Features',
            items: [
              { text: 'Collection Management', link: '/en/collection-management' },
              { text: 'App Management', link: '/en/app-management' },
              { text: 'App Details', link: '/en/app-details' },
            ],
          },
          {
            text: 'More',
            items: [
              { text: 'Product Roadmap', link: '/en/roadmap' },
              { text: 'Pro Info', link: '/en/membership' },
              { text: 'Data Sync', link: '/en/sync' },
              { text: 'Backup & Restore', link: '/en/backup-restore' },
              { text: 'Settings', link: '/en/settings' },
            ],
          },
        ],
      },
    },
  },

  themeConfig: {
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],
  },
})
