# Why do some apps have no screenshots on their details page?

On the app details page, some apps do not have screenshots displayed. This is not a network issue nor a bug in AppBox. Rather, the information returned from the App Store API simply does not include screenshots for those apps. In simple terms, Apple does not provide them, so they are not shown (I also don't know why the App Store app displays screenshots while the developer API does not return them).

Based on my testing, the pattern is: for niche apps or apps with very few downloads, screenshots are not returned; mainstream apps all have screenshots.
