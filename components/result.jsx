import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resultReady: false,
        }
    }

    componentDidMount () {
        setTimeout(function () {
            this.setState({resultReady: true});
        }.bind(this), 2000);
    }

    render () {
        if (!this.state.resultReady) {
            return (
                <div class="pie-chart-spinner">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
                </div>
            )
        } else {
            return (
                <div class='calculator'>

                    <h1>Your take home pay is :</h1>

                    <h1>{this.props.takeHomePay}</h1>

                </div>
            ) 
        }

    }

}

export default Result;