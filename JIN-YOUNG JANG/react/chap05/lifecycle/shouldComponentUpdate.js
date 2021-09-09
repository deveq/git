class MyComponent extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        
        // state에 저장되어있던 prev값을 가져옴
        const { price } = this.state;
        
        // prev와 새로운 state의 price가 다를 경우만 update되도록 처리
        // true일 경우 리액트가 가상돔 수준에서 변경된 내용이 있는지 비교한다.
        return price !== nextState.price;

    }
    //...
}