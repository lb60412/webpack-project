'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {
    DatePicker,
    Button
} from 'antd';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
            <div>
                <DatePicker style = {{ width: '100px' } }/> 
                <Button> click </Button>
            </div>
        );
    }
}

ReactDOM.render( 
    <App /> ,
    document.querySelector('.app')
)