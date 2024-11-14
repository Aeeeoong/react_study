import React from "react";

class ConfirmButtonClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed: false,
        }
        // 이벤트 핸들러 처리 : bind() 사용
        // this.handleConfirm = this.handleConfirm.bind(this)

    }
    //이벤트 핸들러 처리 : 화살표 함수 사용
    handleConfirm = () => {
        this.setState((preState) => ({
            isConfirmed: !preState.isConfirmed,
        }))
    }

    render() {
        return (
            <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        )
    }
}

export default ConfirmButtonClass