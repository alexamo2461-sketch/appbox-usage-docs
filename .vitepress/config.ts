import { defineConfig } from 'vitepress'

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
            text: '💬 建议与反馈',
            link: '/feedback/',
            items: [
              { text: '如何联系开发者', link: '/feedback/contact-developer' },
            ],
          },
          {
            text: '❓ 常见问题',
            link: '/faq/',
            items: [
              { text: '旧版本数据丢失恢复/找回', link: '/faq/data-recovery' },
              { text: '应用地区与APP链接识别', link: '/region/zh-CN' },
              { text: '有的应用在详情页面没有截图', link: '/faq/no-screenshots' },
              { text: '能不能加一个应用标签🏷功能？', link: '/faq/app-tagging' },
              { text: '数据更新设置是做什么用的', link: '/faq/data-update-setting' },
              { text: '如何在AppStore商店中快速导入应用', link: '/faq/quick-import-appstore' },
            ],
          },
          {
            text: '📥 如何添加应用到收藏',
            link: '/how-to-add-apps/',
            items: [
              { text: '在 AppBox 内直接添加', link: '/how-to-add-apps/direct-add' },
              { text: '通过分享插件添加应用', link: '/how-to-add-apps/share-extension' },
              { text: '从二维码或链接导入', link: '/how-to-add-apps/qr-link-import' },
              { text: '数据导入：AppBox导出的数据', link: '/how-to-add-apps/data-import' },
              { text: '数据导入：Apple data数据', link: '/how-to-add-apps/apple-data' },
            ],
          },
          {
            text: '🗺️ 产品路线图',
            link: '/roadmap/',
            items: [
              { text: '版本日志', link: '/roadmap/release-notes' },
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
            text: '🔄 数据同步功能',
            link: '/sync/',
            items: [
              { text: '同步功能说明', link: '/sync/overview' },
              { text: '同步不可用的问题', link: '/sync/troubleshooting' },
            ],
          },
          {
            text: '💾 数据备份与恢复',
            link: '/backup-restore/',
            items: [
              { text: '数据备份（数据导出）', link: '/backup-restore/export' },
              { text: '数据恢复（数据导入）', link: '/backup-restore/import' },
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
                ],
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
            text: '⚙️ 设置功能',
            link: '/settings/',
            items: [
              { text: '数据更新', link: '/settings/data-update' },
              { text: '设置主题（颜色与模式）', link: '/settings/theme' },
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
          { text: '🏠 首頁', link: '/zh-TW/' },
          { text: '❓ 常見問題', link: '/zh-TW/faq/' },
          { text: '🔧 基礎功能', link: '/zh-TW/basic-features/' },
          { text: '⚙️ 設定', link: '/zh-TW/settings/' },
        ],
        sidebar: [
          {
            text: '💬 建議與反饋',
            link: '/zh-TW/feedback/',
            items: [
              { text: '如何聯繫開發者', link: '/zh-TW/feedback/contact-developer' },
            ],
          },
          {
            text: '❓ 常見問題',
            link: '/zh-TW/faq/',
            items: [
              { text: '舊版本數據丟失恢復/找回', link: '/zh-TW/faq/data-recovery' },
              { text: '應用地區與APP連結識別', link: '/zh-TW/region/zh-TW' },
              { text: '有的應用在詳情頁面沒有截圖', link: '/zh-TW/faq/no-screenshots' },
              { text: '能不能加一個應用標籤🏷功能？', link: '/zh-TW/faq/app-tagging' },
              { text: '數據更新設定是做什麼用的', link: '/zh-TW/faq/data-update-setting' },
              { text: '如何在AppStore商店中快速導入應用', link: '/zh-TW/faq/quick-import-appstore' },
            ],
          },
          {
            text: '📥 如何添加應用到收藏',
            link: '/zh-TW/how-to-add-apps/',
            items: [
              { text: '在 AppBox 內直接添加', link: '/zh-TW/how-to-add-apps/direct-add' },
              { text: '通過分享外掛添加應用', link: '/zh-TW/how-to-add-apps/share-extension' },
              { text: '從二維碼或連結導入', link: '/zh-TW/how-to-add-apps/qr-link-import' },
              { text: '數據導入：AppBox導出的數據', link: '/zh-TW/how-to-add-apps/data-import' },
              { text: '數據導入：Apple data數據', link: '/zh-TW/how-to-add-apps/apple-data' },
            ],
          },
          {
            text: '🗺️ 產品路線圖',
            link: '/zh-TW/roadmap/',
            items: [
              { text: '版本日誌', link: '/zh-TW/roadmap/release-notes' },
            ],
          },
          {
            text: '⭐ 會員相關',
            link: '/zh-TW/membership/',
            items: [
              { text: '會員功能說明', link: '/zh-TW/membership/feature-overview' },
              { text: '購買相關說明', link: '/zh-TW/membership/purchase' },
            ],
          },
          {
            text: '🔄 數據同步功能',
            link: '/zh-TW/sync/',
            items: [
              { text: '同步功能說明', link: '/zh-TW/sync/overview' },
              { text: '同步不可用的問題', link: '/zh-TW/sync/troubleshooting' },
            ],
          },
          {
            text: '💾 數據備份與恢復',
            link: '/zh-TW/backup-restore/',
            items: [
              { text: '數據備份（數據導出）', link: '/zh-TW/backup-restore/export' },
              { text: '數據恢復（數據導入）', link: '/zh-TW/backup-restore/import' },
            ],
          },
          {
            text: '🔧 基礎功能',
            items: [
              {
                text: '應用集管理',
                link: '/zh-TW/collection-management/',
                items: [
                  { text: '新建與編輯應用集', link: '/zh-TW/collection-management/create-edit' },
                  { text: '切換應用集視圖', link: '/zh-TW/collection-management/switch-view' },
                  { text: '應用集排序', link: '/zh-TW/collection-management/sort' },
                  { text: '分享應用集', link: '/zh-TW/collection-management/share' },
                  { text: '空應用集檢測', link: '/zh-TW/collection-management/empty-detect' },
                ],
              },
              {
                text: '應用管理',
                link: '/zh-TW/app-management/',
                items: [
                  { text: '編輯應用說明', link: '/zh-TW/app-management/edit-description' },
                  { text: '切換應用視圖', link: '/zh-TW/app-management/switch-view' },
                  { text: '複製/移動應用', link: '/zh-TW/app-management/copy-move' },
                  { text: '應用多選操作', link: '/zh-TW/app-management/multi-select' },
                ],
              },
              {
                text: '應用詳情',
                link: '/zh-TW/app-details/',
                items: [
                  { text: '應用詳情頁面說明', link: '/zh-TW/app-details/overview' },
                  { text: '顯示順序排序功能', link: '/zh-TW/app-details/sort-order' },
                  { text: '翻譯功能', link: '/zh-TW/app-details/translation' },
                ],
              },
            ],
          },
          {
            text: '⚙️ 設定功能',
            link: '/zh-TW/settings/',
            items: [
              { text: '數據更新', link: '/zh-TW/settings/data-update' },
              { text: '設定主題（顏色與模式）', link: '/zh-TW/settings/theme' },
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
          { text: '🏠 Home', link: '/en/' },
          { text: '❓ FAQ', link: '/en/faq/' },
          { text: '🔧 Core Features', link: '/en/basic-features/' },
          { text: '⚙️ Settings', link: '/en/settings/' },
        ],
        sidebar: [
          {
            text: '💬 Feedback',
            link: '/en/feedback/',
            items: [
              { text: 'Contact Developer', link: '/en/feedback/contact-developer' },
            ],
          },
          {
            text: '❓ FAQ',
            link: '/en/faq/',
            items: [
              { text: 'Data Recovery: Restoring Lost Data from Older Versions', link: '/en/faq/data-recovery' },
              { text: 'App Regions & Link Recognition', link: '/en/region/en' },
              { text: 'Why do some apps have no screenshots on their details page?', link: '/en/faq/no-screenshots' },
              { text: 'What is the Data Update setting for?', link: '/en/faq/data-update-setting' },
              { text: 'Can you add an App Tagging feature?', link: '/en/faq/app-tagging' },
              { text: 'How to Quickly Import Apps from the App Store', link: '/en/faq/quick-import-appstore' },
            ],
          },
          {
            text: '📥 How to Add Apps',
            link: '/en/how-to-add-apps/',
            items: [
              { text: 'Direct Addition within AppBox', link: '/en/how-to-add-apps/direct-add' },
              { text: 'Add via Share Extension', link: '/en/how-to-add-apps/share-extension' },
              { text: 'Add via Shortcuts', link: '/en/how-to-add-apps/qr-link-import' },
              { text: 'Data Import: Data exported from AppBox', link: '/en/how-to-add-apps/data-import' },
              { text: 'Data Import: Apple data', link: '/en/how-to-add-apps/apple-data' },
            ],
          },
          {
            text: '🗺️ Product Roadmap',
            link: '/en/roadmap/',
            items: [
              { text: 'Release Notes', link: '/en/roadmap/release-notes' },
            ],
          },
          {
            text: '⭐ Pro Info',
            link: '/en/membership/',
            items: [
              { text: 'Pro Feature Overview', link: '/en/membership/feature-overview' },
              { text: 'Purchase Instructions', link: '/en/membership/purchase' },
            ],
          },
          {
            text: '🔄 Data Sync',
            link: '/en/sync/',
            items: [
              { text: 'Cloud Sync Overview', link: '/en/sync/overview' },
              { text: 'Troubleshooting: Cloud Sync Unavailable', link: '/en/sync/troubleshooting' },
            ],
          },
          {
            text: '💾 Backup & Restore',
            link: '/en/backup-restore/',
            items: [
              { text: 'Data Backup (Data Export)', link: '/en/backup-restore/export' },
              { text: 'Data Recovery (Data Import)', link: '/en/backup-restore/import' },
            ],
          },
          {
            text: '🔧 Core Features',
            items: [
              {
                text: 'Collection Management',
                link: '/en/collection-management/',
                items: [
                  { text: 'Adding and Editing App Collections', link: '/en/collection-management/create-edit' },
                  { text: 'Switching App Collection Views', link: '/en/collection-management/switch-view' },
                  { text: 'App Collection Sorting', link: '/en/collection-management/sort' },
                  { text: 'Sharing App Collection', link: '/en/collection-management/share' },
                  { text: 'Detect Empty Collection', link: '/en/collection-management/empty-detect' },
                ],
              },
              {
                text: 'App Management',
                link: '/en/app-management/',
                items: [
                  { text: 'Editing App Descriptions', link: '/en/app-management/edit-description' },
                  { text: 'Switching App Views', link: '/en/app-management/switch-view' },
                  { text: 'Copying/Moving App', link: '/en/app-management/copy-move' },
                  { text: 'Multi-Select Operations', link: '/en/app-management/multi-select' },
                ],
              },
              {
                text: 'App Details',
                link: '/en/app-details/',
                items: [
                  { text: 'App Details Page Overview', link: '/en/app-details/overview' },
                  { text: 'Display Order Sorting', link: '/en/app-details/sort-order' },
                  { text: 'Translation Feature', link: '/en/app-details/translation' },
                ],
              },
            ],
          },
          {
            text: '⚙️ Settings',
            link: '/en/settings/',
            items: [
              { text: 'Theme Settings (Color and Appearance)', link: '/en/settings/theme' },
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
          { text: '🏠 ホーム', link: '/ja/' },
          { text: '❓ よくある質問', link: '/ja/faq/' },
          { text: '🔧 基本機能', link: '/ja/basic-features/' },
          { text: '⚙️ 設定', link: '/ja/settings/' },
        ],
        sidebar: [
          {
            text: '💬 フィードバック',
            link: '/ja/feedback/',
            items: [
              { text: '開発者に連絡する', link: '/ja/feedback/contact-developer' },
            ],
          },
          {
            text: '❓ よくある質問',
            link: '/ja/faq/',
            items: [
              { text: '旧バージョンのデータ消失からの復元/復旧', link: '/ja/faq/data-recovery' },
              { text: 'アプリ地域とリンク認識', link: '/ja/region/ja' },
              { text: '一部のアプリの詳細ページにスクリーンショットがない', link: '/ja/faq/no-screenshots' },
              { text: 'アプリにタグ機能を追加できますか？', link: '/ja/faq/app-tagging' },
              { text: 'データ更新設定は何をするものですか？', link: '/ja/faq/data-update-setting' },
              { text: 'App Store からアプリをすばやくインポートする方法', link: '/ja/faq/quick-import-appstore' },
            ],
          },
          {
            text: '📥 アプリをお気に入りに追加する方法',
            link: '/ja/how-to-add-apps/',
            items: [
              { text: 'AppBox 内で直接追加', link: '/ja/how-to-add-apps/direct-add' },
              { text: '共有拡張機能でアプリを追加', link: '/ja/how-to-add-apps/share-extension' },
              { text: 'QRコードまたはリンクからインポート', link: '/ja/how-to-add-apps/qr-link-import' },
              { text: 'データインポート：AppBox からエクスポートしたデータ', link: '/ja/how-to-add-apps/data-import' },
              { text: 'データインポート：Apple data', link: '/ja/how-to-add-apps/apple-data' },
            ],
          },
          {
            text: '🗺️ 製品ロードマップ',
            link: '/ja/roadmap/',
            items: [
              { text: 'バージョンログ', link: '/ja/roadmap/release-notes' },
            ],
          },
          {
            text: '⭐ メンバーシップ',
            link: '/ja/membership/',
            items: [
              { text: 'メンバーシップ機能の説明', link: '/ja/membership/feature-overview' },
              { text: '購入に関する説明', link: '/ja/membership/purchase' },
            ],
          },
          {
            text: '🔄 データ同期',
            link: '/ja/sync/',
            items: [
              { text: '同期機能の説明', link: '/ja/sync/overview' },
              { text: '同期が利用できない問題', link: '/ja/sync/troubleshooting' },
            ],
          },
          {
            text: '💾 データバックアップと復元',
            link: '/ja/backup-restore/',
            items: [
              { text: 'データバックアップ（データエクスポート）', link: '/ja/backup-restore/export' },
              { text: 'データ復元（データインポート）', link: '/ja/backup-restore/import' },
            ],
          },
          {
            text: '🔧 基本機能',
            items: [
              {
                text: 'コレクション管理',
                link: '/ja/collection-management/',
                items: [
                  { text: 'コレクションの新規作成と編集', link: '/ja/collection-management/create-edit' },
                  { text: 'コレクションビューの切り替え', link: '/ja/collection-management/switch-view' },
                  { text: 'コレクションの並べ替え', link: '/ja/collection-management/sort' },
                  { text: 'コレクションの共有', link: '/ja/collection-management/share' },
                  { text: '空のコレクションの検出', link: '/ja/collection-management/empty-detect' },
                ],
              },
              {
                text: 'アプリ管理',
                link: '/ja/app-management/',
                items: [
                  { text: 'アプリの説明の編集', link: '/ja/app-management/edit-description' },
                  { text: 'アプリビューの切り替え', link: '/ja/app-management/switch-view' },
                  { text: 'アプリのコピー/移動', link: '/ja/app-management/copy-move' },
                  { text: 'アプリの複数選択操作', link: '/ja/app-management/multi-select' },
                ],
              },
              {
                text: 'アプリ詳細',
                link: '/ja/app-details/',
                items: [
                  { text: 'アプリ詳細ページの説明', link: '/ja/app-details/overview' },
                  { text: '表示順の並べ替え機能', link: '/ja/app-details/sort-order' },
                  { text: '翻訳機能', link: '/ja/app-details/translation' },
                ],
              },
            ],
          },
          {
            text: '⚙️ 設定',
            link: '/ja/settings/',
            items: [
              { text: 'データ更新', link: '/ja/settings/data-update' },
              { text: 'テーマ設定（色とモード）', link: '/ja/settings/theme' },
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
          { text: '🏠 홈', link: '/ko/' },
          { text: '❓ 자주 묻는 질문', link: '/ko/faq/' },
          { text: '🔧 기본 기능', link: '/ko/basic-features/' },
          { text: '⚙️ 설정', link: '/ko/settings/' },
        ],
        sidebar: [
          {
            text: '💬 피드백',
            link: '/ko/feedback/',
            items: [
              { text: '개발자에게 문의하기', link: '/ko/feedback/contact-developer' },
            ],
          },
          {
            text: '❓ 자주 묻는 질문',
            link: '/ko/faq/',
            items: [
              { text: '이전 버전 데이터 손실 복구/찾기', link: '/ko/faq/data-recovery' },
              { text: '앱 지역 및 링크 인식', link: '/ko/region/ko' },
              { text: '일부 앱의 상세 페이지에 스크린샷이 없습니다', link: '/ko/faq/no-screenshots' },
              { text: '앱 태그 기능을 추가할 수 있나요?', link: '/ko/faq/app-tagging' },
              { text: '데이터 업데이트 설정은 무엇을 위한 것인가요?', link: '/ko/faq/data-update-setting' },
              { text: 'App Store에서 앱을 빠르게 가져오는 방법', link: '/ko/faq/quick-import-appstore' },
            ],
          },
          {
            text: '📥 앱을 즐겨찾기에 추가하는 방법',
            link: '/ko/how-to-add-apps/',
            items: [
              { text: 'AppBox 내에서 직접 추가', link: '/ko/how-to-add-apps/direct-add' },
              { text: '공유 확장 기능으로 앱 추가', link: '/ko/how-to-add-apps/share-extension' },
              { text: 'QR코드 또는 링크에서 가져오기', link: '/ko/how-to-add-apps/qr-link-import' },
              { text: '데이터 가져오기: AppBox에서 내보낸 데이터', link: '/ko/how-to-add-apps/data-import' },
              { text: '데이터 가져오기: Apple data', link: '/ko/how-to-add-apps/apple-data' },
            ],
          },
          {
            text: '🗺️ 제품 로드맵',
            link: '/ko/roadmap/',
            items: [
              { text: '버전 로그', link: '/ko/roadmap/release-notes' },
            ],
          },
          {
            text: '⭐ 멤버십',
            link: '/ko/membership/',
            items: [
              { text: '멤버십 기능 설명', link: '/ko/membership/feature-overview' },
              { text: '구매 관련 설명', link: '/ko/membership/purchase' },
            ],
          },
          {
            text: '🔄 데이터 동기화',
            link: '/ko/sync/',
            items: [
              { text: '동기화 기능 설명', link: '/ko/sync/overview' },
              { text: '동기화 사용 불가 문제', link: '/ko/sync/troubleshooting' },
            ],
          },
          {
            text: '💾 데이터 백업 및 복원',
            link: '/ko/backup-restore/',
            items: [
              { text: '데이터 백업 (데이터 내보내기)', link: '/ko/backup-restore/export' },
              { text: '데이터 복원 (데이터 가져오기)', link: '/ko/backup-restore/import' },
            ],
          },
          {
            text: '🔧 기본 기능',
            items: [
              {
                text: '컬렉션 관리',
                link: '/ko/collection-management/',
                items: [
                  { text: '컬렉션 생성 및 편집', link: '/ko/collection-management/create-edit' },
                  { text: '컬렉션 보기 전환', link: '/ko/collection-management/switch-view' },
                  { text: '컬렉션 정렬', link: '/ko/collection-management/sort' },
                  { text: '컬렉션 공유', link: '/ko/collection-management/share' },
                  { text: '빈 컬렉션 감지', link: '/ko/collection-management/empty-detect' },
                ],
              },
              {
                text: '앱 관리',
                link: '/ko/app-management/',
                items: [
                  { text: '앱 설명 편집', link: '/ko/app-management/edit-description' },
                  { text: '앱 보기 전환', link: '/ko/app-management/switch-view' },
                  { text: '앱 복사/이동', link: '/ko/app-management/copy-move' },
                  { text: '앱 다중 선택 작업', link: '/ko/app-management/multi-select' },
                ],
              },
              {
                text: '앱 상세',
                link: '/ko/app-details/',
                items: [
                  { text: '앱 상세 페이지 설명', link: '/ko/app-details/overview' },
                  { text: '표시 순서 정렬 기능', link: '/ko/app-details/sort-order' },
                  { text: '번역 기능', link: '/ko/app-details/translation' },
                ],
              },
            ],
          },
          {
            text: '⚙️ 설정',
            link: '/ko/settings/',
            items: [
              { text: '데이터 업데이트', link: '/ko/settings/data-update' },
              { text: '테마 설정 (색상 및 모드)', link: '/ko/settings/theme' },
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
          { text: '🏠 Startseite', link: '/de/' },
          { text: '❓ FAQ', link: '/de/faq/' },
          { text: '🔧 Grundfunktionen', link: '/de/basic-features/' },
          { text: '⚙️ Einstellungen', link: '/de/settings/' },
        ],
        sidebar: [
          {
            text: '💬 Feedback',
            link: '/de/feedback/',
            items: [
              { text: 'Entwickler kontaktieren', link: '/de/feedback/contact-developer' },
            ],
          },
          {
            text: '❓ FAQ',
            link: '/de/faq/',
            items: [
              { text: 'Datenwiederherstellung bei Verlust älterer Versionen', link: '/de/faq/data-recovery' },
              { text: 'App-Regionen & Link-Erkennung', link: '/de/region/de' },
              { text: 'Einige Apps haben keine Screenshots auf der Detailseite', link: '/de/faq/no-screenshots' },
              { text: 'Kann eine App-Tag-Funktion hinzugefügt werden?', link: '/de/faq/app-tagging' },
              { text: 'Wofür ist die Datenaktualisierungseinstellung?', link: '/de/faq/data-update-setting' },
              { text: 'Wie importiere ich Apps schnell aus dem App Store?', link: '/de/faq/quick-import-appstore' },
            ],
          },
          {
            text: '📥 Apps zu Favoriten hinzufügen',
            link: '/de/how-to-add-apps/',
            items: [
              { text: 'Direkt in AppBox hinzufügen', link: '/de/how-to-add-apps/direct-add' },
              { text: 'Über die Share Extension hinzufügen', link: '/de/how-to-add-apps/share-extension' },
              { text: 'QR-Code oder Link zum Importieren', link: '/de/how-to-add-apps/qr-link-import' },
              { text: 'Datenimport: Aus AppBox exportierte Daten', link: '/de/how-to-add-apps/data-import' },
              { text: 'Datenimport: Apple-Daten', link: '/de/how-to-add-apps/apple-data' },
            ],
          },
          {
            text: '🗺️ Produkt-Roadmap',
            link: '/de/roadmap/',
            items: [
              { text: 'Versionsprotokoll', link: '/de/roadmap/release-notes' },
            ],
          },
          {
            text: '⭐ Mitgliedschaft',
            link: '/de/membership/',
            items: [
              { text: 'Mitgliedschaftsfunktionen', link: '/de/membership/feature-overview' },
              { text: 'Kaufinformationen', link: '/de/membership/purchase' },
            ],
          },
          {
            text: '🔄 Datensynchronisation',
            link: '/de/sync/',
            items: [
              { text: 'Sync-Funktionsbeschreibung', link: '/de/sync/overview' },
              { text: 'Problem: Synchronisation nicht verfügbar', link: '/de/sync/troubleshooting' },
            ],
          },
          {
            text: '💾 Datensicherung und -wiederherstellung',
            link: '/de/backup-restore/',
            items: [
              { text: 'Datensicherung (Datenexport)', link: '/de/backup-restore/export' },
              { text: 'Datenwiederherstellung (Datenimport)', link: '/de/backup-restore/import' },
            ],
          },
          {
            text: '🔧 Grundfunktionen',
            items: [
              {
                text: 'Sammlungsverwaltung',
                link: '/de/collection-management/',
                items: [
                  { text: 'Sammlung erstellen und bearbeiten', link: '/de/collection-management/create-edit' },
                  { text: 'Sammlungsansicht wechseln', link: '/de/collection-management/switch-view' },
                  { text: 'Sammlungen sortieren', link: '/de/collection-management/sort' },
                  { text: 'Sammlung teilen', link: '/de/collection-management/share' },
                  { text: 'Leere Sammlungen erkennen', link: '/de/collection-management/empty-detect' },
                ],
              },
              {
                text: 'App-Verwaltung',
                link: '/de/app-management/',
                items: [
                  { text: 'App-Beschreibung bearbeiten', link: '/de/app-management/edit-description' },
                  { text: 'App-Ansicht wechseln', link: '/de/app-management/switch-view' },
                  { text: 'App kopieren/verschieben', link: '/de/app-management/copy-move' },
                  { text: 'Mehrfachauswahl', link: '/de/app-management/multi-select' },
                ],
              },
              {
                text: 'App-Details',
                link: '/de/app-details/',
                items: [
                  { text: 'App-Detailseite', link: '/de/app-details/overview' },
                  { text: 'Anzeigereihenfolge sortieren', link: '/de/app-details/sort-order' },
                  { text: 'Übersetzungsfunktion', link: '/de/app-details/translation' },
                ],
              },
            ],
          },
          {
            text: '⚙️ Einstellungen',
            link: '/de/settings/',
            items: [
              { text: 'Datenaktualisierung', link: '/de/settings/data-update' },
              { text: 'Theme-Einstellungen (Farbe und Modus)', link: '/de/settings/theme' },
            ],
          },
        ],
      },
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      title: "Manuel d'utilisation AppBox",
      description: "Documentation d'aide AppBox - Français",
      themeConfig: {
        nav: [
          { text: '🏠 Accueil', link: '/fr/' },
          { text: '❓ FAQ', link: '/fr/faq/' },
          { text: '🔧 Fonctionnalités', link: '/fr/basic-features/' },
          { text: '⚙️ Réglages', link: '/fr/settings/' },
        ],
        sidebar: [
          {
            text: '💬 Commentaires',
            link: '/fr/feedback/',
            items: [
              { text: 'Contacter le développeur', link: '/fr/feedback/contact-developer' },
            ],
          },
          {
            text: '❓ FAQ',
            link: '/fr/faq/',
            items: [
              { text: 'Récupération des données perdues des anciennes versions', link: '/fr/faq/data-recovery' },
              { text: 'Régions d\'app & reconnaissance de liens', link: '/fr/region/fr' },
              { text: 'Certaines applications n\'ont pas de capture d\'écran sur la page de détails', link: '/fr/faq/no-screenshots' },
              { text: 'Peut-on ajouter une fonction d\'étiquette pour les applications ?', link: '/fr/faq/app-tagging' },
              { text: 'À quoi sert le paramètre de mise à jour des données ?', link: '/fr/faq/data-update-setting' },
              { text: 'Comment importer rapidement des applications depuis l\'App Store ?', link: '/fr/faq/quick-import-appstore' },
            ],
          },
          {
            text: '📥 Ajouter des apps aux favoris',
            link: '/fr/how-to-add-apps/',
            items: [
              { text: 'Ajout direct dans AppBox', link: '/fr/how-to-add-apps/direct-add' },
              { text: 'Ajout via l\'extension de partage', link: '/fr/how-to-add-apps/share-extension' },
              { text: 'Importer via QR code ou lien', link: '/fr/how-to-add-apps/qr-link-import' },
              { text: 'Importation de données : données exportées depuis AppBox', link: '/fr/how-to-add-apps/data-import' },
              { text: 'Importation de données : Apple data', link: '/fr/how-to-add-apps/apple-data' },
            ],
          },
          {
            text: '🗺️ Feuille de route',
            link: '/fr/roadmap/',
            items: [
              { text: 'Journal des versions', link: '/fr/roadmap/release-notes' },
            ],
          },
          {
            text: '⭐ Abonnement',
            link: '/fr/membership/',
            items: [
              { text: 'Fonctionnalités d\'abonnement', link: '/fr/membership/feature-overview' },
              { text: 'Informations d\'achat', link: '/fr/membership/purchase' },
            ],
          },
          {
            text: '🔄 Synchronisation',
            link: '/fr/sync/',
            items: [
              { text: 'Description de la synchronisation', link: '/fr/sync/overview' },
              { text: 'Problème de synchronisation indisponible', link: '/fr/sync/troubleshooting' },
            ],
          },
          {
            text: '💾 Sauvegarde et restauration',
            link: '/fr/backup-restore/',
            items: [
              { text: 'Sauvegarde (exportation de données)', link: '/fr/backup-restore/export' },
              { text: 'Restauration (importation de données)', link: '/fr/backup-restore/import' },
            ],
          },
          {
            text: '🔧 Fonctionnalités',
            items: [
              {
                text: 'Gestion des collections',
                link: '/fr/collection-management/',
                items: [
                  { text: 'Créer et modifier une collection', link: '/fr/collection-management/create-edit' },
                  { text: 'Changer la vue de la collection', link: '/fr/collection-management/switch-view' },
                  { text: 'Trier les collections', link: '/fr/collection-management/sort' },
                  { text: 'Partager une collection', link: '/fr/collection-management/share' },
                  { text: 'Détection des collections vides', link: '/fr/collection-management/empty-detect' },
                ],
              },
              {
                text: 'Gestion des applications',
                link: '/fr/app-management/',
                items: [
                  { text: 'Modifier la description de l\'application', link: '/fr/app-management/edit-description' },
                  { text: 'Changer la vue de l\'application', link: '/fr/app-management/switch-view' },
                  { text: 'Copier/déplacer une application', link: '/fr/app-management/copy-move' },
                  { text: 'Opérations multi-sélection', link: '/fr/app-management/multi-select' },
                ],
              },
              {
                text: 'Détails de l\'application',
                link: '/fr/app-details/',
                items: [
                  { text: 'Page de détails de l\'application', link: '/fr/app-details/overview' },
                  { text: 'Tri de l\'ordre d\'affichage', link: '/fr/app-details/sort-order' },
                  { text: 'Fonction de traduction', link: '/fr/app-details/translation' },
                ],
              },
            ],
          },
          {
            text: '⚙️ Réglages',
            link: '/fr/settings/',
            items: [
              { text: 'Mise à jour des données', link: '/fr/settings/data-update' },
              { text: 'Réglages du thème (couleur et mode)', link: '/fr/settings/theme' },
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
          { text: '🏠 Главная', link: '/ru/' },
          { text: '❓ Часто задаваемые вопросы', link: '/ru/faq/' },
          { text: '🔧 Основные функции', link: '/ru/basic-features/' },
          { text: '⚙️ Настройки', link: '/ru/settings/' },
        ],
        sidebar: [
          {
            text: '💬 Обратная связь',
            link: '/ru/feedback/',
            items: [
              { text: 'Связаться с разработчиком', link: '/ru/feedback/contact-developer' },
            ],
          },
          {
            text: '❓ Часто задаваемые вопросы',
            link: '/ru/faq/',
            items: [
              { text: 'Восстановление потерянных данных старых версий', link: '/ru/faq/data-recovery' },
              { text: 'Регионы приложений и распознавание ссылок', link: '/ru/region/ru' },
              { text: 'У некоторых приложений нет скриншотов на странице сведений', link: '/ru/faq/no-screenshots' },
              { text: 'Можно ли добавить функцию тегов для приложений?', link: '/ru/faq/app-tagging' },
              { text: 'Для чего нужна настройка обновления данных?', link: '/ru/faq/data-update-setting' },
              { text: 'Как быстро импортировать приложения из App Store?', link: '/ru/faq/quick-import-appstore' },
            ],
          },
          {
            text: '📥 Как добавить приложения в избранное',
            link: '/ru/how-to-add-apps/',
            items: [
              { text: 'Прямое добавление в AppBox', link: '/ru/how-to-add-apps/direct-add' },
              { text: 'Добавление через расширение «Поделиться»', link: '/ru/how-to-add-apps/share-extension' },
              { text: 'Импорт по QR-коду или ссылке', link: '/ru/how-to-add-apps/qr-link-import' },
              { text: 'Импорт данных: данные, экспортированные из AppBox', link: '/ru/how-to-add-apps/data-import' },
              { text: 'Импорт данных: Apple data', link: '/ru/how-to-add-apps/apple-data' },
            ],
          },
          {
            text: '🗺️ Дорожная карта',
            link: '/ru/roadmap/',
            items: [
              { text: 'Журнал версий', link: '/ru/roadmap/release-notes' },
            ],
          },
          {
            text: '⭐ Подписка',
            link: '/ru/membership/',
            items: [
              { text: 'Описание функций подписки', link: '/ru/membership/feature-overview' },
              { text: 'Информация о покупке', link: '/ru/membership/purchase' },
            ],
          },
          {
            text: '🔄 Синхронизация данных',
            link: '/ru/sync/',
            items: [
              { text: 'Описание синхронизации', link: '/ru/sync/overview' },
              { text: 'Проблема: синхронизация недоступна', link: '/ru/sync/troubleshooting' },
            ],
          },
          {
            text: '💾 Резервное копирование и восстановление',
            link: '/ru/backup-restore/',
            items: [
              { text: 'Резервное копирование (экспорт данных)', link: '/ru/backup-restore/export' },
              { text: 'Восстановление (импорт данных)', link: '/ru/backup-restore/import' },
            ],
          },
          {
            text: '🔧 Основные функции',
            items: [
              {
                text: 'Управление коллекциями',
                link: '/ru/collection-management/',
                items: [
                  { text: 'Создание и редактирование коллекции', link: '/ru/collection-management/create-edit' },
                  { text: 'Переключение вида коллекции', link: '/ru/collection-management/switch-view' },
                  { text: 'Сортировка коллекций', link: '/ru/collection-management/sort' },
                  { text: 'Публикация коллекции', link: '/ru/collection-management/share' },
                  { text: 'Обнаружение пустых коллекций', link: '/ru/collection-management/empty-detect' },
                ],
              },
              {
                text: 'Управление приложениями',
                link: '/ru/app-management/',
                items: [
                  { text: 'Редактирование описания приложения', link: '/ru/app-management/edit-description' },
                  { text: 'Переключение вида приложения', link: '/ru/app-management/switch-view' },
                  { text: 'Копирование/перемещение приложения', link: '/ru/app-management/copy-move' },
                  { text: 'Множественный выбор', link: '/ru/app-management/multi-select' },
                ],
              },
              {
                text: 'Детали приложения',
                link: '/ru/app-details/',
                items: [
                  { text: 'Страница сведений о приложении', link: '/ru/app-details/overview' },
                  { text: 'Сортировка порядка отображения', link: '/ru/app-details/sort-order' },
                  { text: 'Функция перевода', link: '/ru/app-details/translation' },
                ],
              },
            ],
          },
          {
            text: '⚙️ Настройки',
            link: '/ru/settings/',
            items: [
              { text: 'Обновление данных', link: '/ru/settings/data-update' },
              { text: 'Настройки темы (цвет и режим)', link: '/ru/settings/theme' },
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
          { text: '🏠 Ana Sayfa', link: '/tr/' },
          { text: '❓ SSS', link: '/tr/faq/' },
          { text: '🔧 Temel Özellikler', link: '/tr/basic-features/' },
          { text: '⚙️ Ayarlar', link: '/tr/settings/' },
        ],
        sidebar: [
          {
            text: '💬 Geri Bildirim',
            link: '/tr/feedback/',
            items: [
              { text: 'Geliştiriciyle İletişime Geçin', link: '/tr/feedback/contact-developer' },
            ],
          },
          {
            text: '❓ SSS',
            link: '/tr/faq/',
            items: [
              { text: 'Eski sürüm veri kaybı kurtarma/bulma', link: '/tr/faq/data-recovery' },
              { text: 'Uygulama Bölgeleri ve Bağlantı Tanıma', link: '/tr/region/tr' },
              { text: 'Bazı uygulamaların detay sayfasında ekran görüntüsü yok', link: '/tr/faq/no-screenshots' },
              { text: 'Uygulama etiketi özelliği eklenebilir mi?', link: '/tr/faq/app-tagging' },
              { text: 'Veri güncelleme ayarı ne işe yarar?', link: '/tr/faq/data-update-setting' },
              { text: 'App Store\'dan uygulamalar nasıl hızlıca içe aktarılır?', link: '/tr/faq/quick-import-appstore' },
            ],
          },
          {
            text: '📥 Uygulamaları Favorilere Ekleme',
            link: '/tr/how-to-add-apps/',
            items: [
              { text: 'AppBox içinde doğrudan ekleme', link: '/tr/how-to-add-apps/direct-add' },
              { text: 'Paylaşım eklentisi ile uygulama ekleme', link: '/tr/how-to-add-apps/share-extension' },
              { text: 'QR kod veya bağlantıdan içe aktarma', link: '/tr/how-to-add-apps/qr-link-import' },
              { text: 'Veri içe aktarma: AppBox\'tan dışa aktarılan veriler', link: '/tr/how-to-add-apps/data-import' },
              { text: 'Veri içe aktarma: Apple data', link: '/tr/how-to-add-apps/apple-data' },
            ],
          },
          {
            text: '🗺️ Ürün Yol Haritası',
            link: '/tr/roadmap/',
            items: [
              { text: 'Sürüm günlüğü', link: '/tr/roadmap/release-notes' },
            ],
          },
          {
            text: '⭐ Üyelik',
            link: '/tr/membership/',
            items: [
              { text: 'Üyelik özellik açıklaması', link: '/tr/membership/feature-overview' },
              { text: 'Satın alma ile ilgili açıklama', link: '/tr/membership/purchase' },
            ],
          },
          {
            text: '🔄 Veri Senkronizasyonu',
            link: '/tr/sync/',
            items: [
              { text: 'Senkronizasyon özellik açıklaması', link: '/tr/sync/overview' },
              { text: 'Senkronizasyon kullanılamıyor sorunu', link: '/tr/sync/troubleshooting' },
            ],
          },
          {
            text: '💾 Veri Yedekleme ve Geri Yükleme',
            link: '/tr/backup-restore/',
            items: [
              { text: 'Veri yedekleme (veri dışa aktarma)', link: '/tr/backup-restore/export' },
              { text: 'Veri geri yükleme (veri içe aktarma)', link: '/tr/backup-restore/import' },
            ],
          },
          {
            text: '🔧 Temel Özellikler',
            items: [
              {
                text: 'Koleksiyon Yönetimi',
                link: '/tr/collection-management/',
                items: [
                  { text: 'Koleksiyon oluşturma ve düzenleme', link: '/tr/collection-management/create-edit' },
                  { text: 'Koleksiyon görünümünü değiştirme', link: '/tr/collection-management/switch-view' },
                  { text: 'Koleksiyon sıralama', link: '/tr/collection-management/sort' },
                  { text: 'Koleksiyon paylaşma', link: '/tr/collection-management/share' },
                  { text: 'Boş koleksiyon tespiti', link: '/tr/collection-management/empty-detect' },
                ],
              },
              {
                text: 'Uygulama Yönetimi',
                link: '/tr/app-management/',
                items: [
                  { text: 'Uygulama açıklamasını düzenleme', link: '/tr/app-management/edit-description' },
                  { text: 'Uygulama görünümünü değiştirme', link: '/tr/app-management/switch-view' },
                  { text: 'Uygulama kopyalama/taşıma', link: '/tr/app-management/copy-move' },
                  { text: 'Çoklu seçim işlemleri', link: '/tr/app-management/multi-select' },
                ],
              },
              {
                text: 'Uygulama Detayları',
                link: '/tr/app-details/',
                items: [
                  { text: 'Uygulama detay sayfası açıklaması', link: '/tr/app-details/overview' },
                  { text: 'Görüntüleme sırası sıralama', link: '/tr/app-details/sort-order' },
                  { text: 'Çeviri özelliği', link: '/tr/app-details/translation' },
                ],
              },
            ],
          },
          {
            text: '⚙️ Ayarlar',
            link: '/tr/settings/',
            items: [
              { text: 'Veri güncelleme', link: '/tr/settings/data-update' },
              { text: 'Tema ayarları (renk ve mod)', link: '/tr/settings/theme' },
            ],
          },
        ],
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
