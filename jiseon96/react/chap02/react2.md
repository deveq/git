# 2장. ES6+를 품은 자바스크립트, 매력적인 언어가 되다

## 2.1 변수를 정의 하는 새로운 방법: const, let

### 2.1.1 var가 가진 문제

#### - 첫번째 문제 : 함수 스코프

var의 첫 번째 문제는 정의된 변수가 함수 스코프를 가진다는 것이다.
var는 함수 스코프 이기 때문에 함수를 벗어난 영역에서 사용하면 에러가 발생한다.
![2-1 스코프를 벗어나서 변수를 사용하면 에러가 발생한다](https://images.velog.io/images/jiseon96/post/378fbf4e-c171-4eaf-b49b-53106f4bbf4a/image.png)

함수 안에서 var 키워드를 사용하지 않고 변수에 값을 할당하면 그 변수는 전역 변수가 된다.
![2-2 var 키워드 없이 변수를 정의하면 전역 변수가 된다](https://images.velog.io/images/jiseon96/post/30863633-e900-4731-aa37-05e2259ff1e5/image.png)

for 반복문에서 정의된 변수가 반복문이 끝난 이후에도 계속 남는다는 문제점이 있다.
for문, while문, switch문, if문 등 함수 내부에서 작성되는 모든 코드는 같은 문제가 있다
![2-3 for 문을 벗어나도 변수가 사라지지 않는다](https://images.velog.io/images/jiseon96/post/8c9c5a8f-e5f9-48d3-9e41-205a72ef9488/image.png)

var 변수의 스코프를 제한하기 위해 즉시 실행 함수를 사용하기도 한다.
하지만 즉시 실행 함수는 작성하기 번거롭고 가독성도 떨어진다.

#### - var의 두번째 문제 : 호이스팅

호이스팅이란 var로 정의된 변수는 그 변수가 속한 스코프의 최상단으로 끌어올려지는 것을 말한다.
변수를 정의 하기전에 사용했음에도 코드를 실행하면 에러가 발생하지 않는 문제가 생긴다.
![2-4 정의 되지 않은 변수 사용하기](https://images.velog.io/images/jiseon96/post/2f976c44-c3a2-4ff7-a6ab-ec9a98100d05/image.png)

![2-5 변수가 정의된 시점보다 먼저 변수 사용하기](https://images.velog.io/images/jiseon96/post/5ff4e80b-3d43-4c5e-8cfa-94081d04ddc0/image.png)

![2-6 호이스팅의 결과
](https://images.velog.io/images/jiseon96/post/0127d108-08a5-445e-a799-07d3b3ec5bad/image.png)

#### - var의 기타 문제들

var를 이용하면 한번 정의된 변수를 재정의 할 수 있다.
변수를 정의 한다는 것은 이전에 없던 변수를 생성한다는 의미로 통용된다.
변수가 재정의 될 수 있다는 것은 직관적이지 않으며 버그로 이어질 수 있다.
![2-7 변수가 정의된 시점보다 먼저 변수에 값을 할당하기](https://images.velog.io/images/jiseon96/post/4da7e28f-a0da-45f3-ae78-750af9f65bf3/image.png)
![2-8 var 변수는 재정의가 가능하다](https://images.velog.io/images/jiseon96/post/9562370f-9889-4317-8535-fd6bf1a08444/image.png)

또다른 문제는 var가 재할당 가능한 변수로 밖에 만들 수 없다는 점이다.
상수처럼 무조건 쓸 값도 무조건 재할당 가능한 변수로 만들어야한다.

### 2.1.2 var의 문제를 해결하는 const, let

#### - const, let은 블록 스코프다

블록 스코프에서 블록 안에서 정의 된 변수는 블록 안을 벗어나면 참조할 수 없다.
![2-9 블록 스코프에서는 블록을 벗어나면 변수를 사용할 수 없다](https://images.velog.io/images/jiseon96/post/932ebc6d-8597-401f-b400-6bcea1c6df82/image.png)

![2-10 블록 스코프에서 같은 이름을 갖는 변수의 사용 예](https://images.velog.io/images/jiseon96/post/1b2af28e-f9df-4f07-8a55-4cbf2b93e673/image.png)

#### - const, let에서의 호이스팅

const 또는 let으로 정의된 변수도 호이스팅되지만 변수를 정의하기 전에 그 변수를 사용하려고 하면 참조 에러가 발생한다.

![2-11 변수가 정의된 시점보다 먼저 변수를 사용할 수 없다](https://images.velog.io/images/jiseon96/post/4420c101-cd84-481d-bfd3-5a037d89f4ed/image.png)

임시적 사각지대란 변수가 정의된 위치와 호이스팅된 위치 사이를 말한다.
정의된 위치와 호이스팅된 위치 사이에서 변수를 사용하려고 하면 에러가 발생한다.

![](https://images.velog.io/images/jiseon96/post/c5005ffd-49aa-4e90-946a-b5c4043a2c01/image.png)

#### - const는 변수를 재할당 불가능하게 만든다

const로 정의된 변수는 재할당이 불가능하다.
하지만 let, var로 정의된 변수는 재할당 가능하다.
재할당 불가능한 변수는 프로그램의 복잡도를 낮춰 주기 때문에 되도록이면 const를 사용하는게 좋다.

재할당 불가능한 변수:

- const로 정의된 변수에 값을 재할당하면 에러가 발생한다
- 이미 존재하는 속상값을 수정하거나 새로운 속성값을 추가하는 것은 모두 가능하다.
- const로 정의 했다면 객체를 참조하는 변수 자체를 변경하는 것은 불가능하다.

객체의 내부 속성값도 수정 불가능하게 만들고 싶다면 immer, immutable.js등의 외부패키지를 활용하는 것이 좋다. => 외부 패키지는 객체를 수정하려고 할 때 기존 객체를 변경하지 않고 새로운 객체를 생성
새로운 객체를 생성하는 편의 기능은 필요 없고 단지 수정만 할 수 없도록 차단하고 싶다면 자바 스크립트 내장 함수를 이용하면 된다.

- Object.preventExtensions
- Object.seal
- Object.freeze

![2-14 const는 변수를 재할당 불가능하게 만든다](https://images.velog.io/images/jiseon96/post/2a460557-b68f-4281-b724-77113a0de895/image.png)

![2-15  const로 정의해도 객체의 내부 속성 값은 수정  가능하다](https://images.velog.io/images/jiseon96/post/c2b74f1c-b832-48ae-ab5d-e714f1bf6953/image.png)

![2-16 const로 정의된 변수에 재할당은 불가능하다](https://images.velog.io/images/jiseon96/post/914c0dfd-6027-46b6-b2fe-203b882f2591/image.png)

## 2.2 객체와 배열의 사용성 개선

### 2.2.1 객체와 배열을 간편하게 생성하고 수정하기

#### - 단축 속성명

단축속성명은 객체 리터럴 코드를 간편하게 작성할 목적으로 만들어진 문법

##### - 객체 리터럴이란 객체를 정의할 때 직접 속성명과 속성값을 하나하나 문자로 적어서 객체를 정의하는 것

![2-17 단축 속성명을 사용해서 객체를 생성하기](https://images.velog.io/images/jiseon96/post/f4ea3074-319e-4291-97f8-51a01e27822d/image.png)
새로 만들려는 객체의 속성값 일부가 이미 변수로 존재하면 간단하게 변수이름만 적어주면 된다.
(속성명은 변수 이름과 같아진다.)
속성값이 함수이면 function 키워드 없이 함수명만 적어도 된다.(속성명은 함수명과 같아진다.)
![2-18 속성명을 사용하지 않은 코드와 사용한 코드 비교하기](https://images.velog.io/images/jiseon96/post/9d058dff-e539-4cf3-b654-7cdf781135e0/image.png)
![2-19 콘솔로그 출력시 단축 속성명 활용하기](https://images.velog.io/images/jiseon96/post/d6691bb7-664a-4688-ac3b-0f928784028e/image.png)

#### - 계산된 속성명

계산된 속성명은 객체의 속성명을 동적으로 결정하기 위해 나온 문법이다.
계산된 속성명은 컴포넌트의 상탯값을 변경할 때 유용하게 쓸 수 있다.
![2-20 계산된 속성명을 사용하지 않은 코드와 사용한 코드 비교](https://images.velog.io/images/jiseon96/post/e5f4cf6a-37e2-4eb5-92e9-832bafdcb7b2/image.png)

### 2.2.2 객체와 배열의 속성값을 간편하게 가져오기

#### - 전개 연산자

전개 연산자는 배열이나 객체의 모든 속성을 풀어놓을 때 사용하는 문법으로 매개변수가 많은 함수를 호출할 때 유용하다.
전개 연산자를 사용하면 동적으로 함수의 매개변수를 전달할 수 있다.
![2-22 전개 연산자를 이용해서 함수의 매개변수를 입력하기](https://images.velog.io/images/jiseon96/post/d640c2cd-9fe7-4413-af64-03a990941946/image.png)
![2-24 전개 연산자를 이용해서 배열과 객체를 복사하기](https://images.velog.io/images/jiseon96/post/98178fa9-cdce-4940-b5c0-2b494f302f1e/image.png)
배열 리터럴에서 중간에 전개 연산자를 사용하면 전개 연산자 전후의 순서가 유지된다
![2-25 배열에서 전개 연산자를 사용하면 순서가 유지된다](https://images.velog.io/images/jiseon96/post/1eceecb2-736b-42cd-9a24-aac4a0368a52/image.png)

전개 연산자를 이용하면 서로 다른 두 배열이나 객체를 쉽게 합칠 수 있다.
![2-26 전개 연산자를 이용해서 두 객체를 병합하기](https://images.velog.io/images/jiseon96/post/16c49f8f-9305-4ae4-9913-58dba41088f9/image.png)

중복된 속성명 사용 시 최종 결과는 마지막 속성명의 값이 된다.
중복된 속성명과 전개 연산자를 이용하면 객체의 속성값을 변경할 때 이전 객체에 영향을 주지 않고 새로운 객체를 만들어 낼수 있다. => 수정 불가능하도록 관리할 때 사용

![2-27 객체 리터럴에서 중복된 속성명 사용 가능](https://images.velog.io/images/jiseon96/post/dfd93d44-ccf4-4e3b-8038-0b13577eec00/image.png)

#### - 배열 비구조화

배열 비구조화는 배열의 여러 속성값을 변수로 쉽게 할당할 수 있는 문법
새로운 변수로 할당할 수 있고 이미 존재하는 변수에 할당할 수도 있다.
![2-28 배열 비구조화를 사용한 간단한 코드](https://images.velog.io/images/jiseon96/post/a07a00f4-85da-4bb4-b8e2-624ff49bde6c/image.png)

배열의 속성값이 undefined라면 정의된 기본값이 할당되고, 그렇지 않으면 원래의 속성값이 할당된다.
![2-30 배열 비구조화에서의 기본값](https://images.velog.io/images/jiseon96/post/c0f200b9-496f-497f-ad24-ec22bfef44c8/image.png)

두 변수가 값을 교환할 때 배열 비구조화를 사용하면 된다.
![2-31 배열 비구조화를 이용해서 두 변수의 값을 교환하기](https://images.velog.io/images/jiseon96/post/fedef047-2f9c-4a0d-8547-24f7089fbfb5/image.png)

배열에서 일부 속성값을 무시하고 진행하고 싶다면 건너뛰는 개수만큼 쉼표를 입력하면 된다.
![2-32 쉼표를 이용해서 일부 속성값을 건너뛰기](https://images.velog.io/images/jiseon96/post/f49e2c51-88e3-4da0-8817-da7f545dc14d/image.png)

배열의 비구조화시 마지막에 ...와 함께 변수명을 입력하면 나머지 모든 속성값이 새로운 배열로 만들어진다.
나머지 속성값이 존재하지 않으면 빈 배열이 만들어진다.
![2-33 나머지 값을 별도의 배열로 만들기](https://images.velog.io/images/jiseon96/post/7bdc8da4-ba67-4ced-b09a-51e8f7127b3e/image.png)

#### - 객체 비구조화

객체 비구조화는 객체의 여러 속성값을 변수로 쉽게 할당 할 수 있는 문법이다.
객체 비구조화는 중괄호를 사용하고 배열 비구조화와는 다르게 순서는 무의미하다.
객체 비구조화는 기존 속성명을 그대로 사용해야 한다.
![2-35](https://images.velog.io/images/jiseon96/post/f9e0f027-669b-4ecb-aa54-2684db87aea3/image.png)
![2-35](https://images.velog.io/images/jiseon96/post/d76c0747-671e-49de-b585-140b4057ab79/image.png)
![2-35](https://images.velog.io/images/jiseon96/post/4b589373-3997-4603-ad14-d622fa11c58c/image.png)
객체 비구조화에서는 속성명과 다른 이름으로 변수를 생성할 수 있다. => 중복된 변수명을 피하거나 좀더 구체적인 변수명을 만들 때 좋다.
속성명 age의 값을 theAge에 할당했기 때문에 age를 출력할시 참조에러가 발생합니다.
![2-36 객체 비구조화에서 별칭 사용하기](https://images.velog.io/images/jiseon96/post/1f694355-c409-4d64-bd13-06a615e51694/image.png)

객체 비구조화에서도 기본 값을 정의할 수 있고 속성값이 undefined이면 기본값이 들어가고, null이면 기본값은 들어가지 않는다.
![2-37 객체 비구조화에서의 기본값](https://images.velog.io/images/jiseon96/post/d15c46fd-30d0-43be-86fd-f84021d77a7a/image.png)

기본값을 정의 하면서 별칭을 함께 사용할 수 있다.
![2-38 기본값과 별칭 동시에 사용하기](https://images.velog.io/images/jiseon96/post/ed78ae6c-273c-4d81-8dff-41db8c64f1c3/image.png)

기본값으로 함수의 반환값을 넣을 수 있다
기본값이 사용될 때만 함수가 호출된다.
![2-39 함수를 이용한 기본값](https://images.velog.io/images/jiseon96/post/b97360c5-e096-483a-b242-821bd9709371/image.png)

객체 비구조화에서도 사용되지 않은 나머지 속성들을 별도의 객체로 생성할 수 있다.
![2-40 객체 비구조화에서 나머지 속성들을 별도의 객체로 생성하기](https://images.velog.io/images/jiseon96/post/4c3ab360-0108-4b75-8a3b-f866423b67e2/image.png)

for문에서 객체를 원소로 갖는 배열을 순회할 때 객체 비구조화를 사용하면 편리하다.
![2-41 for문에서 객체 비구조화를 이용한 예](https://images.velog.io/images/jiseon96/post/0da45dac-b293-4e13-a0cf-7d0f87f22aa3/image.png)

#### - 비구조화 심화학습

비구조화는 객체와 배열이 중첩되어 있을 때도 사용할 수 있다.
![2-42 중첩된 객체의 비구조화 사용 예](https://images.velog.io/images/jiseon96/post/34f10c28-fc84-4317-b3b9-040ba84ff2c9/image.png)=> 비구조화 결과로 motherName이라는 변수만 생성되기 때문이다.

비구조화에서 기본값의 정의는 변수로 한정되지 않는다.
![2-43 기본값은 변수 단위가 아니라 패턴 단위로 적용된다](https://images.velog.io/images/jiseon96/post/089ad934-0cb4-4f74-b71d-190509a00b05/image.png)=>첫번째 원소가 존재하지 않아서 기본값이 할당된다.

배열의 첫번째 원소가 존재하므로 기본값이 할당되지 않는다.
![](https://images.velog.io/images/jiseon96/post/db9ade6f-7561-48bb-adef-b106725151bc/image.png)

객체 비구조화에서도 계산된 속성명을 활용할 수 있다.
객체 비구조화에서 계산된 속성명을 사용할 때에는 반드시 별칭을 입력해야한다
별칭은 단순히 변수명만 입력할 수 있는 것은 아니다

![2-44 객체 비구조화에서 계산된 속성명 사용하기](https://images.velog.io/images/jiseon96/post/08e5779b-fe4b-4587-91b0-9cc3fa32a101/image.png)

![2-45 별칭을 이용해서 다른 객체와 배열의 속성값 할당](https://images.velog.io/images/jiseon96/post/e8b64644-7fb2-4e59-ac58-8130a3e5f6e7/image.png)

## 2.3 강화된 함수의 기능

### 2.3.1 매개변수에 추가된 기능

#### - 매개변수 기본값

입력값이 undefined인 경우에만 기본 값이 적용된다
![2-46 매개변수에 기본값 주기](https://images.velog.io/images/jiseon96/post/8a49eb7b-7772-4f99-b16b-cbce32a6c2d7/image.png)
![2-47 매개변수 기본값으로 함수 호출 사용하기](https://images.velog.io/images/jiseon96/post/31291f12-aa9c-4969-9559-2860dcedcaba/image.png)
매개변수값이 없으면 required함수에서 예외가 발생하기 때문에 매개변수 a는 필숫값이 된다.
![2-48 매개변수 기본값을 이용해서 필숫값을 표현하는 방법](https://images.velog.io/images/jiseon96/post/477075d6-a75b-48fa-bbc3-c747df599c53/image.png)

#### - 나머지 매개변수

나머지 매개변수는 입력된 인수 중에서 정의된 매개변수 개수만큼을 제외한 나머지를 배열로 만들어준다=> 매개변수 개수가 가변적일 때 유용
ES5에서의 arguments 키워드와 비슷한 역할을 한다.
![2-49 나머지 매개변수를 사용한 코드](https://images.velog.io/images/jiseon96/post/afd94a26-f601-40d5-b678-973e786b560d/image.png)
arguments의 존재가 명시적으로 드러나지 않기 때문에 가독성이 좋지 않다.
arguments는 배열이 아니기 때문에 배열처럼 사용하기 위해서는 배열로 변환하는 과정이 필요하다는 단점이 있다.
![2-50 arguments 키워드로 나머지 매개변수 따라 하기](https://images.velog.io/images/jiseon96/post/7d31b67a-bf31-4358-8711-ce0daab8d0c6/image.png)

#### - 명명된 매개변수

명명된 매개변수는 객체 비구조화를 이용해서 구현할 수 있다.
함수 호출시 매개변수의 이름과 값을 동시에 적을 수 있으므로 가독성이 높다
![2-51 명명된 매개변수의 사용 여부에 따른 가독성 비교](https://images.velog.io/images/jiseon96/post/2d513e7a-0012-45a8-a759-2cf6e849ef09/image.png)
명명된 매개변수를 이용하면 선택적 매개변수의 활용도가 올라간다.
선택적 매개변수란 필숫값과 반대되는 의미로 있어도 되고 없어도 되는 매개변수를 말한다.
필요없는 매개변수 자리에 undefined를 넣으면 된다. => 이 방법은 매개변수 갯수가 많아지면 관리하기 힘들어진다.
![2-52 명명된 매개변수의 사용여부에 따른 선택적 코드 비교](https://images.velog.io/images/jiseon96/post/00b90e4b-ef1a-4dbf-8bf2-e670b17187f6/image.png)
명명된 매개변수를 사용하면 함수를 호출할 때마다 객체가 생성되기 때문에 비효율적일 것이라고 생각할 수 있지만 자바스크립트 엔진이 최적화를 통해 새로운 객체를 생성하지 않으므로 안심하고 사용해도된다.

### 2.3.2 함수를 정의하는 새로운 방법: 화살표 함수

화살표 함수를 이용해 함수를 간결하게 작성할 수 있다.
![2-53 화살표 함수의 사용 예](https://images.velog.io/images/jiseon96/post/4f791622-4c77-42e7-9077-8476966399d4/image.png)

#### - 화살표 함수의 코드가 여러 줄인 경우

화살표에 여러줄의 코드가 필요하다면 전체를 중괄호로 묶고 반환값에는 return 키워드를 사용한다.
![2-54 코드가 두 줄 이상인 화살표 함수](https://images.velog.io/images/jiseon96/post/0aa2ae64-161d-4321-b164-db936fbc96df/image.png)

#### - this와 argument가 바인딩되지 않는 화살표 함수

화살표 함수는 this와 arguments가 바인딩되지 않는다.
화살표 함수에서 arguments가 필요하다면 나머지 매개변수를 이용해야한다.
![5-55 화살표 함수에서 나머지 매개변수 사용하기](https://images.velog.io/images/jiseon96/post/3ed56e70-c1dd-4650-978d-a766399b92b7/image.png)

#### - 일반 함수에서 this 바인딩 때문에 버그가 발생하는 경우

일반 함수에서 this는 호출 시점에 사용된 객체로 바인딩이 된다.
객체에 정의된 일반 함수를 다른 변수에 할당해서 호출하면 버그가 발생할 수 있다.
![2-56 this 바인딩 때문에 버그가 발생한 경우](https://images.velog.io/images/jiseon96/post/ac313489-14dd-49ea-bb49-6d31a24aa81f/image.png)

#### - 생성자 함수 내부에서 정의된 화살표 함수의 this

생성자 내부에서 정의된 화살표 함수의 this는 생성된 객체를 참조한다
![2-57생성자 함수 내부에서 화살표 함수 사용하기](https://images.velog.io/images/jiseon96/post/3c5d2323-bf86-490f-8bdc-46c5ecd78c4e/image.png)

#### - setInterval 함수 사용시 this 바인딩 문제

![2-58 setInterval 함수에서 this 객체 사용시 버그 발생](https://images.velog.io/images/jiseon96/post/f8290648-2a76-4548-a7fe-58bf2a3b9c7b/image.png) => setInterval 함수의 인수로 들어간 increase함수는 전역환경에서 실행되기 때문에 this는 window 객체를 참조해서 obj.value는 증가하지 않는다
![2-59 setInterval 함수에서 객체를 참조하기 위해 편법 사용](https://images.velog.io/images/jiseon96/post/e5e7977f-f8dd-4a3a-9c51-c40b8d1d5b0a/image.png)
클로저

- 함수가 생성되는 시점에 접근 가능했던 변수들을 생성 이후에도 계속해서 접근 할 수 있게 해주는 기능이다.
- 접근할 수 있는 변수는 그 함수를 감싸고 있는 상위 함수들의 매개변수와 내부 변수들이다.
  ![2-60 클로저를 사용한 간단한 코드](https://images.velog.io/images/jiseon96/post/82bec006-52f4-427c-ae00-d3f468d9ba09/image.png)
  화살표 함수로 정의하면 this는 생성된 객체를 가리키기 때문에 setInterval함수와 상관없이 obj를 참조한다
  ![2-61 setInterval 함수에서 this 객체를 참조하기 위해 화살표 함수 사용하기](https://images.velog.io/images/jiseon96/post/8230a1be-49e0-41aa-afbc-169959256870/image.png)
