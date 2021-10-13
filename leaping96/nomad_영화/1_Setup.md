# 1.0 Creating your first React App

## create-react-app 의 편의성 

</br>

- Web Pack을 다운로드 해야하고,
- Babel을 다룬로드 하고,
- React 코드를 컴파일 하고,
- 다른 파일에 넣어야 하고,
- ... 등등등
> 이걸 다 한번에 create-react-app이 해준다!!

</br>

- 하나의 명령어로 프로젝트를 set up 하게 해준다
> npx create-react-app [프로젝트명]

</br>

- 이후에 프로젝트 조작 기본 명령어들
> npm start </br>
> npm build </br>
> npm test </br>
> npm eject </br>

</br>

## 프로젝트를 위해 기본세팅

1. create-react-app 사용하여 movie_app 프로젝트&폴더 생성
2. README.md 파일에 프로젝트 인사말(?) 작성
3. movie_app/src/package.json 파일 수정

```json
scripts: {
    // 이 두개는 건들지 말고
    "start": ..., 
    "build": ...,

    // 이 두줄은 이번 프로젝트에서 안쓰이므로 삭제!
    "test": ...,
    "eject": ...
}
```

# 1.1 Creating a Github Repository
## 원격 레포지토리 생성후 업로드
- 간단하므로 생략
- 깃에대해 잘 모를경우 mastering Github 수업 들으라고함(자체강의)

# 1.2 How does React work?
- npm start를 한 상태에서는 코드 변경사항이 자동으로 반영된다!

- 기본적으로 index.html 내의 id가 root인 div 태그 안에, </br>
    App.js 내의 컴포넌트를 렌더링하도록 세팅되어있음!

- 리액트는 소스코드에 처음부터 html을 추가하지 않고 </br>
    html에서 html을 추가하거나 제거하는 방법을 가지고있다! </br>
    
- 따라서 빈 html인 index.html이 로드되고 그다음에 </br>
    컴포넌트로 작성한 것들을 리액트가 밀어넣는다!! </br>
    이것이 리액트가 빠른 이유!!

- 버츄얼DOM(가상DOM) 이라는 말은 최종 표시되는 html 상에는 각 컴포넌트가 있지만
</br>
    view-source 로 소스를 보면 없는?(index.html) 그래서 가상돔이다!라고 일축함

# PS
src 폴더내에 안쓰이는 파일들(App.css 등등)을 모두 삭제했음! 
</br>

실제로 나만의 프로젝트 만들때에도 초기설정때 다 정리해주면 도움될듯






