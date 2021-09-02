const requestData = () => {
    const p = new Promise((resolve, reject) => {
        const data = '넘겨줄 데이터';
        resolve(data);
    })

    return p;
}

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.dataPromise = requestData();
    }
    componentDidMount() {
        this.dataPromise.then(data => this.setState({data}))
    }
}