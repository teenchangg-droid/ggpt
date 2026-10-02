# 40일 단어

2,428개 영어 단어를 40일 동안 학습하는 모바일/아이패드용 단어 암기 PWA입니다.

## GitHub Pages 업로드

저장소 루트에 아래 파일을 그대로 올립니다.

- `index.html` — 앱 본체
- `manifest.webmanifest` — 홈 화면/PWA 설정
- `sw.js` — 오프라인 캐시
- `icon-192.png` — PWA 아이콘
- `icon-512.png` — PWA 아이콘
- `apple-touch-icon.png` — iPhone/iPad 홈 화면 아이콘
- `favicon.svg` — 브라우저 파비콘

GitHub 저장소의 **Settings → Pages**에서 `Deploy from a branch`를 선택하고, 앱 파일이 있는 브랜치/폴더를 지정하면 됩니다.

## 학습 데이터

단어 데이터는 업로드된 `words(3).js`의 2,428개 항목을 앱에 포함한 형태입니다.

## 저장 방식

학습 기록은 기본적으로 사용 중인 브라우저의 `localStorage`에 저장됩니다. 설정 화면에서 JSON으로 내보내고 다른 기기에서 불러올 수 있습니다.
