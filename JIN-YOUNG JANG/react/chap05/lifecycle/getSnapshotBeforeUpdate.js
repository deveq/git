class MyComponent extends Component {

    state = {
        items : [],
    };

    divRef = createRef(); // height 변경을 검사할 div요소의 ref 정의

    getSnapshotBeforeUpdate(prevProps, prevState) {

        //여기서 state는 이미 업데이트 된 state
        const { items } = this.state;

        if (prevState.items.length < items.length) {
            // 데이터가 추가되기 직전의 div의 height를 반환한다.
            const rect = this.divRef.current.getBoundingClientRect();
            return rect.height;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null) {
            // snapshot이 있을 경우 div의 height를 받는다
            const rect = this.divRef.current.getBoundingClientRect();
            // snapshot과 렌더링 이후의 div의 height가 다를 경우 높이가 변경되었음을 감지한다
            if (rect.height !== snapshot) {
                alert('새로운 줄이 추가되었습니다.');
            }
        }
    }

    onClick = () => {
        const { items } = this.state;
        this.setState({ items : [...items, '아이템']})
    };

    render() {
        const { items } = this.state;
        return (
            <>
                <button onClick={this.onClick}>추가하기</button>
                <div ref={this.divRef} style={{ widht: '100%'}}>
                    {items.map(item => <span style={{height : 50}}>{item}</span>)}
                </div>
            </>
        )
    }
}