# 🎤✨ FANDOM-K🎶🌟

코드잇 스프린트 6기 Part 2 과정에서 2팀이 진행한 기초 프로젝트 **Fandom-K** 레포지토리

<br>

## 🏃프로젝트 소개

**아이돌 조공 플랫폼 Fandom-K**

- 리스트 페이지를 통해 아이돌을 후원하고 투표
- 마이 페이지를 통해 좋아하는 아이돌을 선택하여, 좋아하는 아이돌 목록 생성

<img src="https://github.com/sprint6-part2/fandom-k/assets/50625710/294b4bd6-168a-4bef-b66f-96f7003346d6" width=350>
<img src="https://github.com/sprint6-part2/fandom-k/assets/50625710/415183f1-2f40-4c9f-8cbc-87fe20e2bb80" width=350>
<img src="https://github.com/sprint6-part2/fandom-k/assets/50625710/33d61cf5-4430-4c2b-83f3-349451305e16" width=350>
<img src="https://github.com/sprint6-part2/fandom-k/assets/50625710/8bd6ded6-89a5-4f4f-9d01-fda4808ccb20" width=350>

<br>

## 🤔 프로젝트 선정 이유

- 실제로 아이돌을 좋아하는 팀원
- 타 프로젝트와 난이도 차이가 크지 않음
- 어려운 프로젝트에 도전하고 싶은 욕구

<br>

## 📌 주요 기능

- **헤더**

  - 로고 클릭 시, 리스트 페이지로 이동
  - 우측 프로필 클릭 시, 마이 페이지로 이동

- **랜딩 페이지**

  - 초기 시작 페이지
  - "지금 시작하기" 버튼을 눌렀을 때, 리스트 페이지로 이동하고 localStorage 초기화

- **리스트 페이지**
  - 크레딧을 활용하여 아이돌 투표 및 후원할 수 있는 기능 제공
  - 크레딧은 localStorage 에서 관리
  - **내 크레딧**
    - 현재 내 크레딧 확인
    - "충전하기" 클릭 시, 모달 창에서 100, 500, 1000 크레딧 충전
  - **후원을 기다리는 조공**
    - 현재 후원을 할 수 있는 목록을 캐러셀을 통해 확인
    - "후원하기" 클릭 시, 후원 모달 창에서 원하는 양의 크레딧 후원
  - **이달의 차트**
    - 현재 많은 투표를 받은 여자/남자 아이돌을 탭을 통해 순위 확인
    - "차트 투표하기" 클릭 시, 1000 크레딧을 소모하여 원하는 아이돌에게 1표 투표
  - **토스트 창**
    - 크레딧이 충전 되었을 때 나타남
    - 조공을 후원 했을 때 나타남
    - 아이돌에게 투표을 했을 때 나타남
    - 투표할 크레딧 양이 부족했을 때 나타남
- **마이 페이지**
  - 하단 아이돌 목록 선택 후, 제출하기 버튼을 누르면 상단 목록에 추가됨
  - 각 목록은 특정 갯수를 만족하면 무한 슬라이딩 기능 활성화
  - 반대로 특정 갯수를 만족하지 못하는 경우, 슬라이딩 기능 비활성화
  - 모바일/태블릿 간 표시되는 갯수 및 슬라이딩 가능 개수 지정

<br>

## ⚒️ 개발 일정

**⌛2024.05.01 (수) ~ 2024.05.16 (목)**

<img src="https://github.com/sprint6-part2/fandom-k/assets/50625710/2d84cbbe-e5b6-44fe-b0c8-0fc340c7742b">

<br>

## 📝 프로젝트 기간 중 수행 내용

```
1. 기술 스택 채용 및 구현 일정 조율
2. 프로젝트 관련 환경 셋업
3. 역할 분담
4. 프로젝트 구현
  - 공통 컴포넌트
  - 페이지 UI 구현 (mock 데이터 이용)
  - 기능 구현 및 API 연동
5. 발표 및 자료 준비
6. 리팩토링 및 문서화
```

<br>

## 👩🏻‍💻 팀원 소개

<div align="center">

|                                                           **이지현**                                                           |                                                        **채종민**                                                        |                                                                                **이종욱**                                                                                 |                                                         **김혜경**                                                          |                                                        **김고넬료**                                                         |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars.githubusercontent.com/u/98106371?v=4" height=100> <br/> @easyhyun00](https://github.com/easyhyun00) | [<img src="https://avatars.githubusercontent.com/u/86304360?v=4" height=100> <br/> @jaychae](https://github.com/jaychae) | [<img src="https://avatars.githubusercontent.com/u/50625710?s=400&u=c35686c48ce5dc2364427903e3768d79af140bb4&v=4" height=100> <br/> @bersk3r](https://github.com/bersk3r) | [<img src="https://avatars.githubusercontent.com/u/168407977?v=4" height=100> <br/> @i-nooo-2](https://github.com/i-nooo-2) | [<img src="https://avatars.githubusercontent.com/u/132742746?v=4" height=100> <br/> @nelryoS2](https://github.com/nelryoS2) |

</div>

<br>

## 🤝 역할 분담

| <div align="center">이지현</div>                                                                                                                                                                                                | <div align="center">채종민</div>                                                                                                  | <div align="center">이종욱</div>                                                                                          | <div align="center">김혜경</div>                                                                        | <div align="center">김고넬료</div>               |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------ | :----------------------------------------------- |
| <div align="center">프로젝트 초기 세팅 <br> 배포 및 자동화 작업 <br> 애니메이션 적용 <br> 캐러셀, 프로필, 로딩 에러<br> 푸터 컴포넌트<br> 내 크레딧, 후원을 기다리는 조공<br> 모달 UI 및 기능 추가<br> 발표 및 자료 제작 </div> | <div align="center">진행바 및 헤더 <br>로딩 스피너 <br>이 달의 차트 파트<br> 발표 자료 제작 <br> 탭 컴포넌트 및 랜딩 페이지</div> | <div align="center">모달 초기 UI 및 기능 제작<br>배경 및 그라데이션 UI 제작<br>마이 페이지 파트<br>README 파일 수정</div> | <div align="center"> 스타일 초기 셋팅 <br> 버튼 UI 제작 <br> 메타데이터 작성 <br> 발표 자료 제작 </div> | <div align="center"> README 파일 초안 작성</div> |

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

## 🗂️ 폴더 구조

**<img src="https://avatars.githubusercontent.com/u/168407736?s=200&v=4" height=20> <sup>**Fandom-K**<sup>**

```
📦src
 ┣ 📂apis
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
 ┃ ┣ 📂MyCarousel
 ┃ ┣ 📂Profile
 ┣ 📂constants
 ┣ 📂contexts
 ┣ 📂hooks
 ┣ 📂pages
 ┃ ┣ 📂LandingPage
 ┃ ┣ 📂ListPage
 ┃ ┃ ┣ 📂Credit
 ┃ ┃ ┣ 📂Donation
 ┃ ┃ ┣ 📂MonthlyChart
 ┃ ┣ 📂MyPage
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂IdolFavoriteList
 ┃ ┃ ┃ ┣ 📂IdolSelectList
 ┃ ┃ ┃ ┗ 📂Nothing
 ┃ ┣ 📂NotFoundPage
 ┣ 📂styles
 ┣ 📂utils
 ┣ 📜App.jsx
 ┣ 📜main.jsx
 ┗ 📜router.jsx
```

<br>

## 🌲 깃 브랜치 전략

1. 깃 허브 이슈 생성
2. 발행된 이슈 번호 기반으로 `feat-{번호}` 형태로 브랜치를 생성 (예시 : `feat-01`)
3. 로컬에서 작업이 완료 후, pull Request 작성
   - main 브랜치에 변동 사항이 있으면 작업하고 있는 코드에 반영 후 push 진행
   - Conflict가 발생하면, 충돌이 발생된 부분을 Resolve 한 후에 merge 진행
4. Pull Request에 대한 merge를 진행하는 경우, 리뷰어로 설정된 팀원 중 2명 이상의 승인이 완료되면 작성자가 직접 merge를 눌러 main 브랜치로 병합.
   - squash & merge 기능을 사용하여, 여러 개의 커밋을 하나의 커밋으로 통합
   - discord Webhooks을 통해 PR이 생성될 때 알림 오도록 설정

<br>

## 🚨 프로젝트 내 발생한 문제점 / 해결방안

### 문제점

- Github Orginazation에 대한 배포 시 유료 기능 지원 문제 (#32, #35)
- 캐러셀 컴포넌트 내 React-Slick 슬라이드 멈춤 문제 (#51, #65)
- 모달과 페이지 컴포넌트 간의 우선 순위 문제 (#60)
- 페이지 이동 시, 스크롤이 그대로 유지되는 문제 (#82)

### 해결 방안

- Git Action을 활용하여 자동 배포 및 PR 프리뷰 생성 (#32, #35)
- React-Slick 내 설정 내용 중, useEffect가 발생될 떄, 슬라이드를 처음으로 이동하도록 변경 (#51, #65)
- createPortal 을 활용하여 DOM 구조에 종속되지 않도록 구현 (#60)
- 스크롤을 초기화하는 Hook을 구현하여, 각 페이지마다 적용되도록 변경 (#82)

<br>

## 📗 프로젝트 내 잘한 점 / 아쉬운 점

### 😊 잘한 점

#### 코드에 대한 규칙 및 관리에 대한 부분이 뛰어남

- 코드 및 커밋 컨벤션에 대한 초기 설정이 잘 진행
- Github Issue와 PR 기능을 활용하여, 코드에 대한 형상 관리가 수월
- PR 리뷰 및 피드백이 활발하며, 의견에 대한 수용 빠름
- 작업 단위로 분리됨에 따라, 브랜치 간의 충돌이 적음

### 😮‍💨 아쉬운 점

#### 일부 팀원 분들의 프로젝트 참여율이 다른 팀에 비해 저조

- 열심히 참여하지 않는 팀원이 존재하여 다른 팀원이 많은 부담을 짐
- 팀 미팅에 대한 참여도는 높았지만, 그 이후에 소통이 잘 진행되지 못함
