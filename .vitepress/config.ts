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
    ja: {
      label: '日本語',
      lang: 'ja',
      title: 'AppBox ユーザーマニュアル',
      description: 'AppBox ヘルプドキュメント - 日本語',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'よくある質問', link: '/ja/faq' },
          { text: '基本機能', link: '/ja/basic-features' },
          { text: '設定', link: '/ja/settings' },
        ],
        sidebar: [
          {
            text: 'はじめに',
            items: [
              { text: 'ホーム', link: '/ja/' },
              { text: 'アプリをお気に入りに追加する方法', link: '/ja/how-to-add-apps' },
            ],
          },
          {
            text: 'よくある質問',
            items: [
              { text: 'よくある質問', link: '/ja/faq' },
            ],
          },
          {
            text: '基本機能',
            items: [
              { text: 'コレクション管理', link: '/ja/collection-management' },
              { text: 'アプリ管理', link: '/ja/app-management' },
              { text: 'アプリ詳細', link: '/ja/app-details' },
            ],
          },
          {
            text: 'その他',
            items: [
              { text: '製品ロードマップ', link: '/ja/roadmap' },
              { text: 'メンバーシップ', link: '/ja/membership' },
              { text: 'データ同期', link: '/ja/sync' },
              { text: 'データバックアップと復元', link: '/ja/backup-restore' },
              { text: '設定機能', link: '/ja/settings' },
            ],
          },
        ],
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
          { text: '자주 묻는 질문', link: '/ko/faq' },
          { text: '기본 기능', link: '/ko/basic-features' },
          { text: '설정', link: '/ko/settings' },
        ],
        sidebar: [
          {
            text: '시작하기',
            items: [
              { text: '홈', link: '/ko/' },
              { text: '앱을 즐겨찾기에 추가하는 방법', link: '/ko/how-to-add-apps' },
            ],
          },
          {
            text: '자주 묻는 질문',
            items: [
              { text: '자주 묻는 질문', link: '/ko/faq' },
            ],
          },
          {
            text: '기본 기능',
            items: [
              { text: '컬렉션 관리', link: '/ko/collection-management' },
              { text: '앱 관리', link: '/ko/app-management' },
              { text: '앱 상세', link: '/ko/app-details' },
            ],
          },
          {
            text: '기타',
            items: [
              { text: '제품 로드맵', link: '/ko/roadmap' },
              { text: '멤버십', link: '/ko/membership' },
              { text: '데이터 동기화', link: '/ko/sync' },
              { text: '데이터 백업 및 복원', link: '/ko/backup-restore' },
              { text: '설정 기능', link: '/ko/settings' },
            ],
          },
        ],
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
          { text: 'FAQ', link: '/de/faq' },
          { text: 'Grundfunktionen', link: '/de/basic-features' },
          { text: 'Einstellungen', link: '/de/settings' },
        ],
        sidebar: [
          {
            text: 'Erste Schritte',
            items: [
              { text: 'Startseite', link: '/de/' },
              { text: 'Apps zu Favoriten hinzufügen', link: '/de/how-to-add-apps' },
            ],
          },
          {
            text: 'FAQ',
            items: [
              { text: 'FAQ', link: '/de/faq' },
            ],
          },
          {
            text: 'Grundfunktionen',
            items: [
              { text: 'Sammlungsverwaltung', link: '/de/collection-management' },
              { text: 'App-Verwaltung', link: '/de/app-management' },
              { text: 'App-Details', link: '/de/app-details' },
            ],
          },
          {
            text: 'Weiteres',
            items: [
              { text: 'Produkt-Roadmap', link: '/de/roadmap' },
              { text: 'Mitgliedschaft', link: '/de/membership' },
              { text: 'Datensynchronisation', link: '/de/sync' },
              { text: 'Datensicherung und -wiederherstellung', link: '/de/backup-restore' },
              { text: 'Einstellungen', link: '/de/settings' },
            ],
          },
        ],
      },
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      title: 'Manuel d\'utilisation AppBox',
      description: 'Documentation d\'aide AppBox - Français',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'FAQ', link: '/fr/faq' },
          { text: 'Fonctionnalités', link: '/fr/basic-features' },
          { text: 'Réglages', link: '/fr/settings' },
        ],
        sidebar: [
          {
            text: 'Pour commencer',
            items: [
              { text: 'Accueil', link: '/fr/' },
              { text: 'Ajouter des apps aux favoris', link: '/fr/how-to-add-apps' },
            ],
          },
          {
            text: 'FAQ',
            items: [
              { text: 'FAQ', link: '/fr/faq' },
            ],
          },
          {
            text: 'Fonctionnalités',
            items: [
              { text: 'Gestion des collections', link: '/fr/collection-management' },
              { text: 'Gestion des apps', link: '/fr/app-management' },
              { text: 'Détails des apps', link: '/fr/app-details' },
            ],
          },
          {
            text: 'Autres',
            items: [
              { text: 'Feuille de route', link: '/fr/roadmap' },
              { text: 'Abonnement', link: '/fr/membership' },
              { text: 'Synchronisation', link: '/fr/sync' },
              { text: 'Sauvegarde et restauration', link: '/fr/backup-restore' },
              { text: 'Réglages', link: '/fr/settings' },
            ],
          },
        ],
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
          { text: 'Часто задаваемые вопросы', link: '/ru/faq' },
          { text: 'Основные функции', link: '/ru/basic-features' },
          { text: 'Настройки', link: '/ru/settings' },
        ],
        sidebar: [
          {
            text: 'Начало работы',
            items: [
              { text: 'Главная', link: '/ru/' },
              { text: 'Как добавить приложения в избранное', link: '/ru/how-to-add-apps' },
            ],
          },
          {
            text: 'Часто задаваемые вопросы',
            items: [
              { text: 'Часто задаваемые вопросы', link: '/ru/faq' },
            ],
          },
          {
            text: 'Основные функции',
            items: [
              { text: 'Управление коллекциями', link: '/ru/collection-management' },
              { text: 'Управление приложениями', link: '/ru/app-management' },
              { text: 'Детали приложения', link: '/ru/app-details' },
            ],
          },
          {
            text: 'Прочее',
            items: [
              { text: 'Дорожная карта', link: '/ru/roadmap' },
              { text: 'Подписка', link: '/ru/membership' },
              { text: 'Синхронизация данных', link: '/ru/sync' },
              { text: 'Резервное копирование и восстановление', link: '/ru/backup-restore' },
              { text: 'Настройки', link: '/ru/settings' },
            ],
          },
        ],
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
          { text: 'SSS', link: '/tr/faq' },
          { text: 'Temel Özellikler', link: '/tr/basic-features' },
          { text: 'Ayarlar', link: '/tr/settings' },
        ],
        sidebar: [
          {
            text: 'Başlarken',
            items: [
              { text: 'Ana Sayfa', link: '/tr/' },
              { text: 'Uygulamaları Favorilere Ekleme', link: '/tr/how-to-add-apps' },
            ],
          },
          {
            text: 'SSS',
            items: [
              { text: 'SSS', link: '/tr/faq' },
            ],
          },
          {
            text: 'Temel Özellikler',
            items: [
              { text: 'Koleksiyon Yönetimi', link: '/tr/collection-management' },
              { text: 'Uygulama Yönetimi', link: '/tr/app-management' },
              { text: 'Uygulama Detayları', link: '/tr/app-details' },
            ],
          },
          {
            text: 'Diğer',
            items: [
              { text: 'Ürün Yol Haritası', link: '/tr/roadmap' },
              { text: 'Üyelik', link: '/tr/membership' },
              { text: 'Veri Senkronizasyonu', link: '/tr/sync' },
              { text: 'Veri Yedekleme ve Geri Yükleme', link: '/tr/backup-restore' },
              { text: 'Ayarlar', link: '/tr/settings' },
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
