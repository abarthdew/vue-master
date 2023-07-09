# vue-master

## 강의에서 다루는 내용

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cbce1174-5a8e-4067-aa74-8bdf8e2683f9/Untitled.png)

## 실습 미리보기

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/feb2c7ff-dda2-46c9-b3ec-24d1c468ca2e/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f6645e70-7416-4efe-a51b-d6956918f3d8/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da89da56-5453-4750-92b4-be8765d1d895/Untitled.png)

## 개발환경

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c7041653-2ad5-43e2-b223-fa7816c45b47/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9e787c65-f7f6-42e2-9ddb-540c16d7697a/Untitled.png)

## node 설치

```bash
$ sudo apt update
$ sudo apt install nodejs // node download
$ nodejs -v // read version
$ sudo apt install npm // npm(node manager) download
```

## **git 설치**

```bash
sudo apt install git-all
```

## VSCode 플러그인 설치

- vetur, TSLInt, ESLint, auto close tag, Metarial icon thema, Night owl
- vscode git 권한설정 : https://hyeo-noo.tistory.com/184

## **Vue.js 스타일 가이드 및 코딩 컨벤션 소개**

![https://vuejs.org/v2/style-guide/](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/72321df6-cb13-4363-90a5-ff8873775ef0/Untitled.png)

https://vuejs.org/v2/style-guide/

## 제작할 사이트 및 API 소개

![https://news.ycombinator.com/](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4df29c2d-2ade-4974-a2e8-e65bd1821987/Untitled.png)

https://news.ycombinator.com/

## **애플리케이션 라우터 설계**

- 생략

## **비공개 리포지토리 소개 및 뷰 CLI 설명**

- 생략

## **Vue CLI 2.x vs Vue CLI 3.x**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dc3b7739-b1d8-47e4-9e12-fd2d61a474d8/Untitled.png)

![vue-cli2 webpack 설정](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/77605a4c-7ea7-47ec-aa6e-244b4d21bfc5/Untitled.png)

vue-cli2 webpack 설정

- `vue-cli2`에서는 webpack 설정 파일이 드러나있음
- 프로젝트 내 node_modules 가 추가되어 있지 않기 때문에 초기에 npm install 필요함.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/90f2b8fc-015c-4755-b659-033940e523eb/Untitled.png)
    
- gitHub에서 탬플릿을 다운받는 형식으로 씀.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/665eb3c3-38ad-41ab-93c6-b8de04345dd3/Untitled.png)

- `vue-cli3`은 webpack 설정 파일이 라이브러리 내부에서 알아서 처리됨. 노출X. → [webpack 설정하려면 직접 추가.](https://cli.vuejs.org/guide/webpack.html#simple-configuration)
- 플러그인을 사용해서 원하는 기능을 추가할 수 있도록 함.

## **Vue CLI로 프로젝트 생성 및 ESLint 로그 확인**

- preset으로 구성 선택 가능

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/680a6993-a0f4-49e5-99d5-efebba5fb002/Untitled.png)

## **ESLint 도구 소개와 사용해야 하는 이유?**

- 자바스크립트 엔진이 코드를 분석하며 마지막에 ;를 넣어줌 → ;를 붙이지 않아도 코드 동작에 무리가 없음
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/65d189c5-4e6f-4df9-8d2c-f172a34521fb/Untitled.png)
    
- 하지만 ;를 찍게끔 유도함 → 자바스크립트 해석기가 혼동을 할 수도 있기 때문
    
    ![맨 밑](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc9bb30b-480a-49bd-bbe2-e5aa3d2462da/Untitled.png)
    
    맨 밑
    
- 객채 내 한 쌍이 오는 경우에는 ,를 찍지 않아도 됨
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9731be33-7d87-4ebc-8ad0-60ab182c45d1/Untitled.png)
    
- 두 번째 쌍이 오는 경우 ,를 찍음
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b24813e5-853b-473e-b09c-067adce966d6/Untitled.png)
    

⇒ ESLint : 오류가 없는 코드를 유도하기 위한 장치.

## 01_**Vue CLI 3.x에서 ESLint 설정 끄는 방법**

- ESLInt 설정
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/89f8a30e-0730-41d0-bdfe-f37505dc1cf0/Untitled.png)
    
- ESLint를 다음 명령어로 컴포넌트에 추가할 수 있지만, 수가 많아질 수록 번거로움.
    
    ```jsx
    eslint-disable-next-line
    eslint-disable
    ```
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a97264c2-2ba4-469b-bb0c-3e94b58c3281/Untitled.png)
    
- [다른 방법 : vue.config.js파일 생성](https://cli.vuejs.org/core-plugins/eslint.html#configuration)
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/135890d8-d248-4eb4-970f-e541467a8c59/Untitled.png)
    
    ```jsx
    // vue.config.js
    module.exports = {
        lintOnSave: false
    }
    ```
    

## **라우터 설치 및 라우터 구현**

```jsx
npm i vue-router --save
```

- package.json의 `dependencies` : 앱을 실행시키는 데 필요한 비지니스 로직, 앱의 동작을 담당하는 라이브러리가 포함됨. (배포할 때도 포함되어야 하는 라이브러리)
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f1194d2c-db69-4887-898a-438d19b2d3ac/Untitled.png)
    

### 02_코드

- 라우터를 `main.js에 설정`함.
- main.js는 개발자가 프로젝트 구조, 라이브러리, 등을 한눈에 볼 수 있는 파일이므로, `router를 별도 폴더에 뺌`.
- router객체를 만들고 그 안에 routes정보를 세팅함. 여기서, `path에 대한 component`는 page의 개념과 같음. → 이 page들은 `views폴더를 만들어 그 안에서 관리`함.
- view page component를 import해서 component에 넣기
- router를 export 해서 main.js에 import한 다음 vue 객체에 넣기

## 03_**router-view를 이용한 라우팅 컴포넌트 표시**

- App.vue
    
    ```jsx
    <template>
      <div id="app">
        <router-view></router-view>
      </div>
    </template>
    ```
    

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/783074d4-609d-4e72-9cfe-13da42f85da9/Untitled.png)

### 03_vue_router_and export_default_router_1, 2

- 두 가지 import, export 방법
    
    ```jsx
    //  router/index.js
    const router = new VueRouter({ ... });
    export default router;
    // main.js
    import router from './router/index'
    ```
    
    ```jsx
    //  router/index.js
    export const router = new VueRouter({
    // main.js
    import { router } from './router/index'
    ```
    
    ⇒ [{ router }, router 차이](https://hoorooroob.tistory.com/entry/React-React-Naive-TIPS-import-%ED%95%A0-%EB%95%8C-%EB%A5%BC-%EB%84%A3%EA%B3%A0-%EB%B9%BC%EA%B3%A0%EB%8A%94-%EB%AC%B4%EC%8A%A8-%EC%B0%A8%EC%9D%B4-%EC%9D%BC%EA%B9%8C)
    

## **redirect 속성과 router-link**

### 04_redirect

### 05_router-link

- 컴포넌트 이름 코딩 스타일
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/67318648-f598-4c69-882f-437747ab46f5/Untitled.png)
    
    - <too-bar>로 써야 하는 이유 : alt+컴포넌트 클릭하면 해당 컴포넌트로 넘어갈 수 있어서 더 편리.

## 06_**[실습 안내] ItemView와 UserView 라우터 구현**

- 생략

### 06_**라우터 폴더 작명 팁과 라우터 mode 안내**

- router 폴더를 routes로 바꿈
- mode: history 추가

## 07_**axios를 이용한 api 호출**

- views에 들어가는 page(컴포넌트)내에는 페이지 라우팅에 관련된 정보만 포함시키는 게 좋다.
- views에 데이터 패치 등 로직이 포함되어 있으면 안 좋음. → 별도의 컴포넌트에서 로직 불러오기.
- 여기서는 실습을 위해 일단 views에 코드를 쓰고 나중에 개선.
- axios 설치

```jsx
npm install axios
// http, xhr 등을 편하게 쓸 수 있는 라이브러리
```

## 08_**[실습 안내] axios의 api 함수 구조화 방법 및 실습 안내**

- NewsView의 axios 로직 /api/index로 옮김

```jsx
axios.get('https://api.hnpwa.com/v0/news/1.json')
        .then(res => {
            console.log(res.data)
            this.users = res.data;
        })
        .catch(error => console.log(error));
// ==>  // new Promise()
        // .then(function(response) {
        //     console.log(response);
        // })
        // .catch(function() {

        // })
```

### 08_**[실습] JobsView와 AskView 구현**

- [Reactivity in Depth](https://vuejs.org/v2/guide/reactivity.html#ad)

## **자바스크립트 this 4가지와 화살표 함수의 this**

- 다른 언어는 지역 scope로 시작한다면, 자바스크립트는 전역 scope로 시작함.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8873641f-57ee-4167-a0fb-c0e8df58cd1c/Untitled.png)
    
- 첫번째 this :그냥 this
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f0667dfd-167b-4b48-8391-2e7552d42028/Untitled.png)
    
- 두번째 this : 함수 안 this
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/768a5499-85ff-42d1-be32-076586b15bba/Untitled.png)
    
    - 함수 안에서도 this는 전역을 가리킴
- 세번째 this : Vue생성자 함수 생성
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6b8ce5ab-52a0-487d-b458-05df7102f340/Untitled.png)
    
    ```jsx
    function Vue(el) {
    	console.log(this); // => Vue {}
    	// 비동기처리에서의 this
    	this.el = el;
    }
    ```
    
    - `sum 함수`의 this가 `전역`을 가리키는 것과 다르게 `Vue 생성자`의 this는 `함수 자체`를 가리킴.
- NewsView
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/759a688b-82e8-4b63-8393-3818584ad821/Untitled.png)
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/03751330-ce70-4240-8e2d-e5785055bf97/Untitled.png)
    
    - 호출 전에는 vue component, 호출 후에는 undefined를 가리킴.
    - http로 서버에 갖다오기 때문에 비동기로 호출됨 → 현재 위치에서 벗어난  this가 발생(자바스크립트 기본 동작 방식)
    - 컴포넌트, 객체 등을 가리키고 싶을 때는 `var vm = this;` 를 사용했음. → 바인딩을 해줘야 하는 번거로움이 있음.
- ES6 화살표 문법으로 바꿔서 다시 콘솔 찍어보면 호출 전과 후가 같음 → `this.user = response.data;`의 this가 호출되는 위치의 this를 가지고 옴.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9197f101-db71-4e52-834c-417b1b7f8ed2/Untitled.png)
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c86d86f3-625a-4796-87f2-1e4550cd40bf/Untitled.png)
    

## 07_**자바스크립트 비동기 처리(1) - Callback**

- callback.html
    
    ![file:///home/jonah/Documents/vue-master/vue-master-cli3/src/callback.html](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f41c602c-f4d8-4733-9926-a4520d34a02f/Untitled.png)
    
    file:///home/jonah/Documents/vue-master/vue-master-cli3/src/callback.html
    
    - 함수 결과(3)이 먼저 나오고 데이터 호출 결과(2)가 나중에 나와서, result 객체 안에 값이 들어가지 않음. → 자바스크립트 비동기처리 때문.
    - ajax 데이터 요청이 가고 나서, 기다리지 않고 다음 코드를 실행 → 비동기처리 콜백함수.
- 콜백을 처리하고 나서, success가 됐을 때 결과를 찍음.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/43b3ca6d-0bfa-4abd-bf35-8c42f0a6c28c/Untitled.png)
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b8d9208b-8fca-490e-b7aa-0b6da16e8570/Untitled.png)
    
    - 데이터 호출 결과, 함수 결과가 찍힘.
- 콜백 과정이 많아지게 되면 콜백 지옥이 생김. 코딩 사고에 위배.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b5c77cfa-645d-4138-b09b-b4f99f60d0d8/Untitled.png)
    

## **자바스크립트 비동기 처리(2) - Promise**

- Promise : 콜백 관리를 효율적으로 하고, 코드를 직관적으로 짜기 위해 등장.
    
    ```jsx
    // ajax call function
    function callAjax() {
        return new Promise(function (resolve, reject) { // Promise must get parameter named resolve and reject
            $.ajax({ // ajax call
                url: 'https://api.hnpwa.com/v0/news/1.json',
                success: function (data) {
                    resolve(data); // when ajax call success, resolve handle success data
                }
            });
        });
    };
    ```
    
    ```jsx
    function fetchData() {
        var result = [];
        callAjax() // Promise Object call
        .then(function() { // Promise resolve : Situation when Promise call success
            console.log('data call result', data);
            result = data;
            console.log('function result', result);
        })
        .catch(function(err) { // Promise reject
            console.log(err);
        }); 
    }
    ```
    
    - new Promise로 인해 어떤 동작을 실행하고 나서 resolve하면, callAjax의 then으로 연결됨.
    - 즉, callAjax는 new Promise를 반환하는데, 데이터를 받아와서 데이터를 resolve했을 때, then안의 구문이 실행됨.
    - .then()을 연결시켜 체이닝도 가능.
    - 제이쿼리에도 Promise 성격의 내장 객체([디퍼드](http://preview.hanbit.co.kr/2721/sample_ebook.pdf))가 있지만, 보완이 필요함
    - [프로미스 쉽게 이해하기 글 주소](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
    - [Promise MDN 주소](https://developer.mozilla.org/ko-KR/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## **Vuex 설치 및 Vuex가 적용된 앱 구조 소개**

- 구조도
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d30fff5f-f6a9-4762-8f45-467dd085da64/Untitled.png)
    
    - NewView에서 api를 바로 불러오는 게 아니라, vuex라는 상태, 즉  state에 api를 담아 옴
- vuex : 상태 관리 도구. 여러 컴포넌트 간 공유되는 데이터 속성.
    - state를 이용해, NewsView가 users라는 데이터를 다른 컴포넌트와 공유할 수 있게 됨.

## 09_**Vuex 모듈화 및 state 적용**

- 생략

## 10_**NewsView에 actions와 mutations 적용**

- api에서 actions 호출, actions에서 mutations 호출, mutations에서 state 값을 변환한 다음 NewsView에 적용.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ee2f1f86-42c7-4754-857a-4b0d79a8ec57/Untitled.png)
    

## 11_**[실습 안내] JobsView와 AskView 실습 안내**

- 생략

## **[실습] JobsView에 스토어 적용**

- 생략

## **[실습] map 헬퍼 함수를 이용한 AskView 풀이**

- 생략

## 12_**스토어 속성 모듈화**

- 생략

## 13_**중간 정리 및 스타일링**

- 생략

## 14_**동적 라우트 매칭 원리 및 적용**

- https://router.vuejs.org/kr/guide/essentials/dynamic-matching.html
- 아이디가 path로 넘어옴
    
    ```jsx
    <router-link :to="`/user/${news.user}`">{{ news.user }}</router-link>
    ```
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8fcb0e54-5ee6-480d-8343-79cb00282675/Untitled.png)
    

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/492cb4d5-41c3-45b9-8d1a-cce26f38b79d/Untitled.png)

## 15_**라우터 params을 이용한 User 상세 페이지 구현**

- mapActions 2가지 방법
    
    ```jsx
    created() {
        console.log(this.$route.params.id);
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);
    },
    ```
    
    ```jsx
    created() {
        console.log(this.$route.params.id);
        const userName = this.$route.params.id;
        this.FETCH_USER(userName);
    },
    methods: {
        ...mapActions({
            FETCH_USER: 'FETCH_USER',
        }),
    }
    ```
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fd46a7a8-dfdd-4839-b78f-ecedc32bd81c/Untitled.png)
    

## **[실습] 질문 상세 페이지 구현 실습 안내**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5da85899-f11c-4952-9e0d-e708f793fedb/Untitled.png)

## 16_**[실습] 질문 상세 페이지 실습 풀이 및 오류 디버깅**

- 화면
    
    ![http://localhost:8080/ask](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/69f3e29f-d6be-4e2f-81c0-60c6e06a36c0/Untitled.png)
    
    http://localhost:8080/ask
    
    ![http://localhost:8080/item/29930670](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b268f4f2-b735-40a1-bc67-890531e74e19/Untitled.png)
    
    http://localhost:8080/item/29930670
    

## 17_**질문 상세 페이지 스타일링 및 v-html 디렉티브 사용법 소개**

- 생략

## 18_**라우터 트랜지션**

- [라우터 트랜지션](https://router.vuejs.org/kr/guide/advanced/transitions.html) : vue 내부에서 화면이 보다 더 부드럽게 전환되도록 해 주는 기능
- [여러가지 트랜지션 이펙트](https://vuejs.org/v2/guide/transitions.html)
- prefix가 fade이므로, 다른 이름(page)로 바꿔도 됨

```jsx
<transition name="fade">
  <router-view></router-view>
</transition>

/* router transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
```

```jsx
<transition name="page">
  <router-view></router-view>
</transition>

/* router transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
```

- 이렇게 적용하면 라우터 이동할 때 화면이 부드럽게 넘어감.
- enter, leave는 보통 쌍으로 짝을 지어 css를 적용함.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7e5348c1-4b63-4f4f-a58d-689381a5e09d/Untitled.png)

## **컴포넌트 공통화 리팩토링 소개**

- view에서 바로 개발하는 게 아닌, component 기반으로 리팩토링

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bb0c2807-43df-4aad-883a-56f05fb1d018/Untitled.png)

## 19_css

- 생략

## 20_**[실습 안내] 공통 컴포넌트 ListItem 제작 및 실습 안내**

- NewsView 에는 list-item 이라는 컴포넌트가 생김

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7319ba28-95ea-4848-9ef5-b1941436a6ef/Untitled.png)

- AskView 에는 없음

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/54ce4b45-5ca5-468e-84c7-3ec6ad0fc18d/Untitled.png)

## 21_**공통 컴포넌트 구현(1) - 페이지별 데이터 분기**

- 영상 안 보고 내 맘대로 함

## 22_**공통 컴포넌트 구현(2) - computed 속성**

- ListItem

```jsx
computed: {
    listItems() {
        if (this.router === 'news') {
            return 'news';
        } else if (this.router === 'jobs') {
            return 'jobs';
        } else if (this.router === 'asks') {
            return 'asks';
        }
    }
},
```

## 23_**공통 컴포넌트 구현(3) - template 속성과 v-if 디렉티브 활용 1, 2**

- ListItem.vue

```jsx
<p>
    <template v-if="item.domain">
        <a :href="item.url">
        {{ item.title }}
        </a>
    </template>
    <template v-else>
        <router-link :to="`/item/${item.id}`">
        {{ item.title }}
        </router-link>
    </template>
</p>
```

## 24_**사용자 프로필 컴포넌트 소개 및 등록**

- UserProfile

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/42cefb3f-b28a-44e1-83ba-a6d02266dd60/Untitled.png)

> 💡 **Router path와 router-link 형식이 맞지 않으면 컴포넌트나 뷰가 뜨지 않음.**


```jsx
<template>
      <router-link to="/user">User</router-link>
</template>

{
    path: '/user/:id',
    component: UserView,
},
```

![Screenshot from 2022-01-16 17-03-05.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ead26088-35f8-4540-99f8-50e818b47a67/Screenshot_from_2022-01-16_17-03-05.png)

```jsx
<template>
      <router-link to="/user/:id">User</router-link>    </div>
</template>

{
    path: '/user/:id',
    component: ItemView,
}
```

![Screenshot from 2022-01-16 17-04-38.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5d30d567-0686-47b1-a1cd-1c6d7c657643/Screenshot_from_2022-01-16_17-04-38.png)

## 25_**사용자 컴포넌트 데이터 흐름 처리 1**

- 생략

## 26_**사용자 컴포넌트 데이터 흐름 처리 2**

- 생략

## **2가지 데이터 처리 흐름 비교**

- UserProfile에서 computed로 접근
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/96923c80-11a8-4ac8-a048-002977e5730b/Untitled.png)
    
- UserView에서 props로 전달
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f7fa7a31-5db2-4570-990f-960c63d970b3/Untitled.png)
    

## 27_**slot을 이용한 사용자 프로필 컴포넌트 구현**

- user, item 형식을 []에서 {}로 바꿔줌.
    
    ```jsx
    state: {
        news: [],
        jobs: [],
        asks: [],
        user: {},
        item: {},
    },
    ```
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b0ca6641-d390-4060-8adb-483368b4c16f/Untitled.png)
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99ca7464-81c0-412a-9bd3-534cdcf3c158/Untitled.png)
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/daba498d-98a1-4227-a4f9-1a60ac321d85/Untitled.png)
    

## 28_**사용자 프로필 컴포넌트 스타일링 및 코드 정리**

- 생략

## 29_**컴포넌트 재활용 방법 및 재활용할 포인트 소개**

- 페이지 컴포넌트 재활용

## 30_**이벤트 버스를 이용한 스피너 컴포넌트 구현**

- 페이지 이동할 때 데이터 불러오는 동안 spinner를 띄웠다가, 꺼지는 순간 spinner 를 끄면 됨.

### 30_2_그렇다면, spinner를 언제 켜고 끄는지 고민해보자.

- spinner는 NewsView에서 props로 내려주는 것 보다는, app에서 emit으로 관리하는 게 더 나음. (이벤트 버스)
- /src/utils/bus.js : 빈 이벤트 객체를 만들어 컴포넌트 간 이벤트 전달
- default와 그외의 차이점
    
    ```jsx
    // bus.js
    export const bus = new Vue();
    // App.vue
    import { bus } from './bus.js'
    
    // default
    // bus.js
    export default new Vue();
    // App.vue
    import Bus from './bus.js' // 뭘 선언하든 받을 수 있음(Bus가 되든, bbbb든 다 됨)
    ```
    
- start:spinner가 돌고 있는 모습
    
    ![Screenshot from 2022-01-27 23-26-11.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b7a79baf-314e-44e7-bfec-9eceee1d5ec2/Screenshot_from_2022-01-27_23-26-11.png)
    
- start로 spinner가 생기고, end로 사라짐 ⇒ 언제 생기게 하고 사라지게 만들건지만 고민하면 됨
    
    ![Screenshot from 2022-01-27 23-27-01.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8107d01a-3be9-4640-b462-3f2f440807f5/Screenshot_from_2022-01-27_23-27-01.png)
    
- 마지막에 off 필수
    - 이벤트를 등록하면 이벤트 버스에 이벤트 객체가 계속 쌓이기 때문에.
    - 항상 페이지에서 앱을 종료하기 전에 또는 컴포넌트의 역할(이벤트를 받는)이 끝나고 나서 off를 해 줘야 이벤트 객체가 해지됨.

```jsx
created() {
  // bus.$on('start:spinner', () => this.spinner = true);
  bus.$on('start:spinner', this.startSpinner); // recieved
  bus.$on('end:spinner', this.endSpinner); // recieved
},
```

```jsx
beforeDestroy() {
  bus.$off('start:startSpinner')
  bus.$off('start:endSpinner')
}
```

## 31_**스피너 실행 및 종료 시점 알아보기**

- 가상의 네트워크(속도가 느린)를 만들어 spinner 테스트
    
    ![Screenshot from 2022-01-28 19-46-10.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9fdbf120-96b8-4a16-b3cd-1cf61eb872e8/Screenshot_from_2022-01-28_19-46-10.png)
    
    ![Screenshot from 2022-01-28 19-46-17.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a227a52d-07cf-4703-9323-4ba3d4587635/Screenshot_from_2022-01-28_19-46-17.png)
    
    ![Screenshot from 2022-01-28 19-46-30.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/12742ce9-699c-4479-b2fa-54631d67fdfc/Screenshot_from_2022-01-28_19-46-30.png)
    
- actions.js

```jsx
FETCH_NEWS(context) {
    fetchNewsList()
        .then(res => { // 데이터를 가져와서
            context.commit('SET_NEWS', res.data); // mutation으로 데이터를 넣고
            return res; // 프로미스 객체를 리턴
        })
        .catch(err => console.log(err));
},
```

## 32_**하이 오더 컴포넌트(HOC) 소개 및 구현**

- [리액트의 hook, vue의 mixin](https://joshua1988.github.io/vue-camp/design/pattern5.html)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8ce00faf-98d9-41e8-9f1c-a74d14559504/Untitled.png)

- createListView 생성 → router에서 사용
    - NewsView 컴포넌트로 바로 연결하지 않음
        
        → 기존 컴포넌트 위에 컴포넌트(하이오더)가 하나 더 생김
        
    
    ```jsx
    {
        path: '/news', // url address
        name: 'news',
        // component: NewsView,
        component:  createListView('NewsView'),
    },
    {
        path: '/ask', // If you go to '/ask',
        name: 'asks',
        // component: AskView,
        component: createListView('NewsView'),
    },
    {
        path: '/jobs',
        name: 'jobs',
        // component: JobsView,
        component: createListView('NewsView'),
    },
    ```
    
- 비교
    - NewView 로 바로 감
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/385121e1-a517-48a7-b14a-246575145e7c/Untitled.png)
    
    - createListView를 통해 가는 건 App밑에 컴포넌트 하나 더 생김
- ListView.vue를 만들어 createListView에 랜더링
    
    ```jsx
    import ListView from './ListView'
    
    export default function createListView (name) { 
        return { 
           name: name,
           render(createElement) {
                return createElement(ListView);
           }
        }
    }
    ```
    

## 33_**하이 오더 컴포넌트에서 사용할 ListView 컴포넌트 구현**

- ListView.vue : 데이터를 뿌려주는 역할
- createListView : 데이터를 요청하는 역할
- router/index.js : createListView를 거쳐 페이지 이동을 하도록 함
    
    ```jsx
    {
        path: '/news', // url address
        name: 'news',
        // component: NewsView,
        component:  createListView('NewsView'), // high order component
    },
    {
        path: '/ask', // If you go to '/ask',
        name: 'asks',
        // component: AskView,
        component: createListView('AskView'),
    },
    {
        path: '/jobs',
        name: 'jobs',
        // component: JobsView,
        component: createListView('JobsView'),
    },
    ```
    
- CreateListView에서 데이터 받음
    
    ```jsx
    created() {
        console.log(11111);
        bus.$emit('start:spinner'); 
        setTimeout(() => { 
            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                    bus.$emit('end:spinner');
                })
                .catch(err => console.log(err));
        }, 1500);
    },
    ```
    
- 그걸 ListView로 랜더링
    
    ```jsx
    // (2) rendering
     render(createElement) {
          console.log(22222);
          return createElement(ListView);
     }
    ```
    
- ~~NewsView에  ListView 내용 뿌려줌~~ > NewsView, JobsView,  AskView.vue 필요 없으므로 삭제
    
    ```jsx
    createListView('NewsView') 가 작동되며, ListView가 페이지 역할을 함.
    ```
    
- ListView.vue는 ListItem 내용을 뿌려줌
- ListItem에 화면 구성 : 데이터가 전단계에서 완료됐으므로 가져오기만 하면 됨
    
    ```jsx
    <li v-for="item in listItems" :key="item.id">
    
    computed: {
        listItems() {
            return this.$store.state.list;
        }
    },
    ```
    
- 컴포넌트 구조(이전에는 NewsView 아래 바로 ListItem이 있었음) : 실질적 hoc는 NewsView
    
    ![Screenshot from 2022-01-28 23-43-34.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5f66813a-a195-4f34-8272-7018705ca9f1/Screenshot_from_2022-01-28_23-43-34.png)
    

## 34_**하이 오더 컴포넌트가 적용된 앱 구조 설명 및 흐름 정리**

- createListView

```jsx
name: 'HOC component',
// 그냥 name을 바인딩하면 
// component: createListView('AskView'), component: createListView('JobsView'),
// 처럼 인자가 컴포넌트 이름이 됨
```

![Screenshot from 2022-01-28 23-52-01.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc1d2cec-a89f-439f-82d4-ab20d6c0c559/Screenshot_from_2022-01-28_23-52-01.png)

- 즉, NewsView, AskView, JobsView가 하이오더컴포넌트(hoc)

![Screenshot from 2022-01-29 00-10-21.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3a024171-f9d2-4c9b-99a6-b373727f58d8/Screenshot_from_2022-01-29_00-10-21.png)

- 이제 NewsView, JobsView,  AskView.vue 필요 없으므로 삭제

### 구조

![Screenshot from 2022-01-28 23-59-40.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8c7819b6-0bc8-472d-9c12-0b291d9e4655/Screenshot_from_2022-01-28_23-59-40.png)

> 💡 **단계**
router change → createListView(get data) → ListView(page view) → ListItem(component)

## **Mixin의 개요와 활용처 그리고 HOC와의 차이점**

- hoc의 단점 : hoc를 많이 쓸 수록 컴포넌트가 깊어지므로, 컴포넌트 간 통신이 어려움

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8261a13e-5671-4063-b3e7-0871bc715fcb/Untitled.png)

- [Mixin](https://joshua1988.github.io/vue-camp/reuse/mixins.html) : 재활용 로직
    - 장점
        - mixin에 선언된 코드를 불러오기만 하면 되므로 코드가 깔끔하게 정리됨
        - spinner, modal등을 Mixin으로 빼면 효율이 좋음
        - crud를 제외한 부차적 로직은 전부 Mixin으로 빼면 됨

## 35_**[실습 안내] Mixin 적용 후 HOC 구조와 비교, [실습] Mixin 실습 및 컴포넌트 재활용 방법에 대한 리뷰**

- NewsView : mixins를 선언하면, 컴포넌트가 실행되면 로직을 불러옴

```jsx
export default {
    components: {
        ListItem,
    },
    mixins: [ListMixin]
}
```

- hoc 와 mixin 비교

![hoc - listview를 거침](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1fae28ce-b4a1-45d8-ac26-c35fd4c02738/Untitled.png)

hoc - listview를 거침

![mixin - 바로 listitem](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8625bdda-1899-4e40-a3b5-0c56a9bc5fe1/Screenshot_from_2022-01-29_02-31-59.png)

mixin - 바로 listitem

## **UX를 고려한 데이터 호출 시점**

- 데이터 호출 시점
    1. [컴포넌트 라이프 사이클 훅](https://v3.ko.vuejs.org/api/options-lifecycle-hooks.html#created) : create
        1. 컴포넌트가 생성되자마자 생성되는 로직
        2. 기본적 vue의 동작 원리(데이터 관찰, computed, watch 콜백 등)에 접근할 수 있는 라이프 사이클 훅
        3. 화면에 인스턴스 내용들이 붙어있지 않는 상태
        4. 즉, 컴포넌트가 생성되자마자 호출되는 로직
    2. [라우터 네비게이션 가드](https://joshua1988.github.io/web-development/vuejs/vue-router-navigation-guards/) : 컴포넌트에 진입하기 전에 라우터 속성을 이용(공식문서)
        1. 라우터로 특정 url에 접근하기 전의 동작들을 정의
        2. 특정 url에 접근하지 못하게 한다던지, 인증값을 확인한다던지
        3. 즉, 특정 url로 접근하기 전의 동작을 정의하는 속성(함수)
            
            ```jsx
            router.beforeEach(function (to, from, next) {
              // 라우터 주소에 진입하기 전에 어떤 로직을 여기 콜백 안에 정의
              // 이 로직이 끝나고 next를 호출했을 때만 의도한 위치로 가능
            });
            ```
            
    3. 순서는 라우터 네비게이션 가드가 먼저임
        1. 라이프 사이클 훅 : 컴포넌트가 생성되고 나서 데이터를 호출할건지
        2. 라우터 네비게이션 가드 : 컴포넌트가 생성되기 전에 라우팅 상태에서 데이터를 호출할건지

## 36_**라이프 사이클 훅을 이용한 데이터 호출 방법의 문제와 비동기 처리 코드 수정**

- News 메뉴에서 Ask 메뉴로 이동하는데, NewsView 목록이 잠깐 보이고 AskView 목록이 출력되는 현상에 대하여

```jsx
state: {
    news: [],
    jobs: [],
		// 이렇게 각각 나뉘어져 있을 때는 오동작이 나지 않았음
    list: [],
		// list라는 데이터를 news, jobs, askview가 공유하기 때문에 오동작 발생
},
```

- spinner가 안 도는 오류 : return 빼먹음
    - return fetchList을 하는 이유 : 화면에서 dispatch를 호출하고 나서, then으로 체이닝을 해야 하는데 return이 안 넘어오면 의도대로 비동기 처리가 되지 않음
    
    ```jsx
    FETCH_LIST({ commit }, name) {
          return fetchList(name)
              .then(res => { // get data
                  commit('SET_LIST', res.data); // send mutation
                  return res; // return response(send Promise object to View Page - in this case, NewsView.vue)
              })
              .catch(err => console.log(err));
      },
      FETCH_USER(context) {
          return fetchUserInfo()
          .then(res => {
              context.commit('SET_USER', res.data);
          })
          .catch(err => console.log(err));
      },
      FETCH_ITEM({ commit }, id) {
          return fetchCommentItem(id)
          .then(({ data }) => {
              commit('SET_ITEM', data);
          })
          .catch(err => console.log(err));
      },
    ```
    
    - mixin.js
    
    ```jsx
    created() { 
        bus.$emit('start:spinner');
        // #1
        console.log(1);
        this.$store.dispatch('FETCH_LIST', this.$route.name)
        // #5
            .then(() => {
                console.log(5);
                bus.$emit('end:spinner');
            })
            .catch(err => console.log(err));
    },
    ```
    
    - actions.js
        - fetchList에 대한 결과가 Promise로 체이닝이 되어, #5에 .then()이 됨
        - fetchList 앞에 return이 없을 시 #5가 제대로 동작하지 않음
    
    ```jsx
    // #2
    FETCH_LIST({ commit }, name) {
        // #3
        console.log(3);
        return fetchList(name)
        // #4
            .then(res => {
                console.log(4);
                commit('SET_LIST', res.data); 
                return res; 
            })
            .catch(err => console.log(err));
    },
    ```
    

## 37_**라우터 네비게이션을 이용한 데이터 호출 방법**

- router/index
    
    ```jsx
    {
        path: '/news', // url address
        name: 'news',
        component: NewsView, // high order component
        beforeEnter: (to, from, next) => {
            console.log(to)
            console.log(from)
            console.log(next)
        } 
    },
    ```
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/22c1f729-2561-4236-9416-e9a8b30d6400/Untitled.png)
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b477272e-53a6-4df5-9e5a-5ffa8bd6bf99/Untitled.png)
    
    ```jsx
    beforeEnter: (to, from, next) => {
        next();
    }
    // next를 호출해 줘야 url넘어감
    ```
    

## **[실습] 라우터 네비게이션 가드 실습 안내**

- 내용없음

## 38_**[실습] 라우터 네비게이션 가드 실습 및 스피너 종료 시점 변경**

- spinner 시점이 약간 안 맞음 → mounted(인스턴스가 화면에 불러오는 것이 완료되었을 때)에 spinner 종료시키기

## **자바스크립트 비동기 처리 패턴의 발전 과정**

1. 일반 자바스크립트의 비동기 코드
    
    ![john이라는 id가 있을 시 products 함수 실행](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/63f6e6dd-9a49-4168-8ebb-7057654fbe2b/Untitled.png)
    
    john이라는 id가 있을 시 products 함수 실행
    
    ![받아 온 결과 값 products는 콜백 함수 안에서 처리해야 비동기 처리 가능](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/06c07295-db00-4e67-bc57-2954962800f1/Untitled.png)
    
    받아 온 결과 값 products는 콜백 함수 안에서 처리해야 비동기 처리 가능
    
2. promise로 쓰는 비동기 코드
    
    ![함수](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd1787e2-f379-4a7a-a422-d18a7105bdce/Untitled.png)
    
    함수
    
    ![함수에 대한 로직](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a5a3f073-2406-4c4c-8958-5d18a1ea4334/Untitled.png)
    
    함수에 대한 로직
    
3. 2에서 함수 이름을 좀 더 명시적으로
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dfce0952-f05d-4691-853a-7e72b77e9b41/Untitled.png)
    
- 결국, john 이라는 id가 있을 시 불러온 products값을 products 변수에 담고, 이 값을 불러올 수 있는지에 대한 과정이 핵심.
    
    ![논리과정 예시(실제로직 아님)](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/347fe5d9-2cb5-483f-abd3-590f86311247/Untitled.png)
    
    논리과정 예시(실제로직 아님)
    

## **async & await 문법 소개**

- [자바스크립트 async와 await](https://joshua1988.github.io/web-development/javascript/js-async-await/), [[2]](https://joshua1988.github.io/vue-camp/es6+/async-await.html)
- 함수 선언문 앞에 `async`를 붙이고, 그 async function 안에 비동기 처리를 담당하고 promise를 반환하는 로직 앞에 `await`를 붙여줌.

```jsx
async function 함수명() {
  await 비동기_처리_메서드_명();
}
```

## 39_**async & await 예제 소개**

- 생략

## 40_**async await 예제 실습**

- 생략

## 41_**async await 에러 처리 방법과 공통화 함수 작성 방법**

- promise의 then, catch : 네트워크 요청, 비동기 요청에 대해서만 예외처리

```jsx
loginUser() {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
        if (response.data.id === 1 ) {
            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response2 => console.log(response2))
            .catch(error => console.log(error));
        }
    })
    .catch(error => console.log(error));
}
```

- async, await의 try-catch : 비동기 처리 요청뿐 아니라, 일반적 자바스크립트 코드 에러까지 포괄적으로 예외처리

```jsx
async loginUser2() {
    try {
        var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        if (response.data.id === 1) {
            var response2 = await axios.get('https://jsonplaceholder.typicode.com/todos');
            console.log(response2);
        }
    } catch(error) {
        handleException(error);
        console.log(error);
    }
}
```

- 공통 에러처리 : utils/handelException.js

```jsx
function handleException(status) {
    // handle error logic
}
```

## 42_**async 함수를 이용한 코드 리팩토링**

- api 결과값은 new Promise(); 형태

```jsx
function fetchList(name) {
    return axios.get(`${config.baseUrl}/${name}/1.json`);
		// = return new Promise();
}
```

- return response를 하지 않으면 화면에서 비동기 순서를 보장할 수 없으므로, 프로미스 체이닝
- 결과값을 반환해줘야 FETCH_LIST2(); 를 실행하고 나서 다음 단계를 이어 실행할 수 있게 됨.
    
    ⇒ FETCH_LIST2().then().catch();
    
- async 함수에서 어떤 것을 리턴하던 promise가 리턴됨.

```jsx
async FETCH_LIST({ commit }, name) {
    const response = await fetchList(name);
    commit('SET_LIST', response.data);
    return response; // promise
},
```

## **[실습 안내] async await 실습 안내**

- 내용 없음

## 43_**[실습] async await 실습 풀이**

- 생략

## **라이브러리 모듈화의 이유와 배경**

- [Chart.js 공식 문서](https://www.chartjs.org/docs/latest/)
- [State of JS 2018 사이트](https://2018.stateofjs.com/front-end-frameworks/overview/)
1. 외부 라이브러리 모듈화
    - 이유 : vue.js 관련 라이브러리가 없을 때 일반 라이브러리를 결합할 수 있어야 함.
    - 종류 : 차트, 데이트 피커, 테이블, 스피너

## 44_**차트 라이브러리 설치 및 차트 그리기**

- 설치

```jsx
npm install chart.js
```

# Reference
- https://www.inflearn.com/course/vue-js/lecture/16981?volume=1.00&quality=1080
- router, routes 차이 : [https://im-nc2u.tistory.com/entry/Vue-Router-Router-인스턴스와-Route-객체-비교](https://im-nc2u.tistory.com/entry/Vue-Router-Router-%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4%EC%99%80-Route-%EA%B0%9D%EC%B2%B4-%EB%B9%84%EA%B5%90)
- [https://www.notion.so/vue-lesson-bb01133a21e94a969b42f1a82f8c24c7](https://www.notion.so/vue-lesson-bb01133a21e94a969b42f1a82f8c24c7?pvs=21)
- https://velog.io/@ywoosang/Node.js-%EC%84%A4%EC%B9%98
- vscode git 권한설정 : https://hyeo-noo.tistory.com/184
