## 4.6 두 번째 커밋

### 4.6.1 파일 수정

index.html에 `<h1>hello GIT world!<h1>` 만 추가하여 저장한다.

### 4.6.2 파일 변경 사항 확인

![](https://images.velog.io/images/jiseon96/post/8034b6d5-0a8b-4b79-bd6b-39474edbaf42/image.png) 파일을 수정한 후에는 modified: index.htm메시지가 출력된다.

![](https://images.velog.io/images/jiseon96/post/08212127-eff2-4814-a5d9-1461cb09c63d/image.png)왼쪽의 파일상태 탭을 선택하면 스테이지에 올라가지 않은 파일 목록에 방금 수정된 파일이 다시 등록된 것을 알 수 있다.

### 4.6.3 수정된 파일 되돌리기

파일을 수정하면 modified 상태로 변경된다.
파일 수정 전 상태로 되돌리고 싶다면 `$ git checkout -- 수정파일이름`을 입력하면 된다.
수정파일을 되돌리면 커밋 이후에 작업한 수정내역은 모두 삭제합니다.

### 4.6.4 스테이지에 등록

파일을 수정하면 해당 파일은 modified 상태로 변경되고 다시 워킹디렉터리로 이동한다.
파일이 수정되면 반드시 add명령어로 스테이지 영역에 재등록해야한다.

> $ git add 수정파일이름

![](https://images.velog.io/images/jiseon96/post/5d5ac123-b1e6-4435-b939-841f4856b95e/image.png)

### 4.6.5 두 번째 커밋

커밋과 동시에 간단하게 한 줄짜리 커밋 메시지를 작성할수 있다.(-m 옵션)

> $ git commit -m "커밋메시지"

![](https://images.velog.io/images/jiseon96/post/bfa152df-492a-4f20-a005-36ebf7c21a7f/image.png)

#### -m 옵션, -a 옵션

-a 옵션은 commit 명령어를 실행하기 전에 워킹 디렉터리에 있는 파일을 스테이지 영역으로 등록한다.
-m 옵션은 간단한 커밋 메시지를 함께 등록한다.
-am 옵션은 파일등록과 한줄짜리 커밋 메시지 등록을 동시에 처리한다.

> $git commit -am "커밋메시지"

-a 옵션은 이미 추적된 파일 상태가 되었을때만 함께 사용이 가능하다.
저장소를 새롭게 생성하고, **새파일을 작성한 후라면 -am옵션을 사용하여 커밋 할 수 없다.**
=> -am 명령어를 사용하기전에 먼저 add 명령어를 수행해야 한다.
![](https://images.velog.io/images/jiseon96/post/06edba6c-66b1-4546-9025-161ee282719a/image.png)소스트리 목록에는 커밋 메시지의 첫번째 요약줄만 표시된다.

### 4.6.6 두 번째 커밋 확인

![](https://images.velog.io/images/jiseon96/post/39f5ecf8-22a1-4e58-a39b-aa97a057d305/image.png)

---

## 4.7 메세지가 없는 빈 커밋

### 4.7.1 세 번째 커밋

#### --allow-empty-message 옵션

터미널에서 메시지가 없는 빈 커밋을 작성하려면 --allow-empty-message 옵션을 사용한다.
![](https://images.velog.io/images/jiseon96/post/9c337dee-3c37-4ef9-a292-906fd7b3f7b0/image.png)

### 4.7.2 소스트리에서 빈 커밋

커밋 메시지 입력란을 비워 놓고 커밋을 누르면 된다.
![](https://images.velog.io/images/jiseon96/post/55e3348b-d256-4610-ab3c-e90841d44ae8/image.png)

### 4.7.3 빈 커밋 확인

![](https://images.velog.io/images/jiseon96/post/2376f8b0-3607-4a45-926f-043db999ae8a/image.png)![](https://images.velog.io/images/jiseon96/post/b0f27a3d-7679-402c-9c1f-1587368222cd/image.png)

#### 메시지 수정

방금 전에 작성한 커밋 메시지를 수정하기 위해서는 --amend 옵션을 사용한다.

> $ git commit --amend

---

## 4.8 커밋 아이디

커밋 아이디는 특정 커밋을 가리키는 절대적 이름이고 명시적 참조 값이다.
커밋 아이디는 다수의 커밋을 구분할 수 있는 키이며, 브랜치나 태그 등에도 많이 사용한다.

### 4.8.1 SHA1

커밋 아이디가 복잡한 영어와 숫자로 된 이유는 깃이 SHA1이라는 해시 알고리즘을 사용하기 때문이다.
깃은 스테이지 영역의 변경된 내용을 기반으로 SHA1 해시키를 생성한다.
SHA1 해시는 중복되지 않은 고유의 키를 생성할 수 있는 장점이 있다.
깃이 SHA1해시를 이용하는 이유는 콘텐츠 추적과 분산형 저장관리를 운영하면서 충돌을 방지하기 위해서이다.

### 4.8.2 단축키

해시의 앞쪽 7자만으로도 중복을 방지하면서 전체 키 값을 사용할 수 있다.

---

## 4.9 커밋 로그

### 4.9.1 간략 로그

로그 옵션 중에서 --pretty=short를 사용하면 로그를 출력할 때 첫 번째 줄의 커밋 메시지만 출력한다.
![](https://images.velog.io/images/jiseon96/post/c561b44a-92df-4132-9d6b-d90e93cb33fb/image.png)
특정 커밋의 상세정보를 확인하고 싶으면 show명령어를 사용한다

> $ git show 커밋ID

### 4.9.2 특정 파일의 로그

특정 파일의 로그 기록만 보기 위해서는 log 명령어 뒤에 파일이름을 적어주면 된다.

#### log 명령어의 여러 옵션

- -p 옵션 : diff 기능(수정한 라인 비교)을 같이 포함하여 출력할 수 있다
- --start 옵션 : 히스토리를 출력한다
- --pretty=online 옵션 : 각 커밋을 한 줄로 표시한다

---

## 4.10 diff 명령어

### 4.10.1 파일 간 차이

깃은 커밋을 기준으로 파일들의 수정 이력을 비교해 볼 수 있는 diff기능을 제공한다.
diff 기능으로 파일의 수정 및 변경 내역을 쉽게 파악할 수 있다.

### 4.10.2 워킹 디렉터리 vs 스테이지 영역

add 명령어로 파일을 추가하지 않은 경우, 워킹 디렉터리와 스테이지 영역 간 변경 사항을 비교할 수 있다.

index.htm에 h2태그를 추가 후 diff명령어 사용
![](https://images.velog.io/images/jiseon96/post/9ea36559-1ee6-41f5-a9bd-2aeb57fd8d68/image.png) 워킹 디렉터리 내용과 스테이지 내용의 차이점을 출력한다.

변경한 파일을 add명령어로 추가하여 스테이지 영역에 등록한 후 diff명령어 수행하면 아무 내용도 출력되지 않는다.
![](https://images.velog.io/images/jiseon96/post/6b44f097-28cc-41f3-9ae7-24cb2158a184/image.png)등록 과정을 거쳐 워킹 디렉터리의 수정 내역을 스테이지 영역에 반영했기 때문이다

### 4.10.3 커밋 간 차이

스테이지 영역에 있는 수정된 파일을 아직 커밋하지 않았다면 최신커밋과 변경내용을 비교할 수 있다.
![](https://images.velog.io/images/jiseon96/post/fc0c1bc5-67a8-4e40-8a95-b9f7bd7be96d/image.png)
HEAD는 최근 커밋 중 가장 마지막 커밋의 위치를 가리키는 값으로 HEAD를 이용하면 최신커밋과 이전커밋을 비교하여 출력할 수 있다.

### 4.10.4 소스트리에서 간단하게 변경 이력 확인

![](https://images.velog.io/images/jiseon96/post/712a775e-5387-4806-bf9e-d0869fcc457d/image.png) +표시는 새롭게 추가된 내용의 의미하고 녹색으로 표시된다. -표시는 삭제된 내용을 의미하고 붉은 색으로 표시된다.

### 4.10.5 diff 내용을 추가하여 커밋

커밋 메시지를 작성할 때 -v 옵션을 같이 사용하면 vi에디터에서 diff내용을 추가할 수 있다.

> $ git commit -v

![](https://images.velog.io/images/jiseon96/post/bcd1fd7c-96bb-4679-9f47-047e5a3cf8b3/image.png)

---
