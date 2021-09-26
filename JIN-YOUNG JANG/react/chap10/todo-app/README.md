## 라이브러리 설치
```sh
npm i node-sass@^5.0.0 classnames react-icons
```

## 10.1.2 Prettier 설정

코드를 정렬하기 위해 prettierrc를 설정한다(2장참조라는데..)
```js
// .prettierrc를 root directory에 작성
{
  “singleQuote“: true,
  “semi“: true,
  “useTabs“: false,
  “tabWidth“: 2,
  “trailingComma“: “all“,
  “printWidth“: 80
}

```

## index.css 수정
프로젝트의 글로벌 스타일 파일
```css
// 경로 : src/index.css
body {
    margin : 0;
    padding : 0;
    background : #e9ecef;
}
```

## jsconfig.json 설정(닫힌 파일도 import 자동완성해주기)
루트 디렉토리에 jsconfig.json파일 생성 후 `ctrl` + `space`누르기

## 아이콘 사용하기
[아이콘이름](https://react-icons.netlify.com/#/icons/md)

```js

import { 아이콘이름 } from 'react-icons/'
import { MdAdd } from 'react-icons/md'
```