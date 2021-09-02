class Box extends React.Component {
    state = {
        bodWidth : 0,
    };
    
    divRef = React.createRef();

    componentDidMount() {
        // componentDidMount가 호출되는 시점은 이미 리액트 요소가 DOM요소로 만들어진 시점이기때문에
        // DOM요소로부터 필요한 정보를 가져올 수 있다.

        // divRef를 통해 DOM에 직접 접근하여 width를 구함
        const rect = this.divRef.current.getBoundingClientRect();
        this.setState({boxWidth : rect.width});
    }

    render() {
        const { boxWidth } = this.state;
        const backgroundColor = boxWidth < 400 ? 'red' : 'blue';
        return (
            <div
                ref={this.divRef}
                style={{ width : '100%', height : '100px', backgroundColor}}
            >
                box    
            </div>
        )
    }
}