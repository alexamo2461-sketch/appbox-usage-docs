# Release Notes

## V1.7.3

1. Collection filtering now supports keyword search for more efficient app discovery
2. New image recognition import feature — quickly add apps via screenshots
3. Optimized system share extension, now supports syncing app ratings and tag information
4. Collection management now supports multi-select delete for easier organization
5. Optimized Apple Data import flow, now supports background import
6. Fixed an issue where the edit description and tag buttons were unusable after entering app details from the search page

## V1.7.2

1. New app card view, supports configurable display of tags, ratings, and description fields
2. Settings — All Apps page now supports tap to jump directly to App Store
3. Optimized app name title display in icon view on collection detail page
4. Optimized app preview section on app page, supports adding app tags
5. App detail page now shows which collections the app belongs to
6. Added refresh button on collection share page
7. Tag data optimization: supports import, export, and sync
8. App region optimization: removed auto (region_auto) region
9. Collection filtering optimization: region filter now shows actual app regions in the current collection

## V1.7

1. Fully adapted for iOS 26, page interaction restructured
2. New app region modification and batch modification features
3. New refresh function for apps within a collection — fetches the latest app name and icon
4. New app tags and tag management, supports searching, viewing, syncing, and editing tags
5. New filtering within collections, supports filtering by platform, region, and tags
6. New support for importing App Store download records from Apple Data & Privacy
7. Supports display configuration for collection and app detail pages

## V1.6

> Release date: 2026-02-14

1. Data sync restructured for greater stability, now supports syncing custom apps
2. Homepage grid view supports custom sorting
3. Collection sharing feature — export, share, and import collections via QR code cards
4. Data export now includes custom sort order fields for collections
5. When adding apps from the homepage, new collections can be created on the collection selection page
6. Import records: detailed import history for troubleshooting import issues
7. Optimized app link recognition entry, supports both single and batch adding
8. Collection descriptions and app descriptions are hidden when empty and auto-collapsed when too long
9. Supports copying body text such as app descriptions from the app detail page
10. Fixed frame drops with too many collections on the homepage and lag when switching pages
11. App icon refresh: supports updating existing app icons
12. System share extension page app description limit changed to 2000 characters

## V1.5.1 (Not on App Store)

> Build date: 2026-01-18

**1. Changes**

- Rewrote data upgrade logic. If a data upgrade prompt appears after updating, rest assured it is safe to proceed; the duration depends on the number of apps and may take a few minutes
- Removed the floating add button at the bottom right of the collection detail page, merged it with batch add into the "Add/Batch Add" menu at the top right
- Fixed lag and frame drops when switching between too many collections on the homepage
- System share extension page app description limit changed to 2000 characters

**2. Additions**

- Adding apps from homepage: new collections can be created on the collection selection page
- Adding apps from homepage: a feedback prompt now appears after successful addition
- Adding apps from homepage: the app link tab supports single/batch link recognition and viewing recognition history
- Data import/export: supports importing and exporting custom sort order fields for collections
- Data import: record viewing for troubleshooting import issues
- Collection descriptions and app descriptions auto-collapse when too long
- Supports copying body text such as app descriptions from the app detail page

## V1.5

> Date: 2025-12-26

**0. Important Notes:**

- Compared to V1.4, this version upgrades the data model, so a data update operation is required. A prompt will appear automatically — simply confirm to proceed
- After updating, you can check the update status in Settings → Data Update → Update History. For failed data, manually delete and re-add
- For users who still haven't recovered old data, use the Developer Tools to attempt recovery. Instructions can be found in Settings → User Guide → FAQ

**1. Changes:**

- Supports importing links for Mac-exclusive software
- App description character limit increased from 200 to 2000 characters
- Homepage layout adjusted with a new bottom action bar; sorting and view switching moved to the top-right action menu
- Subscription information is now synced when copying/moving apps

**2. New Features:**

- Collection sorting: sort by name (A-Z and Z-A) or creation time (newest-oldest and oldest-newest)
- Custom import: users can fill in icon, name, source, and other information
- Search and add apps directly by name within AppBox
- App detail page adds a "More Info" section showing import time, region, and source link
- Data export now exports a complete compressed package containing app icon files and a JSON file
- App detail page shows the app's App ID; translation buttons added to the app description and update history sections
- App region selection: supports selecting a region when adding new apps, and supports region sorting (Settings → App Regions)
- Search results page adds long-press menus (edit, copy/move, delete) for collections and apps
- Provides complete templates and field descriptions, supports batch import via template files
- Icon caching: downloads app icons locally for offline display
- Supports editing app descriptions during import (supported in both the homepage add module and collection detail page)
- Added Developer Tools for recovering old version databases

**3. Other:**

- Optimized the entire app import logic: AppBox extracts numeric IDs (e.g., `id1234567890`) from links and queries the App Store for app information. The region selection strategy is as follows: priority is given to the region code explicitly present in the link (e.g., `/cn/`, `/us/`); if the link has no region code, the app reads the region list in Settings → App Regions and iterates through it from top to bottom. "Universal" means it is not tied to a specific country/region but is automatically inferred by Apple's server based on the request environment (mostly the US region). For details, please refer to Settings → User Guide → FAQ → App Link Recognition Rules and Region Feature Usage

## V1.4

## V1.01

> Date: 2025-11-06

**1. New Features**

1. New subscription tracking: custom subscription start/end dates, price, currency, and subscription info — must be manually enabled in Settings → App Properties
2. New multi-language support: switch languages in Settings → Language. Currently supports Simplified Chinese, Traditional Chinese, English, German, French, Japanese, Korean, and Turkish — 8 languages total, with more being adapted
3. New support for forward and reverse sorting of apps within a collection
4. Optimized search page, now supports searching app descriptions

**2. Bug Fixes**

1. Fixed inconsistency between the collection list order in the system share extension and the main app
2. Improved system share extension stability, fixed issues importing apps when the main app is not running in the background

## V1.0

> Date: 2025-10-28

**1. New Features**

The first official release, currently supporting:

1. Create collections to categorize and bookmark apps
2. Import App Store links within collections for automatic app recognition, with list and grid views
3. Add custom notes and custom ratings for collections and apps
4. Sort collections, set colors, switch between multiple card views
5. Copy and move apps between collections
6. Batch import app links
7. iCloud sync for collections, notes, and ratings; data import/export as JSON files
8. View App Store app information within the app, one-tap jump to the corresponding App Store page
9. Generate cards to share collections (currently 3 styles)
10. Switch theme modes (light, dark, system) and accent colors

**2. Bug Fixes**

1. Fixed apps in collection detail page being sorted by creation time
2. Fixed iCloud sync issues: rewrote data sync from auto-sync to manual overwrite sync
3. Fixed delayed response when switching theme modes
4. Fixed popup window height issue on the macOS settings page
5. Added multi-select support in system share extension for adding to multiple collections
6. Added long-press menus (copy, move, edit) for apps on the collection detail page
7. Added data reset operation, supports clearing local/cloud data
8. Added local/cloud data history backup, keeps the last 10 complete records that can be restored locally
9. Added adaptive app layout in icon view on macOS based on window width
10. Added supported platforms and in-app purchase info to the app detail page
