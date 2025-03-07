# 2팀

[📄 팀 협업 문서](https://arrow-season-125.notion.site/ec0da2984aee44b29e332e18b85d12db?v=c951e5190e594c56aae608fd15b9420b&pvs=4)

[📄 BE 레포지토리](https://github.com/juyeongeun/1-study-2-BE)

<br><br>

## 🍀 팀원 구성

<table height="250px">
  <tbody>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/677f13bf-29a4-4cc8-8b39-ac3469ddd9a8" width="150px;" alt="강범준"/><br />
        <b>FS 팀장: 강범준</b><br />
        <sub><a href="https://github.com/kangbeomjoon">GitHub 프로필</a></sub>
      </td>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/9946a636-9764-43db-bf8b-02397f897d54" width="150px;" alt=""/><br />
        <b>FS 팀원: 김대건</b><br />
        <sub><a href="https://github.com/TradeOffEgoist">GitHub 프로필</a></sub>
      </td>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/ed5b95c4-4e15-43d7-bf6f-6a5813c7ac88" width="150px;" alt=""/><br />
        <b>FS 팀원: 김효인</b></sub><br />
        <sub><a href="https://github.com/mozzi34">GitHub 프로필</a></sub>
      </td>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/f8555d80-ed28-469c-b6c2-8b253ec0e908" width="150px;" alt="주영은"/><br />
        <b>FS 팀원: 주영은</b></sub><br />
        <sub><a href="https://github.com/juyeongeun">GitHub 프로필</a></sub>
      </td>
     <tr/>
  <tbody/>
<table/>

<br><br>

## 📜 프로젝트 소개

- **제목**: 공부의 숲
- **소개**: 개인 공부 관리 및 커뮤니티 서비스
  - 최근 몇 년간 올바른 습관의 정착에 대한 사람들의 관심이 높아지고 있고, 그중에서도 ‘조금씩 습관을 들이기’에 대한 이론이 각광받고 있습니다. 따라서 개인이 학습할 내용을 정리할 스터디를 만들고, 하루동안 수행할 공부를 관리하며 집중 타이머 기능을 제공해 잘 수행할 때마다 포인트를 제공하는 서비스 제작합니다.

<br><br>

## 🛠️ 기술 스택

### Frontend

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML&logoColor=white"> <img src="https://img.shields.io/badge/Css-1572B6?style=for-the-badge&logo=Css&logoColor=white">

### Backend

<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=Prisma&logoColor=white">

### Database

<img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=PostgreSQL&logoColor=white">

### 기타 Tool

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"> <img src="https://img.shields.io/badge/Zoom-0B5CFF?style=for-the-badge&logo=zoom&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"> <img src="https://img.shields.io/badge/render-000000?style=for-the-badge&logo=render&logoColor=white">

<br><br>

## 📲 구현 기능 상세

  <h3>스터디 상세 조회 페이지</h3>
  <ul>
    <li>GET을 사용하여 스터디 상세 정보 표시</li>
    <li>GET을 사용하여 이모지 상세 정보 표시</li>
    <li>POST을 사용하여 추가할 이모지 정보 전송</li>
    <li>react emoji를 사용하여 이모지 사용</li>
    <li>스터디 링크 공유하기</li>
    <ul>
      <li>공유하기의 Link-copy 클릭시 확인용 toast message 표시</li>
      <li>카카오톡 공유하기 기능 추가 구현</li>
    </ul>
    <li>수정하기, 스터디 삭제하기, 오늘의 습관, 오늘의 집중 클릭시 권한 확인 모달 표시</li>
    <li>수정하기 클릭시 스터디 수정 페이지 이동 구현</li>
    <li>스터디 삭제하기 클릭시 스터디 삭제 후 메인페이지 이동 구현</li>
    <ul>
      <li>삭제 확인용 toast message 표시</li>
    </ul>
    <li>오늘의 습관 클릭시 해당 study의 오늘의 습관 페이지 이동 구현</li>
    <li>오늘의 집중 클릭시 해당 study의 오늘의 집중 페이지 이동 구현</li>
    <li>GET을 사용하여 습관명 표시</li>
    <li>GET을 사용하여 완료된 습관 표시</li>
    <li>반응형 레이아웃 구현</li>
  </ul>
  <h3>스터디 수정 페이지</h3>
  <ul>
    <li>GET을 사용하여 해당 스터디의 기존 데이터 표시</li>
    <li>PUT을 사용하여 수정하기 버튼 클릭시 데이터 전송</li>
    <li>유효성 검사와 input 값에 따라 수정하기 버튼 활성/비활성 구현</li>
    <li>수정하기 버튼 클릭시 스터디 상세 페이지로 이동</li>
    <li>반응형 레이아웃 구현</li>
  </ul>
  <h3>오늘의 습관 페이지</h3>
  <ul>
    <li>GET을 사용하여 해당 스터디의 습관 표시</li>
    <li>GET을 사용하여 해당 스터디의 습관 완료 여부 표시</li>
    <li>PUT을 사용하여 해당 스터디의 습관 수정 및 삭제값 수정</li>
    <li>POST을 사용하여 해당 스터디의 습관 생성</li>
  </ul>
  <h3>프론트 배포</h3>
  <ul>
    <li>netlify 사용하여 배포</li>
  </ul>

<br><br>

## 🗂️ 파일구조
<details>
  <summary>파일 구조 보기</summary>
  
```
node_modules
public/
├── _redirects
├── favicon.png
├── ic_share_logo.png
├── index.css
└── index.html

src/
├── components/
│   ├── CreateStudyComponents/
│   │   ├── CreateBackground.js
│   │   ├── CreateBackground.module.css
│   │   ├── CreateFooter.js
│   │   ├── CreateFooter.module.css
│   │   ├── CreateForm.js
│   │   ├── CreateForm.module.css
│   │   ├── CreateInput.js
│   │   ├── CreateInput.module.css
│   │   ├── CreatePassword.js
│   │   └── CreatePassword.module.css
│   ├── EditStudyComponents/
│   │   ├── BackgroundSelector.js
│   │   ├── EditStudyForm.css
│   │   ├── EditStudyForm.js
│   │   ├── LabeledInput.js
│   │   ├── PasswordInput.js
│   │   └── SubmitButton.js
│   ├── Layout/
│   │   ├── Container.js
│   │   ├── Container.module.css
│   │   ├── Footer.js
│   │   ├── Layout.js
│   │   ├── Nav.js
│   │   └── Nav.module.css
│   ├── StudyDetailComponents/
│   │   ├── PasswordModal.css
│   │   ├── PasswordModal.js
│   │   ├── StudyHabits.css
│   │   ├── StudyHabits.js
│   │   ├── StudyInfo.css
│   │   ├── StudyInfo.js
│   │   ├── StudyName.css
│   │   ├── StudyName.js
│   │   ├── StudyPoint.css
│   │   ├── StudyPoint.js
│   │   └── StudyShare.js
│   ├── StudyHomeComponents/
│   │   ├── backgrounds/
│   │   ├── Dropdown.js
│   │   ├── Dropdown.module.css
│   │   ├── ExploreDataFetch.js
│   │   ├── ExploreDataFetch.module.css
│   │   ├── ExploreStudies.js
│   │   ├── ExploreStudies.module.css
│   │   ├── ExploreStudiesHeader.js
│   │   ├── ExploreStudiesHeader.module.css
│   │   ├── RecentDataFetch.js
│   │   ├── RecentDataFetch.module.css
│   │   ├── RecentStudies.js
│   │   ├── RecentStudies.module.css
│   │   └── StudyHomeForm.js
│   ├── TodayFocusComponents/
│   │   ├── api/
│   │   │   └── setPoint.js
│   │   ├── components/
│   │   │   ├── assets/
│   │   │   ├── FocusMid.css
│   │   │   ├── FocusMid.js
│   │   │   ├── FocusTimer.css
│   │   │   ├── FocusTimer.js
│   │   │   ├── FocusTop.css
│   │   │   ├── FocusTop.js
│   │   │   ├── TimerSettingModal.css
│   │   │   └── TimerSettingModal.js
│   │   └── utility/
│   │       ├── timeParser.js
│   │       ├── FocusPage.css
│   │       └── FocusPage.js
│   └── TodayTodoList/
│       ├── HabitEditModal.css
│       ├── HabitEditModal.js
│       ├── HabitItem.css
│       ├── HabitItem.js
│       ├── HabitModalList.css
│       ├── HabitModalList.js
│       ├── HabitStudyComponent.css
│       ├── HabitStudyComponent.js
│       ├── ModalButtons.css
│       ├── ModalButtons.js
│       ├── NewHabitList.css
│       ├── NewHabitList.js
│       ├── TodoList.css
│       └── TodoList.js
├── css/
│   └── reset.css
├── hooks/
│   ├── useExploreList.js
│   ├── useFetchCompleteHabit.js
│   ├── useFetchEmoji.js
│   ├── useFetchHabit.js
│   ├── useFetchStudy.js
│   ├── useInputValid.js
│   └── useRecentList.js
├── img/
├── pages/
│   ├── CreateStudyPage.js
│   ├── EditStudyPage.js
│   ├── FocusTimerPage.js
│   ├── HabitTrackerPage.js
│   ├── StudyDetailPage.js
│   ├── StudyRoomPage.js
│   ├── index.js
│   └── Main.js
├── index.js
├── Main.js
.gitignore
package-lock.json
package.json
README.md
```
</details>

## 🔗 구현 홈페이지

[공부의 숲](https://gatherstudy.netlify.app/)

## 🔗 프로젝트 회고록

[📒 팀 회고록](https://arrow-season-125.notion.site/8812794a344e4e79887b9a7552116692)

[💾 최종발표 자료](https://drive.google.com/file/d/1QTKm8Ihnr_BVs5h07euiJc4b4lJ1Q_ZB/view?usp=sharing)
