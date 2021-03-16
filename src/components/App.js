import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';
import Option from './Option';
import Cf from './Cf';

class App extends React.Component {
    render(){
        return (
            <div style={ {textAlign: 'center'} }>
                <Counter/>
                <Option/>
                <Buttons/>
                <Cf/>
            </div>
        );
    }

}

export default App;