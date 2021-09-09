// 2-116
// 제너레이터 함수끼리 호출하기
function* g1() {
    yield 2;
    yield 3;
}

function* g2() {
    yield 1;
    yield* g1();
    yield 4;
}

console.log(...g2());

// 2-117
// 반복가능한 객체를 처리하는 yield* 키워드

function* g2_second() {
    yield 1;

    // 116의 yield* g1()과 동일
    for (const value of g1()) {
        yield value;
    }
    //

    yield 4;
}

function* g2_third() {
    yield 1;
    // yield* 오른쪽에는 제너레이터 객체뿐만 아니라
    // 반복가능한 모든 객체가 가능하다
    yield* [2,3];
    yield 4;
}