# 翻譯功能

應用詳情頁面提供翻譯功能，可對來自於 AppStore 的應用介紹、更新記錄區塊的內容進行翻譯。

**使用方法**：打開應用詳情頁面 → 在應用介紹和更新記錄區塊中點擊右上角翻譯按鈕，即可彈出系統翻譯頁面。

> **注意**：該功能使用 iOS 系統自帶的 Translation API，如果翻譯不可用，請檢查裝置是否安裝使用了其他（第三方）翻譯軟體/外掛。
>
> 相關介面文件：[Translation | Apple Developer Documentation](https://developer.apple.com/documentation/translation/)

## 使用譯文替換

該功能支援將譯文插入替換區塊內原內容文字。需要注意的是目前（V1.5 版本）為臨時替換功能，即關閉該應用詳情頁面再次打開會重新整理顯示原內容。

![翻譯功能](/app-details/translation.png)
