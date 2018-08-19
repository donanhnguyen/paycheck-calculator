import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import Calculator from './calculator';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div class=''>
                <h1>Take-home Paycheck Calculator 2018</h1>
                <Calculator />
            </div>
        )
    }

}

export default HomePage;