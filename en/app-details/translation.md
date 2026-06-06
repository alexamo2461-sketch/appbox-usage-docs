# Translation Feature

The app details page provides a translation feature for content fetched from the App Store, including the description and update history sections.

**How to use**: Open the app details page → Tap the translate button in the top-right corner of the description or update history section to open the system translation page.

> **Note**: This feature uses the iOS system's built-in Translation API. If translation is unavailable, please check if your device has other (third-party) translation software/plugins installed.
>
> Related API documentation: [Translation | Apple Developer Documentation](https://developer.apple.com/documentation/translation/)

## Replace with Translation

This feature supports inserting the translated text to replace the original content in the section. Please note that currently (V1.5) this is a temporary replacement — closing and reopening the app details page will refresh and display the original content.

![Translation Feature](/app-details/translation.png)
