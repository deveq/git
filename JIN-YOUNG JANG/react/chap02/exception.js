// 2-121 제너레이터 함수에서 예외가 발생한 경우

function* genFunc() {
    throw new Error('some error');
}

function func() {
    const gen = genFunc();
    try {
        gen.next();
    } catch (error) {
        console.log('in catch : ',error);
    }
}
func();