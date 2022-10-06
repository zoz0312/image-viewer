# 카카오 이미지 검색 API 연동

## 개요

카카오 이미지 검색 API연동

## 개발기간

22.10.04 ~ 22.10.06

## 사용기술

- react
- typescript
- jest
- react-query
- msw
- eslint
- dotenv
- react-testing-library

## NPM Global 설치

- dotenv-cli
- jest

## env file

- REACT_APP_NODE_ENV: developlemnt | production
- REACT_APP_API_KEY: kakao api key

## 시작방법

### install

```
yarn install
```

### 리얼서버 시작

```
yarn start
```

### 개발서버 시작 (msw)

```
yarn start:dev
```

### 테스팅

```
yarn jest
```

<hr />

## 개선점

1. Testing
   - todo에 해당하는 작업 추가
   - react-query 작업 추가
   - 공통 utils 함수 작업 추가
2. Suspense 추가 작업

## 후기

jest를 제대로 처음 도입해봤습니다<br />
각 jest의 버전별 차이에 의한 node_modules의존성에 의해 환경세팅에 시간 소모가 컸습니다.<br/>
최근 진행한 모든 프로젝트에서 Lint도 도입해본적이 없기에 이 또한 첫 시도였습니다.<br/>
환경설정과 일부 개발에서 삽질을 했고 처음 도입해보는 패키지도 있어서 짧은 시간이었지만 좋은 경험이었습니다
