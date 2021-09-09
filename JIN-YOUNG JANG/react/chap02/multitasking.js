// 2-119 제너레이터 함수를 이용한 협업 멀티태스킹

function* minsu() {
    const myMsgList = [
        '안녕 나는 민수야',
        '만나서 반가워',
        '내일 영화 볼래?',
        '시간 안되니?',
        '내일 모레는 어때',
    ];

    for (const msg of myMsgList) {
        console.log('수지 : ', yield msg);
    }
}

function* suji() {
    const myMsgList = ['', '안녕 나는 수지야', '그래 반가워', '...'];
    const gen = minsu();
    for (const msg of myMsgList) {
        console.log('민수 : ', gen.next(msg).value);
    }
}

suji().next();


