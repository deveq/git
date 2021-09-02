class MyComponent extends Component {
    state = {
        text : '',
    };

    divRef = createRef();

    componentDidUpdate() {
        const div = this.divRef.current;
        const rect = div.getBoundingClientRect();

        // div요소의 width보다 스크롤의 width가 더 크면 스크롤이 가능하다 알려줌
        if (div.scrollWidth > rect.width) {
            alert('스크롤이 가능합니다.');
        }
    }

    onChange = event => {
        const text = event.target.value;
        this.setState({ text });
    };

    render() {
        const { text } = this.state;
        return (
            <>
                {/* this.state.text가 충분히 길어지면 div요소 내부는 스크롤이 가능해진다. */}
                <input onChange={this.onChange} value={text} />
                <div
                    ref={this.divRef}
                    style={{ width: 100, height: 100, overflow : 'scroll'}}
                >
                    {text}
                </div>
            </>
        )
    }
}