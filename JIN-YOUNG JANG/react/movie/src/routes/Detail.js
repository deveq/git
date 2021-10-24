import React from 'react';

class Detail extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props);
        const { location, history } = this.props;
        if (location.state === undefined) {
            // movie카드를 선택해서 온것이 아닌, 주소입력으로 들어왔을 경우
            // state가 없기때문에 redirect해줌
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <span>
                    {location.state.title}
                </span>
            )
        } else {
            return null;
        }
    }
}

export default Detail;