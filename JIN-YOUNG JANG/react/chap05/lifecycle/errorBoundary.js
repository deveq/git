class ErrorBoundary extends Component {
    state = { error : null };
    static getDerivedStateFromError(error) {
        return { error }; // 자식컴포넌트에서 발생한 에러를 상태값에 저장
    }

    componentDidCatch(error, info) {
        sendErrorToServer(error,info); // 에러를 서버로 전송
    };

    render() {
        const { erorr } = this.state;
        if (error) { // 에러정보가 있다면 그 정보를 렌더링하고
            return <div>{error.toString()}</div>
        } // 없다면 자식을 렌더링한다.
        return this.props.children;
    }
}

class Counter extends Component {
    state = { count : 0 };
    onClick = () => {
        const { count } = this.state;
        this.setState({count : count + 1})
    }

    render() {
        const { count } = this.state;
        if (count >= 3) {
            throw new Error('에러발생');
        }
        return <div onClick={this.onClick}>{`클릭하세요(${count})`}</div>
    }
}

const App = () => {
    return (
        //자식을 감싸는 최상위 컴포넌트로 두게되면
        // 자식의 생명주기 중 에러 발생시 처리할 수 있음
        <ErrorBoundary>
            <Counter />
        </ErrorBoundary>
    )
}