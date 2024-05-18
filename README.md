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

## 💻 기술 스택
- ### Environment
<img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> 
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> 
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/github_actions-2088ff?style=for-the-badge&logo=githubactions&logoColor=white">

- ### Config
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">
<img src="https://img.shields.io/badge/vite-646cff?style=for-the-badge&logo=vite&logoColor=white">


- ### Development
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">  
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/css_modules-000000?style=for-the-badge&logo=cssmodules&logoColor=white"/>
<img src="https://img.shields.io/badge/scss-CC6699?style=for-the-badge&logo=sass&logoColor=white"/>
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/>
<img src="https://img.shields.io/badge/framer-0055FF?style=for-the-badge&logo=framer&logoColor=white">
<img src="https://img.shields.io/badge/react_router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">

- ### Deploy
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white"/>

- ### Collaboration Tools
<img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"/> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"/>   <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white"/> 

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
 ┗ 📂utils
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

- Github Orginazation에 대한 배포 시 유료 기능 지원 문제 ([#32](#32), #35)
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
