# 🎤✨ FANDOM-K🎶🌟

**코드잇 스프린터 6기 Part 2 과정 중 2팀이 진행하였던 기초 프로젝트인 Fandom-K에 대한 소스 코드 페이지입니다.**

<br>

## 🏃프로젝트 소개

<img src="https://github.com/sprint6-part2/fandom-k/assets/50625710/294b4bd6-168a-4bef-b66f-96f7003346d6" width=400>
<img src="https://github.com/sprint6-part2/fandom-k/assets/50625710/415183f1-2f40-4c9f-8cbc-87fe20e2bb80" width=400>
<img src="https://github.com/sprint6-part2/fandom-k/assets/50625710/33d61cf5-4430-4c2b-83f3-349451305e16" width=400>
<img src="https://github.com/sprint6-part2/fandom-k/assets/50625710/8bd6ded6-89a5-4f4f-9d01-fda4808ccb20" width=400>

<br>

- **아이돌 팬덤에 대한 조공** 및 **선호하는 아이돌**을 선택하여 **자신만의 팬덤**을 생성해볼 수 있는 <br>"**Fandom-K**" 라는 서비스를 주제로 한 웹 페이지입니다.
- 리스트 페이지를 통해 좋아하는 아이돌에게 조공도 할 수 있고, 투표도 할 수 있습니다.
- 마이 페이지를 통해 자신이 좋아하는 아이돌을 선택하여, 좋아하는 아이돌 목록도 만들 수 있습니다.

<br>

## 🤔 프로젝트 선정 이유

아이돌을 좋아하는 팀원과 어려운 난이도 도전에 대한 욕구가 이 프로젝트를 선택한 이유입니다.

## 📌 주요 기능

- 헤더
  - 헤더의 상단 우측의 아이콘을 클릭 시, 마이페이지로 이동됩니다.
- 랜딩 페이지
  - 다른 페이지로 이동하기 전의 시작 페이지를 보여줍니다.
  - "지금 시작하기" 버튼을 눌렀을 때, 리스트 페이지로 이동됩니다.
  - "지금 시작하기" 버튼을 눌렀을 때, localStorage를 초기화합니다.
- 리스트 페이지
  - 크레딧을 활용하여 아이돌에 대한 순위 투표 및 조공을 위한 후원할 수 있는 기능을 제공합니다.
  - 내 크래딧은 localStorage로 관리합니다.
  - 내 크래딧에 대한 충전은 충전 모달 창을 통해 진행되며, 최대 100, 500, 1000까지 충전할 수 있습니다.
  - 후원을 기다리는 조공 메뉴에서 "후원하기" 버튼을 누르면 후원에 대한 모달 창이 나타납니다.
  - 이 달의 차트 기능을 통해 현재 가장 많은 투표를 받은 여자/남자 아이돌의 순위를 알 수 있습니다.
  - 투표를 할 때마다 1000 크래딧이 소모되머, 원하는 아이돌에게 1표를 투표할 수 있습니다.
  - 하기 3가지 경우에 토스트 창이 나타납니다.
    - 크래딧 충전이 완료되었을 때
    - 등록된 아이돌의 조공 목표가 달성되었을 때
    - 원하는 아이돌에게 투표를 했을 때
- 마이 페이지
  - 선호하는 아이돌을 목록에 추가하여, 자신이 원하는 아이돌 목록을 만들 수 있습니다.
  - 아래의 목록에 있는 아이돌을 선택할 수 있으며 클릭할 때마다 토글이 가능합니다.
  - 제출하기 버튼을 누르면 선택한 아이돌들의 목록이 상단에 선호하는 아이돌에 추가됩니다.
  - 각 목록은 특정 갯수를 만족하면 무한 슬라이딩이 가능하도록 되어 있으며, 반대로 특정 갯수를 만족하지 못하는 경우, 슬라이딩 동작은 비활성화됩니다.

<br>

## ⚒️ 개발 기간

### ⌛2024.05.01 (수) ~ 2024.05.16 (목)

#### 📝프로젝트 기간 중 수행 내용

```js
1. 기술 스택 채용 및 구현 일정 조율
2. 프로젝트 관련 환경 셋업
3. 역할 분담
- 공통 컴포넌트
- 페이지 UI 구현 (mock 데이터 이용)
- 기능 구현 및 API 연동
4. 아이디어 발표
5. 발표 및 자료 준비
6. 리팩토링 및 문서화
```

<br>

## 💻 팀원 소개

<div align="center">

|                                                           **이지현**                                                           |                                                        **채종민**                                                        |                                                                                **이종욱**                                                                                 |                                                         **김혜경**                                                          |                                                        **김고넬료**                                                         |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars.githubusercontent.com/u/98106371?v=4" height=100> <br/> @easyhyun00](https://github.com/easyhyun00) | [<img src="https://avatars.githubusercontent.com/u/86304360?v=4" height=100> <br/> @jaychae](https://github.com/jaychae) | [<img src="https://avatars.githubusercontent.com/u/50625710?s=400&u=c35686c48ce5dc2364427903e3768d79af140bb4&v=4" height=100> <br/> @bersk3r](https://github.com/bersk3r) | [<img src="https://avatars.githubusercontent.com/u/168407977?v=4" height=100> <br/> @i-nooo-2](https://github.com/i-nooo-2) | [<img src="https://avatars.githubusercontent.com/u/132742746?v=4" height=100> <br/> @nelryoS2](https://github.com/nelryoS2) |

</div>

<br>

## 💻 개발 환경

- **Version** : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/30px-Node.js_logo.svg.png"> **20.12.2 (NPM)**
- **IDE** : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/20px-Visual_Studio_Code_1.35_icon.svg.png"> **Visual Studio Code**
- **Language**: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/20px-Unofficial_JavaScript_logo_2.svg.png"> **ECMAScript 2023**
- **Base Library** : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/20px-React-icon.svg.png"> **React 18.2.0**
- **Style** : <img src="https://sass-lang.com/assets/img/logos/logo.svg" height=20> **Module.scss** / <img src="https://camo.githubusercontent.com/3bcd317876dc122d3055613c7f5450134050d0c5a8683807c6f2e8e2178737b0/68747470733a2f2f6672616d657275736572636f6e74656e742e636f6d2f696d616765732f34386861395a52396f5a51475136675a38595566456c50335430412e706e67" height=17> **Framer Motion**
- **CI/CD** : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/40px-Git-logo.svg.png"> / <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/20px-Font_Awesome_5_brands_github.svg.png"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/GitHub_logo_2013.svg/50px-GitHub_logo_2013.svg.png">
- **API** : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Swagger-logo.png/20px-Swagger-logo.png"> **Swagger**
- **Network** : <img src="https://camo.githubusercontent.com/e56453737f3695a5d21d1393764ac1bc89032f5f4d2fc9fa486c980859347275/68747470733a2f2f6178696f732d687474702e636f6d2f6173736574732f6c6f676f2e737667" height=10 >
- **Build** : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/20px-Vitejs-logo.svg.png"> **Vite**
- **Distribute** : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/70px-Vercel_logo_black.svg.png">
- **Idea** : <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/80px-Discord_logo.svg.png"> / <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/20px-Notion-logo.svg.png"> **Notion**
- **Convention**
  - <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/20px-ESLint_logo.svg.png"> <sup>**ESLint**</sup> <sup>(<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/50px-Airbnb_Logo_B%C3%A9lo.svg.png">)</sup>
  - <img src="https://prettier.io/icon.png" height=20> <sup>**Prettier**</sup>
  - <img src="https://gitmoji.dev/static/favicon-32x32.png" height=20> <sup>**gitmoji**</sup>
- **Additional Library**
  - **React Slick**
  - **React Portal**
  - **React Router DOM**
- **SVG** : **[SVG Component](https://www.svgviewer.dev/)**

<br>

## 역할 분담

| <div align="center">이지현</div>                                                                                                                                                                                                | <div align="center">채종민</div>                                                                                                  | <div align="center">이종욱</div>                                                                                          | <div align="center">김혜경</div>                                                                        | <div align="center">김고넬료</div>               |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------ | :----------------------------------------------- |
| <div align="center">프로젝트 초기 세팅 <br> 배포 및 자동화 작업 <br> 애니메이션 적용 <br> 캐러셀, 프로필, 로딩 에러<br> 푸터 컴포넌트<br> 내 크레딧, 후원을 기다리는 조공<br> 모달 UI 및 기능 추가<br> 발표 및 자료 제작 </div> | <div align="center">진행바 및 헤더 <br>로딩 스피너 <br>이 달의 차트 파트<br> 발표 자료 제작 <br> 탭 컴포넌트 및 랜딩 페이지</div> | <div align="center">모달 초기 UI 및 기능 제작<br>배경 및 그라데이션 UI 제작<br>마이 페이지 파트<br>README 파일 수정</div> | <div align="center"> 스타일 초기 셋팅 <br> 버튼 UI 제작 <br> 메타데이터 작성 <br> 발표 자료 제작 </div> | <div align="center"> README 파일 초안 작성</div> |

## 폴더 구조

**<img src="https://avatars.githubusercontent.com/u/168407736?s=200&v=4" height=20> <sup>**Fandom-K**<sup>**

```
📦src
 ┣ 📂apis
 ┃ ┣ 📜api.js
 ┃ ┣ 📜getCharts.js
 ┃ ┣ 📜getDonations.js
 ┃ ┣ 📜getIdolData.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜postVotes.js
 ┃ ┗ 📜putContribute.js
 ┣ 📂assets
 ┃ ┣ 📂icons
 ┃ ┗ 📂images
 ┣ 📂components
 ┃ ┣ 📂Background
 ┃ ┣ 📂Carousel
 ┃ ┣ 📂CustomButton
 ┃ ┣ 📂Footer
 ┃ ┣ 📂Header
 ┃ ┣ 📂LoadingError
 ┃ ┣ 📂Modal
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂ModalHeader
 ┃ ┃ ┃ ┗ 📂ModalMobileHeader
 ┃ ┣ 📂MyCarousel
 ┃ ┣ 📂Profile
 ┃ ┗ 📂Sample
 ┃ ┃ ┗ 📜Sample.jsx
 ┣ 📂constants
 ┃ ┣ 📜carouselSetting.js
 ┃ ┣ 📜credit.js
 ┃ ┣ 📜endpoint.js
 ┃ ┣ 📜errorMessage.js
 ┃ ┣ 📜screenSizes.js
 ┃ ┗ 📜tabTypes.js
 ┣ 📂contexts
 ┃ ┗ 📜CreditContext.jsx
 ┣ 📂hooks
 ┃ ┣ 📜hook.js
 ┃ ┣ 📜useLoad.js
 ┃ ┣ 📜useModal.js
 ┃ ┣ 📜useScrollToTop.js
 ┃ ┣ 📜useSetNumberOfItemsToShow.js
 ┃ ┗ 📜useTitle.js
 ┣ 📂pages
 ┃ ┣ 📂LandingPage
 ┃ ┃ ┣ 📂components
 ┃ ┣ 📂ListPage
 ┃ ┃ ┣ 📂Credit
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┗ 📂CreditModal
 ┃ ┃ ┣ 📂Donation
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📂Card
 ┃ ┃ ┃ ┃ ┣ 📂DonationModal
 ┃ ┃ ┃ ┃ ┗ 📂ProgressBar
 ┃ ┃ ┃ ┣ 📜carouselSetting.js
 ┃ ┃ ┣ 📂MonthlyChart
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📂ChartElement
 ┃ ┃ ┃ ┃ ┣ 📂ChartModal
 ┃ ┃ ┃ ┃ ┣ 📂IdolChart
 ┃ ┃ ┃ ┃ ┣ 📂MoreButton
 ┃ ┃ ┃ ┃ ┗ 📂Tab
 ┃ ┣ 📂MyPage
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂IdolFavoriteList
 ┃ ┃ ┃ ┃ ┣ 📜carouselSettings.js
 ┃ ┃ ┃ ┣ 📂IdolSelectList
 ┃ ┃ ┃ ┃ ┣ 📜carouselSettings.js
 ┃ ┃ ┃ ┗ 📂Nothing
 ┃ ┣ 📂NotFoundPage
 ┃ ┗ 📂TestPage
 ┣ 📂styles
 ┃ ┣ 📜color.scss
 ┃ ┣ 📜font.scss
 ┃ ┣ 📜index.scss
 ┃ ┣ 📜normalize.scss
 ┃ ┗ 📜variable.scss
 ┣ 📂utils
 ┃ ┣ 📜debounce.js
 ┃ ┣ 📜getTimeLeft.js
 ┃ ┣ 📜input.js
 ┃ ┣ 📜localStorage.js
 ┃ ┣ 📜numberWithCommas.js
 ┃ ┣ 📜sortItems.js
 ┃ ┣ 📜splitItems.js
 ┃ ┗ 📜utils.js
 ┣ 📜App.jsx
 ┣ 📜main.jsx
 ┗ 📜router.jsx
```

<br>

## 깃 브랜치 전략

1. 깃 허브 이슈 번호 발생 시, 자동으로 생성합니다.
2. 발행된 번호 기반으로 `feat-{번호}` 형태로 브랜치를 생성합니다. (예시 : `feat-01`)
3. 로컬에서 작업이 완료되면 commit & push를 통해 원격 레포지토리로 전달한 후,
   pull Request를 작성합니다.
   a. push를 진행하기 이전에 main 브랜치에 변동 사항이 있어 작업하고 있는 코드에 반영 후 push를 진행합니다.
   b. Conflict가 발생되면, 충돌이 발생된 부분을 Resolve한 후에 merge를 진행합니다.
4. Pull Request에 대한 merge를 진행하는 경우, 리뷰어로 설정된 팀원 중 2명 이상의 승인이 완료되면 작성자가 직접 merge를 눌러 main 브랜치로 병합합니다.
   a. squash & merge 기능을 사용하여, 여러 개의 커밋을 하나의 커밋으로 통합되도록 하였습니다.
   b. 코드 리뷰를 올린 후, discord를 통해 팀원에게 질의한 후 OK가 되면 병합을 진행함에 따라, main 브랜치 간 충돌이 최소화하도록 하였습니다.
   c. discord에서 생성한 hook을 통해 PR이 생성될 때 알림이 나타나도록 설정하였습니다.

<br>

## 프로젝트 내 발생한 문제점 / 해결방안

### 문제점

- Github Orginazation에 대한 배포 시 유료 기능 지원 문제 (#32, #35)
- 캐러셀 컴포넌트 내 React-Slick 슬라이드 멈춤 문제 (#51, #65)
- 모달과 페이지 컴포넌트 간의 우선 순위 문제 (#60)
- 페이지 이동 시, 스크롤이 그대로 유지되는 문제 (#82)

### 해결 방안

- Git Action을 활용하여 개인 레포지토리로 fork한 후, 배포하도록 변경 (#32, #35)
- React-Slick 내 설정 내용 중, useEffect가 발생될 떄, 슬라이드를 처음으로 이동하도록 변경 (#51, #65)
- 모달 포탈을 활용하여 DOM 구조에 종속되지 않도록 구현 (#60)
- 스크롤을 초기화하는 Hook을 구현하여, 각 페이지마다 적용되도록 변경 (#82)

<br>

## 🪛 프로젝트 내 잘한 점 / 아쉬운 점

### 😊 잘한 점

#### 코드에 대한 규칙 및 관리에 대한 부분이 뛰어났습니다.

- 코드 및 커밋 컨벤션에 대한 초기 설정이 잘 진행되었습니다.
- Github Issue와 PR 기능을 활용하여, 코드에 대한 형상 관리가 수월했습니다.
- PR 리뷰 및 피드백이 활발하며, 의견에 대한 수용도 빨랐습니다.
- 작업 단위로 분리됨에 따라, 브랜치 간의 충돌이 적었습니다.

### 😮‍💨 아쉬운 점

#### 일부 팀원 분들의 프로젝트 참여율이 다른 팀에 비해 저조했습니다.

- 열심히 참여하지 않는 팀원이 존재하여 다른 팀원이 많은 부담을 지게 되었습니다.
- 미팅에 대한 참여도는 높았지만, 그 이후에 소통이 잘 진행되지 못했습니다.
