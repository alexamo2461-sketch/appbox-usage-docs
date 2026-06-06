# 번역 기능

앱 상세 페이지에서는 AppStore에서 가져온 앱 소개 및 업데이트 기록 내용을 번역하는 기능을 제공합니다.

**사용 방법**: 앱 상세 페이지 열기 → 앱 소개 또는 업데이트 기록 섹션에서 오른쪽 상단의 번역 버튼을 탭하면 시스템 번역 페이지가 표시됩니다.

> **참고**: 이 기능은 iOS 시스템 기본 Translation API를 사용합니다. 번역을 사용할 수 없는 경우, 기기에 다른(타사) 번역 소프트웨어나 플러그인이 설치되어 있는지 확인하세요.
>
> 관련 API 문서: [Translation | Apple Developer Documentation](https://developer.apple.com/documentation/translation/)

## 번역문으로 바꾸기

이 기능은 번역문을 섹션 내 원본 텍스트에 삽입하여 대체하는 것을 지원합니다. 현재(V1.5)는 임시 대체 기능입니다. 앱 상세 페이지를 닫았다가 다시 열면 원본 내용이 새로고침되어 표시됩니다.

![번역 기능](/app-details/translation.png)
