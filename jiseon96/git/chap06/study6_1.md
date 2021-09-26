## 6.1 새로운 작업

### 6.1.1 브랜치 작업

커밋은 파일의 수정이력을 관리하는데 사용한다면, <span style='background-color:#f5f0ff'>브랜치는 프로잭트를 독립적으로 관리하는데 사용한다.</span>

### 6.1.2 깃 브랜치 특징

브랜치의 특징:

- 가상 폴더
  깃의 브랜치는 작업 폴더를 실제로 사용하지 않고, <span style='background-color:#f5f0ff'>가상 폴더로 생성</span>한다.
  외부적으로는 <span style='background-color:#f5f0ff'>물리적인 파일 하나만 있는 것으로 보인다</span>
  브랜치로 생성된 가상 폴더는 <span style='background-color:#f5f0ff'>빠르게 공간이동이 가능하다</span>

- 독립적인 동작
  브랜치를 이용하면 <span style='background-color:#f5f0ff'>원본 폴더와 분리하여 독립적으로 개발 작업을 수행할 수 있다.</span>
  분리된 브랜치에서 소스 코드를 각자 수정한 수 원본 코드에 병합하는 명령만 실행하면 된다.
  깃의 브랜치는 <span style='background-color:#f5f0ff'>규모가 큰 코드 수정이나 병합을 처리할때 매우 유용하다.</span>

- 빠른 동작
  깃의 브랜치 기능은 다른 버전관리 도구보다 가볍고, 브랜치 전환이 빠른 것이 특징이다.
  깃은 <span style='background-color:#f5f0ff'>Blob 개념을 도입하여 내부를 구조화</span>한다.
  <span style='background-color:#f5f0ff'>Blob은 포인트와 유사한 객체</span>로 브랜치를 변경할 때 포인터를 이동하여 빠르게 전환한다.
  브랜치 명령을 사용하면 내부적으로 <span style='background-color:#f5f0ff'>커밋을 하나 생성하여 브랜치로 할당</span>한다.

---

## 6.2 실습 준비

### 6.2.1 저장소 생성 및 초기화

![](https://images.velog.io/images/jiseon96/post/df714f36-a13b-436e-8334-1abf8565d4f5/image.png)
<span style='background-color:#f5f0ff'>현재 브랜치가 master</span> 라는 것을 확인할 수 있다.

### 6.2.2 기본 브랜치

모든 커밋과 이력은 브랜치에 기록된다.
깃의 최소한 <span style='background-color:#f5f0ff'>브랜치가 1개 이상</span> 필요해서 저장소를 처음 초기화하면 <span style='background-color:#f5f0ff'>master 브랜치 하나가 자동생성</span>된다.
![](https://images.velog.io/images/jiseon96/post/b8ee5a82-8aff-4971-8ff7-628b9aa2e3f0/image.png)
status 명령어의 출력 결과 메세지에서 "On branch master"를 확인할 수 있다.
깃에서는 <span style='background-color:#f5f0ff'>현재 작업하는 브랜치 위치를 확인하는 것이 중요</span>하다.
`$ git status` 말고 `$ git branch` 명령어로도 확인이 가능하다.
깃에서 기본적으로 선택되는 브랜치는 master이지만 이름을 그대로 사용할 필요는 없다.

---

## 6.3 브랜치 생성

브랜치는 가상의 작업 폴더이고 <span style='background-color:#f5f0ff'>공통된 커밋을 가리키는 지점</span>이다.
브랜치는 <span style='background-color:#f5f0ff'>커밋처럼 SHA1 해시키</span>를 가리킨다.
커밋의 해시키는 기억하기 어려워 특정 커밋을 가리키는 별칭을 만들고 이것이 브랜치이다.
즉, 브랜치를 생성한다는 의미는 <span style='background-color:#f5f0ff'>기존 브랜치 또는 커밋에 새로운 연결고리를 하나 더 만드는 것</span>과 같다.
<span style='background-color:#f5f0ff'>새 브랜치를 생성하면 포인터만 있는 브랜치가 생성</span>된다.

### 6.3.1 브랜치 생성

브랜치는 깃에서 또 하나의 <span style='background-color:#f5f0ff'>개발 분기점</span>을 의미한다.
새로운 분기점이 필요할 때는 브랜치를 추가로 생성할 수 있고 생성 개수는 제한이 없다.
각 브랜치를 구분하려면 브랜치별로 이름을 지정해야한다.

브랜치 생성 명령어 : `$ git branch 브랜치이름 커밋ID`

branch 명령어 뒤에 브랜치 이름을 인자 값으로 추가한다.
브랜치 이름만 입력하면 현재 HEAD 포인터를 기준으로 새로운 브랜치를 생성한다.
![](https://images.velog.io/images/jiseon96/post/425b54ef-e475-4633-830b-32b107d1f57e/image.png)

### 6.3.2 브랜치 이름

브랜치 이름은 슬래시(/)를 이용하여 계층적인 구조로 만들어서 사용할 수 있다.

브랜치 이름의 규칙:

- 기호(-)로 시작할 수 없다.
- 마침표(.)로 시작할 수 없다.
- 연속적인 마침표(..)를 포함할 수 없다.
- 빈칸, 공백 문자, 물결(~), 캐럿(^), 물음표(?), 별표(\*), 대괄호([])등은 포함할 수 없다.
- 아스키 제어 문자는 포함할 수 없다.

<span style='background-color:#f5f0ff'>브랜치 이름은 중복해서 사용하지 않아야 한다.</span>
생성된 브랜치 이름과 동일한 이름으로 생성한다면 오류가 발생한다.
![](https://images.velog.io/images/jiseon96/post/9008ebda-5f3f-499b-9b8f-bc19ad65c603/image.png)

### 6.3.3 소스트리 브랜치

master 브랜치를 선택 > 마우스 오른쪽버튼 눌러 브랜치 메뉴를 선택 > 이름 작성 > 브랜치 생성

소스트리에서 커밋을 선택하여 브랜치를 생성하는 것은 <span style='background-color:#f5f0ff'>지정된 커밋을 기준으로 브랜치를 생성</span>한다는 의미이다.

master의 최종 커밋(HEAD)을 기준으로 브랜치를 생성할 때는 작업 사본 부모 항목을 선택한다.
![](https://images.velog.io/images/jiseon96/post/9174cff2-4e98-44ce-94a9-d1364a27503f/image.png)

---

## 6.4 브랜치 확인

### 6.4.1 간단 브랜치 목록

branch 명령어는 단독으로 실행할 수 있다.
`$ git branch`
![](https://images.velog.io/images/jiseon96/post/cda5d99c-6c79-44eb-bee9-83d3c0d0b1f7/image.png)
브랜치 앞 별표(\*)는 <span style='background-color:#f5f0ff'>현재 선택된 브랜치를 의미한다</span>
소스트리 목록에서는 동그라미(○)마크가 이동된 것을 확인할 수 있다.

### 6.4.2 브랜치 해시

브랜치는 특정한 <span style='background-color:#f5f0ff'>커밋의 해시 값(SHA1)을 가리킨다.</span>
`$ git rev-parse 브랜치이름` : 현재 브랜치가 어떤 커밋 해시 값을 가리키는지 확인
![](https://images.velog.io/images/jiseon96/post/d3d4b199-b6ee-42c3-a6e9-6016cc8e31b7/image.png)
<span style='background-color:#f5f0ff'>브랜치의 해시 값과 브랜치를 생성한 기준 커밋의 해시 값이 동일</span>하다.

### 6.4.3 브랜치 세부 사항 확인

`$ git branch -v` : 브랜치 이름, 커밋ID, 커밋메시지를 같이 볼 수 있다
![](https://images.velog.io/images/jiseon96/post/11fa1a80-11d0-42da-b69b-9c42f8efd858/image.png)

---

## 6.5 브랜치 이동

### 6.5.1 체크아웃

현재 브랜치를 떠나 새로운 브랜치로 들어간다는 의미이고 checkout명령어를 사용한다.
`$ git checkout 브랜치이름`
<span style='background-color:#f5f0ff'>깃은 하나의 워킹 디렉터리만 가지고 있다.</span>
다른 브랜치에서 작업하려면 <span style='background-color:#f5f0ff'>브랜치를 변경하여 워킹 디렉터리를 재설정</span>해야 한다.
![](https://images.velog.io/images/jiseon96/post/91bd7c9e-b805-4689-94ca-bb28b4dd8926/image.png)

체크아웃은 브랜치 외에 특정 커밋이나 파일로도 할 수 있다.

```git
$ git checkout 브랜치이름
$ git checkout -- 파일이름
```

### 6.5.2 브랜치 동작 원리

- HEAD 정보는 항상 변경된 브랜치의 마지막 커밋을 가리킨다.
  HEAD가 브랜치의 마지막 커밋을 의미하기 때문에 <span style='background-color:#f5f0ff'>브랜치가 이동하면 HEAD포인터도 함께 이동한다.</span>
- 변경된 브랜치로 새로운 작업을 할 수 있도록 위킹 디렉터리를 변경한다.
  브랜치를 변경하려면 <span style='background-color:#f5f0ff'>기존 브랜치의 워킹 디렉터리를 정리해야 한다.</span>

### 6.5.3 소스트리

![](https://images.velog.io/images/jiseon96/post/a7358e49-571f-49c1-8843-91f65c978e2a/image.png)
변경하고 싶은 브랜치를 클릭 > 체크아웃 master 클릭
![](https://images.velog.io/images/jiseon96/post/e9cd12d8-b4e8-4258-8a75-a0a42a48a944/image.png)
변경된 것을 확인 가능하다

### 6.5.4 이전 브랜치

이전 브랜치로 이동하는 방법:
` $ git checkout -`

리눅스에서 대시(-) 기호는 이전 디렉터리를 의미한다.
![](https://images.velog.io/images/jiseon96/post/4614574d-e94b-43d7-ad32-7f0f0ea4bb27/image.png)

### 6.5.5 워킹 디렉터리 정리

체크아웃을 사용하여 브랜치를 이동할 때는 <span style='background-color:#f5f0ff'>현재 작업하고 있는 워킹 디렉터리를 정리</span>하고 넘어가야한다.
![](https://images.velog.io/images/jiseon96/post/808f9c52-bd57-40d9-aebb-b75193cca132/image.png)
워킹 디렉터리에서 작업하다 커밋하지 않고 남겨둔 상태에서 다른 브랜치로 체크아웃하면 <span style='background-color:#f5f0ff'>브랜치 이동이 제한</span>된다.
<span style='background-color:#f5f0ff'>깃은 충돌을 방지하려고 워킹 디렉터리에 작업이 남아있다면 경고 메시지를 보여주고 브랜치를 변경할 수 없게 제한한다.</span>
작업된 워킹 디렉터리를 커밋하지 않고 브랜치를 변경할 때는 스태시 기능을 이용하면 좋다.

---
