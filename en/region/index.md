# <font style="color:rgb(31, 31, 31);">How App Regions Work</font>
**App Region**<font style="color:rgb(31, 31, 31);"> refers to: which country's or region's App Store AppBox uses when </font>**querying app information such as descriptions and icons**<font style="color:rgb(31, 31, 31);">.</font>

<font style="color:rgb(31, 31, 31);">It helps you:</font>

**Find apps available in that region**<font style="color:rgb(31, 31, 31);">, </font>**display names and icons based on that region**<font style="color:rgb(31, 31, 31);">, and </font>**perform unified region queries in batches**<font style="color:rgb(31, 31, 31);">.</font>

:::info
**Note:**<font style="color:rgb(31, 31, 31);"> Availability, translated names, and other information are determined by the App Store of the selected region. If an app is reported as unavailable in that region, this is a result returned by the store itself and does not mean your collection has been lost.</font>

:::

## <font style="color:rgb(31, 31, 31);">When You Might Use It</font>
+ **Cannot find an app by name**<font style="color:rgb(31, 31, 31);"> → Switch to another region and search again (some apps are only available in specific stores).  </font>
+ **Apps with identical names are hard to distinguish**<font style="color:rgb(31, 31, 31);"> → Use regions to differentiate displayed information.  </font>
+ **The link already contains a region**<font style="color:rgb(31, 31, 31);"> → AppBox will </font>**prioritize identifying the region from the link**<font style="color:rgb(31, 31, 31);"> (see below).  </font>
+ **Multi-country app lists**<font style="color:rgb(31, 31, 31);"> → Use </font>**Filter · Region**<font style="color:rgb(31, 31, 31);"> to view them, or </font>**batch modify regions**<font style="color:rgb(31, 31, 31);"> and refresh afterward.</font>

## <font style="color:rgb(31, 31, 31);">Managing App Regions in “Settings”</font>
**Settings → Apps → App Region**

<!-- 这是一张图片，ocr 内容为： -->
![](../../assets/region/region-settings.png)

<font style="color:rgb(31, 31, 31);">This is the </font>**“Region Query List”**<font style="color:rgb(31, 31, 31);">: the enabled countries or regions. The </font>**top-to-bottom order**<font style="color:rgb(31, 31, 31);"> represents priority (higher items are queried first; this order is also referenced when multiple regions are attempted).</font>

| <font style="color:rgb(31, 31, 31);">Action</font> | <font style="color:rgb(31, 31, 31);">Description</font> |
| --- | --- |
| **Add Region** | <font style="color:rgb(31, 31, 31);">Tap “Add Region” and choose from the directory. You can add </font>**up to 10 regions**<font style="color:rgb(31, 31, 31);">; a prompt will appear when the limit is reached.</font> |
| **Delete** | **Swipe left**<font style="color:rgb(31, 31, 31);"> on a row to delete it. At least </font>**1 region must remain**<font style="color:rgb(31, 31, 31);">.</font> |
| **Sort** | <font style="color:rgb(31, 31, 31);">Tap </font>**Sort**<font style="color:rgb(31, 31, 31);"> in the top-right corner, drag items into position, then tap </font>**Done**<font style="color:rgb(31, 31, 31);"> to save. The </font>**topmost**<font style="color:rgb(31, 31, 31);"> region is generally used as the default priority (especially when the region cannot be inferred from a link).</font> |
| **List Empty** | <font style="color:rgb(31, 31, 31);">The page will prompt you to select regions through “Add Region”.</font> |


### <font style="color:rgb(31, 31, 31);">Difference from the “Select Region” List</font>
<font style="color:rgb(31, 31, 31);">In places such as </font>**Add App**<font style="color:rgb(31, 31, 31);"> and </font>**App Details**<font style="color:rgb(31, 31, 31);">, the popup </font>**“Select Region”**<font style="color:rgb(31, 31, 31);"> list generally only shows the regions that you have already enabled in Settings (that is, the “Region Query List” above), making quick switching more convenient.</font>

<font style="color:rgb(31, 31, 31);">The </font>**Add Region**<font style="color:rgb(31, 31, 31);"> option in Settings, on the other hand, lets you choose from the </font>**full region directory**<font style="color:rgb(31, 31, 31);"> in order to expand the enabled list.</font>

## <font style="color:rgb(31, 31, 31);">App Store Links and Regions: Recognition Rules</font>
<font style="color:rgb(31, 31, 31);">When you paste or share an </font>**App Store app link**<font style="color:rgb(31, 31, 31);">, AppBox will try to read the </font>**country or region**<font style="color:rgb(31, 31, 31);"> from the link itself. For example:</font>

+ <font style="color:rgb(31, 31, 31);">If the link contains something like </font>`<font style="color:rgb(31, 31, 31);">…/cn/app/…</font>`<font style="color:rgb(31, 31, 31);"> or </font>`<font style="color:rgb(31, 31, 31);">…/us/app/…</font>`<font style="color:rgb(31, 31, 31);"> — usually </font>**two lowercase letters**<font style="color:rgb(31, 31, 31);"> — it will generally be recognized as the corresponding region (for example, cn → Mainland China storefront, us → United States storefront).</font>

| <font style="color:rgb(31, 31, 31);">Situation</font> | <font style="color:rgb(31, 31, 31);">What Happens</font> |
| --- | --- |
| **The region can be identified from the link** | <font style="color:rgb(31, 31, 31);">In </font>**Add App → App Link**<font style="color:rgb(31, 31, 31);">, the “Country or Region” row will usually </font>**not appear**<font style="color:rgb(31, 31, 31);"> (because the region has already been specified by the link). Changing the region list order in Settings </font>**does not override**<font style="color:rgb(31, 31, 31);"> this link-priority behavior.</font> |
| **The region cannot be identified from the link** | <font style="color:rgb(31, 31, 31);">A </font>**“Country or Region”**<font style="color:rgb(31, 31, 31);"> option will appear (for example, “Mainland China (cn)”), using the current selection maintained in your Settings.</font> |
| **Pasting multiple links at once** | <font style="color:rgb(31, 31, 31);">If the entire text block </font>**cannot**<font style="color:rgb(31, 31, 31);"> be parsed as a single region-specific link, the “Country or Region” option will usually </font>**be displayed**<font style="color:rgb(31, 31, 31);">. Multiple links will </font>**share**<font style="color:rgb(31, 31, 31);"> the region strategy selected this time.</font> |


**In short:**<font style="color:rgb(31, 31, 31);"> If the link clearly specifies a region, AppBox follows the link. If not, AppBox follows the region selected in your settings.</font>

## <font style="color:rgb(31, 31, 31);">Specifying a Region When Adding an App</font>
<!-- 这是一张图片，ocr 内容为： -->
![](../../assets/region/add-app-region.png)

## <font style="color:rgb(31, 31, 31);">Viewing and Modifying Regions in the App Details Page</font>
<!-- 这是一张图片，ocr 内容为： -->
![](../../assets/region/app-detail-region.png)

### <font style="color:rgb(31, 31, 31);">Viewing the Region</font>
<font style="color:rgb(31, 31, 31);">Open </font>**“More Information”**<font style="color:rgb(31, 31, 31);"> in the app details page. One of the rows, </font>**“Region”**<font style="color:rgb(31, 31, 31);">, displays the storefront name corresponding to the current store code for this saved app.</font>

### <font style="color:rgb(31, 31, 31);">Modifying the Region (Store-Sourced Apps Only)</font>
1. <font style="color:rgb(31, 31, 31);">In the </font>**“⋯”**<font style="color:rgb(31, 31, 31);"> menu at the top-right corner of the app details page, tap </font>**“Modify Region”**<font style="color:rgb(31, 31, 31);">.  </font>
2. <font style="color:rgb(31, 31, 31);">Select any item in </font>**“Select Region”**<font style="color:rgb(31, 31, 31);"> and confirm.  </font>
3. <font style="color:rgb(31, 31, 31);">AppBox will </font>**re-query the App Store**<font style="color:rgb(31, 31, 31);"> to check whether the app exists in the newly selected region.  </font>
    - **Success:**<font style="color:rgb(31, 31, 31);"> The app name, icon, and other information will be updated (if provided by the store), and a </font>**Modification Successful**<font style="color:rgb(31, 31, 31);"> message will appear.  </font>
    - **Failure:**<font style="color:rgb(31, 31, 31);"> For example, if the app is unavailable in the selected store and the message </font>**“This app is not available in the selected region’s App Store”**<font style="color:rgb(31, 31, 31);"> appears, the region will automatically </font>**revert to the previous value**<font style="color:rgb(31, 31, 31);"> to avoid leaving invalid data.</font>

> **Custom Apps**<font style="color:rgb(31, 31, 31);"> currently do not display the </font>**“Modify Region”**<font style="color:rgb(31, 31, 31);"> option because their information is manually provided by you.</font>
>

## <font style="color:rgb(31, 31, 31);">Managing App Regions Within an App Collection</font>
<!-- 这是一张图片，ocr 内容为： -->
![](../../assets/region/collection-region.png)

### <font style="color:rgb(31, 31, 31);">Batch Modify Regions</font>
<font style="color:rgb(31, 31, 31);">When you have </font>**multiple store-sourced apps selected**<font style="color:rgb(31, 31, 31);"> within the </font>**same app collection**<font style="color:rgb(31, 31, 31);">, you can switch them to the same region at once and attempt to refresh their displayed information.</font>

#### <font style="color:rgb(31, 31, 31);">Steps</font>
1. <font style="color:rgb(31, 31, 31);">Open an </font>**App Collection**<font style="color:rgb(31, 31, 31);">.  </font>
2. <font style="color:rgb(31, 31, 31);">Tap the </font>**“⋯”**<font style="color:rgb(31, 31, 31);"> button in the top-right corner → </font>**“Select Apps”**<font style="color:rgb(31, 31, 31);">.  </font>
3. <font style="color:rgb(31, 31, 31);">Select multiple apps.  </font>
4. <font style="color:rgb(31, 31, 31);">Tap </font>**“Region”**<font style="color:rgb(31, 31, 31);"> (globe icon) in the bottom toolbar.  </font>
5. <font style="color:rgb(31, 31, 31);">Choose the target region in </font>**“Select Region”**<font style="color:rgb(31, 31, 31);">. The app will attempt to retrieve store information one by one.  </font>
6. <font style="color:rgb(31, 31, 31);">After completion, you can view the </font>**“Batch Region Modification Results”**<font style="color:rgb(31, 31, 31);"> page, where successful, failed, or skipped apps are listed separately.</font>

### <font style="color:rgb(31, 31, 31);">Filtering (Show Only Specific Regions)</font>
<font style="color:rgb(31, 31, 31);">In the app collection details page, tap the </font>**Filter**<font style="color:rgb(31, 31, 31);"> icon in the top-right corner → form field </font>**“Region”**<font style="color:rgb(31, 31, 31);"> → select multiple regions to display only matching apps in the current collection. The selectable regions are limited to the regions that actually appear within the current collection.</font>

## <font style="color:rgb(31, 31, 31);">“Apple Data” in Data Import</font>
**Settings → Data Import → Apple Data**<font style="color:rgb(31, 31, 31);"> allows you to select 1–10 regions before starting the import. App information will be retrieved automatically according to the order of the list until a match is found or all strategies are exhausted.</font>

<font style="color:rgb(31, 31, 31);">Note that selecting too many regions will significantly slow down the import process. It is recommended to select only 1–3 regions.</font>

