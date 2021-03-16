import React from 'react';
import { connect } from 'react-redux';
import { deletetext } from '../actions';

class Cf extends React.Component {
    render() {
        return (
            <div>
                <h1>{ this.props.value }</h1>
                <button type="button">
                        click!
                </button>
            </div>
        )
    }
}

//먼저 reducer 안에 있는 state.extra.value부터 가져와서 화면에 띄우고
//action 연결하셔서 버튼누르면 해당 변수의 값이 변하게 하시면 됩니다! ㅎㅎ

export default Cf;