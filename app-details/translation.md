# 翻译功能

应用详情页面提供翻译功能，可对来自于 AppStore 的应用介绍、更新记录板块的内容进行翻译。

**使用方法**：打开应用详情页面 → 在应用介绍和更新记录板块中点击右上角翻译按钮，即可弹出系统翻译页面。

> **注意**：该功能使用 iOS 系统自带的 Translation API，如果翻译不可用，请检查设备是否安装使用了其他（第三方）翻译软件/插件。
>
> 相关接口文档：[Translation | Apple Developer Documentation](https://developer.apple.com/documentation/translation/)

## 使用译文替换

该功能支持将译文插入替换板块内原内容文字。需要注意的是目前（V1.5 版本）为临时替换功能，即关闭该应用详情页面再次打开会刷新显示原内容。

![翻译功能](/app-details/translation.png)
