import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import createPieChart from '../js/createPieChart';

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
            createPieChart(this.props.takeHomePay);
        }.bind(this), 0);
    }

    render () {

        var takeHomePay = this.props.takeHomePay[0].amount;
        console.log(this.props.takeHomePay);
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
                    <h1>Your gross pay is : {this.props.grossPay}</h1>

                    <h1>Your take home pay is : {takeHomePay}</h1>

                    <div id='pie-chart'>

                    </div>
                </div>
            ) 
        }

    }

}

export default Result;