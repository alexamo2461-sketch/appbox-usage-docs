import { defineConfig } from 'vitepress'

// Helper: build sidebar for non-root locales with same structure
function buildLocaleSidebar(prefix: string) {
  return [
    {
      text: '📖',
      items: [
        { text: 'Home', link: `${prefix}/` },
        { text: 'Feedback', link: `${prefix}/feedback/contact-developer` },
      ],
    },
    {
      text: '❓ FAQ',
      link: `${prefix}/faq/`,
      items: [
        { text: 'Data Recovery', link: `${prefix}/faq/data-recovery` },
        { text: 'App Regions & Links', link: `${prefix}/region/` },
        { text: 'No Screenshots?', link: `${prefix}/faq/no-screenshots` },
        { text: 'Data Update Setting', link: `${prefix}/faq/data-update-setting` },
        { text: 'Quick Import from App Store', link: `${prefix}/how-to-add-apps/share-extension` },
      ],
    },
    {
      text: '📥 How to Add Apps',
      link: `${prefix}/how-to-add-apps/`,
      items: [
        { text: 'Direct Addition', link: `${prefix}/how-to-add-apps/direct-add` },
        { text: 'Share Extension', link: `${prefix}/how-to-add-apps/share-extension` },
        { text: 'QR Code / Link Import', link: `${prefix}/how-to-add-apps/qr-link-import` },
      ],
    },
    {
      text: '🔧 Core Features',
      items: [
        {
          text: 'Collections',
          link: `${prefix}/collection-management/`,
          items: [
            { text: 'Create & Edit', link: `${prefix}/collection-management/create-edit` },
            { text: 'Switch View', link: `${prefix}/collection-management/switch-view` },
            { text: 'Sorting', link: `${prefix}/collection-management/sort` },
            { text: 'Sharing', link: `${prefix}/collection-management/share` },
            { text: 'Empty Detection', link: `${prefix}/collection-management/empty-detect` },
          ],
        },
        {
          text: 'App Management',
          link: `${prefix}/app-management/`,
          items: [
            { text: 'Edit Description', link: `${prefix}/app-management/edit-description` },
            { text: 'Switch View', link: `${prefix}/app-management/switch-view` },
            { text: 'Copy / Move', link: `${prefix}/app-management/copy-move` },
            { text: 'Multi-Select', link: `${prefix}/app-management/multi-select` },
            { text: 'Filtering', link: `${prefix}/app-management/filtering` },
          ],
        },
        {
          text: 'Search',
          link: `${prefix}/search/`,
          items: [],
        },
        {
          text: 'Statistics',
          link: `${prefix}/statistics/`,
          items: [],
        },
        {
          text: 'Tags',
          link: `${prefix}/tags/`,
          items: [],
        },
        {
          text: 'App Details',
          link: `${prefix}/app-details/`,
          items: [
            { text: 'Overview', link: `${prefix}/app-details/overview` },
            { text: 'Display Order', link: `${prefix}/app-details/sort-order` },
            { text: 'Translation', link: `${prefix}/app-details/translation` },
          ],
        },
      ],
    },
    {
      text: '⭐ Pro',
      link: `${prefix}/membership/`,
      items: [
        { text: 'Features', link: `${prefix}/membership/feature-overview` },
        { text: 'Purchase', link: `${prefix}/membership/purchase` },
      ],
    },
    {
      text: '☁️ Sync',
      link: `${prefix}/sync/`,
      items: [
        { text: 'Overview', link: `${prefix}/sync/overview` },
        { text: 'Troubleshooting', link: `${prefix}/sync/troubleshooting` },
      ],
    },
    {
      text: '💾 Import & Export',
      link: `${prefix}/backup-restore/`,
      items: [
        { text: 'Export', link: `${prefix}/backup-restore/export` },
        { text: 'Import: AppBox Data', link: `${prefix}/backup-restore/data-import` },
        { text: 'Import: Apple Data', link: `${prefix}/backup-restore/apple-data` },
      ],
    },
    {
      text: '⚙️ Settings',
      link: `${prefix}/settings/`,
      items: [
        { text: 'Theme', link: `${prefix}/settings/theme` },
        { text: 'Display Configuration', link: `${prefix}/settings/display-configuration` },
        { text: 'Share Management', link: `${prefix}/settings/share-management` },
        { text: 'App Properties', link: `${prefix}/settings/app-properties` },
        { text: 'Data Management', link: `${prefix}/settings/data-management` },
      ],
    },
    {
      text: '📄 More',
      items: [
        { text: 'Privacy Policy', link: `${prefix}/privacy-policy` },
        { text: 'Release Notes', link: `${prefix}/roadmap/release-notes` },
      ],
    },
  ]
}

export default defineConfig({
  base: '/appbox-usage-docs/',
  title: 'AppBox Usage',
  description: 'AppBox 帮助文档',

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'AppBox指南',
      description: 'AppBox 帮助文档 - 简体中文',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '常见问题', link: '/faq/' },
          { text: '基础功能', link: '/basic-features/' },
          { text: '设置', link: '/settings/' },
        ],
        sidebar: [
          {
            text: '📖 开始',
            items: [
              { text: '首页', link: '/' },
              { text: '建议与反馈', link: '/feedback/contact-developer' },
            ],
          },
          {
            text: '❓ 常见问题',
            link: '/faq/',
            items: [
              { text: '数据丢失找回', link: '/faq/data-recovery' },
              { text: '应用地区与APP链接识别', link: '/region/' },
              { text: '有的应用在详情页面没有截图', link: '/faq/no-screenshots' },
              { text: '数据更新设置是做什么用的', link: '/faq/data-update-setting' },
              { text: '如何在AppStore商店中快速导入应用', link: '/how-to-add-apps/share-extension' },
            ],
          },
          {
            text: '📥 如何添加应用到收藏',
            link: '/how-to-add-apps/',
            items: [
              { text: '在 AppBox 内直接添加', link: '/how-to-add-apps/direct-add' },
              { text: '通过分享插件添加应用', link: '/how-to-add-apps/share-extension' },
              { text: '从二维码或链接导入', link: '/how-to-add-apps/qr-link-import' },
            ],
          },
          {
            text: '🔧 基础功能',
            items: [
              {
                text: '应用集管理',
                link: '/collection-management/',
                items: [
                  { text: '新建与编辑应用集', link: '/collection-management/create-edit' },
                  { text: '切换应用集视图', link: '/collection-management/switch-view' },
                  { text: '应用集排序', link: '/collection-management/sort' },
                  { text: '分享应用集', link: '/collection-management/share' },
                  { text: '空应用集检测', link: '/collection-management/empty-detect' },
                ],
              },
              {
                text: '应用管理',
                link: '/app-management/',
                items: [
                  { text: '编辑应用说明', link: '/app-management/edit-description' },
                  { text: '切换应用视图', link: '/app-management/switch-view' },
                  { text: '复制/移动应用', link: '/app-management/copy-move' },
                  { text: '应用多选操作', link: '/app-management/multi-select' },
                  { text: '应用集内筛选', link: '/app-management/filtering' },
                ],
              },
              {
                text: '搜索功能',
                link: '/search/',
                items: [],
              },
              {
                text: '统计功能',
                link: '/statistics/',
                items: [],
              },
              {
                text: '应用标签',
                link: '/tags/',
                items: [],
              },
              {
                text: '应用详情',
                link: '/app-details/',
                items: [
                  { text: '应用详情页面说明', link: '/app-details/overview' },
                  { text: '显示顺序排序功能', link: '/app-details/sort-order' },
                  { text: '翻译功能', link: '/app-details/translation' },
                ],
              },
            ],
          },
          {
            text: '⭐ 会员相关',
            link: '/membership/',
            items: [
              { text: '会员功能说明', link: '/membership/feature-overview' },
              { text: '购买相关说明', link: '/membership/purchase' },
            ],
          },
          {
            text: '☁️ 数据同步',
            link: '/sync/',
            items: [
              { text: '同步功能说明', link: '/sync/overview' },
              { text: '同步不可用？', link: '/sync/troubleshooting' },
            ],
          },
          {
            text: '💾 数据导入与导出',
            link: '/backup-restore/',
            items: [
              { text: '数据备份（数据导出）', link: '/backup-restore/export' },
              { text: '数据导入：AppBox导出的数据', link: '/backup-restore/data-import' },
              { text: '数据导入：Apple data数据', link: '/backup-restore/apple-data' },
            ],
          },
          {
            text: '⚙️ 设置功能',
            link: '/settings/',
            items: [
              { text: '设置主题（颜色与模式）', link: '/settings/theme' },
              { text: '功能配置', link: '/settings/display-configuration' },
              { text: '分享管理', link: '/settings/share-management' },
              { text: '应用属性', link: '/settings/app-properties' },
              { text: '数据管理', link: '/settings/data-management' },
            ],
          },
          {
            text: '📄 更多',
            items: [
              { text: '隐私政策', link: '/privacy-policy' },
              { text: '版本日志', link: '/roadmap/release-notes' },
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
          { text: '常見問題', link: '/zh-TW/faq/' },
          { text: '基礎功能', link: '/zh-TW/basic-features/' },
          { text: '設定', link: '/zh-TW/settings/' },
        ],
        sidebar: buildLocaleSidebar('/zh-TW'),
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
          { text: 'FAQ', link: '/en/faq/' },
          { text: 'Core Features', link: '/en/basic-features/' },
          { text: 'Settings', link: '/en/settings/' },
        ],
        sidebar: buildLocaleSidebar('/en'),
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      title: 'AppBox ユーザーマニュアル',
      description: 'AppBox ヘルプドキュメント - 日本語',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'よくある質問', link: '/ja/faq/' },
          { text: '基本機能', link: '/ja/basic-features/' },
          { text: '設定', link: '/ja/settings/' },
        ],
        sidebar: buildLocaleSidebar('/ja'),
      },
    },
    ko: {
      label: '한국어',
      lang: 'ko',
      title: 'AppBox 사용자 매뉴얼',
      description: 'AppBox 도움말 문서 - 한국어',
      themeConfig: {
        nav: [
          { text: '홈', link: '/ko/' },
          { text: '자주 묻는 질문', link: '/ko/faq/' },
          { text: '기본 기능', link: '/ko/basic-features/' },
          { text: '설정', link: '/ko/settings/' },
        ],
        sidebar: buildLocaleSidebar('/ko'),
      },
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      title: 'AppBox Benutzerhandbuch',
      description: 'AppBox Hilfedokumentation - Deutsch',
      themeConfig: {
        nav: [
          { text: 'Startseite', link: '/de/' },
          { text: 'FAQ', link: '/de/faq/' },
          { text: 'Grundfunktionen', link: '/de/basic-features/' },
          { text: 'Einstellungen', link: '/de/settings/' },
        ],
        sidebar: buildLocaleSidebar('/de'),
      },
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      title: "Manuel d'utilisation AppBox",
      description: "Documentation d'aide AppBox - Français",
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'FAQ', link: '/fr/faq/' },
          { text: 'Fonctionnalités', link: '/fr/basic-features/' },
          { text: 'Réglages', link: '/fr/settings/' },
        ],
        sidebar: buildLocaleSidebar('/fr'),
      },
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      title: 'Руководство пользователя AppBox',
      description: 'Справочная документация AppBox - Русский',
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/ru/' },
          { text: 'Часто задаваемые вопросы', link: '/ru/faq/' },
          { text: 'Основные функции', link: '/ru/basic-features/' },
          { text: 'Настройки', link: '/ru/settings/' },
        ],
        sidebar: buildLocaleSidebar('/ru'),
      },
    },
    tr: {
      label: 'Türkçe',
      lang: 'tr',
      title: 'AppBox Kullanım Kılavuzu',
      description: 'AppBox Yardım Dokümanı - Türkçe',
      themeConfig: {
        nav: [
          { text: 'Ana Sayfa', link: '/tr/' },
          { text: 'SSS', link: '/tr/faq/' },
          { text: 'Temel Özellikler', link: '/tr/basic-features/' },
          { text: 'Ayarlar', link: '/tr/settings/' },
        ],
        sidebar: buildLocaleSidebar('/tr'),
      },
    },
  },

  themeConfig: {
    logo: {
      light: '/appbox-logo-light.png',
      dark: '/appbox-logo-dark.png',
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],
  },
})
