class UserInfo extends Component {


    componentDidUpdate(prevProps) {
        //didUpdate는 초기화작업에는 호출이 되지 않으므로
        const { user } = this.props;

        if (prevProps.user.id !== user.id) {
            this.setFriends(user)
        }
    }

    componentDidMount() {
        // 초기화 작업에 호출되는 didMount에도 친구목록 불러오기 함수를 실행시켜야함
        const { user } = this.props;
        this.setFriends(user);
    }

    setFriends(user) {
        requestFriends(user).then(friends => this.setState({friends}));
    }
}