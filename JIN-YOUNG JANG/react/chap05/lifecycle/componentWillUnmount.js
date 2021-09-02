class MyComponent extends Component {

    componentDidMount() {
        const domNode = document.getElementById('someNode');

        // 초기화 작업에 이벤트를 특정 노드에 등록함
        domNode.addEventListener('change', this.onChange);
        domNode.addEventListener('dragstart', this.onDragStart);
    }

    componentWillUnmount() {
        const domNode = document.getElementById('someNode');

        // 컴포넌트가 소멸하기 직전에 이벤트를 모두 삭제해줌
        domNode.removeEventListener('change', this.onChange);
        domNode.removeEventListener('dragstart', this.onDragStart);
    }
}