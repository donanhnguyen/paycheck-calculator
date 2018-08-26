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
import calculatePayCheck from '../js/calculatePayCheck';

class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resultReady: false,
            frequency: 'annually',
        }
    }

    componentDidMount () {
        setTimeout(function () {
            this.setState({resultReady: true});
            createPieChart(this.props.takeHomePay);
        }.bind(this), 0);
    }

    render () {

        var totalPay = calculatePayCheck(this.props.grossPay, this.props.frequency);
        var takeHomePay = totalPay[0].amount;
        var taxes = totalPay[1].amount;
        var fica = totalPay[2].amount;

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
                    <h1>Your annual gross pay is : {this.props.grossPay}</h1>
                    <h1>Your take-home {this.props.frequency} pay is : {takeHomePay}</h1>

                    <div class='pay-options-container'>
                       <select class='pay-options' onChange={this.props.changeFrequency()}>
                            <option value="annually">Annually</option>
                            <option value="bi-weekly">Bi-Weekly</option>
                            <option value="weekly">Weekly</option>
                            <option value="daily">Daily</option>
                        </select> 
                    </div>

                    <div class='breakdown'>
                        <h1>Take Home Pay:</h1>
                        <p>{takeHomePay}</p>
                        <h1>Taxes:</h1>
                        <p>{taxes}</p>
                        <h1>FICA:</h1>
                        <p>{fica}</p>
                    </div>
                    
                    <div id='pie-chart'>
                    </div>
                </div>
            ) 
        }

    }

}

export default Result;