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
            frequency: 'annually',
        }
    }

    componentDidMount () {
        setTimeout(function () {
            this.setState({resultReady: true});
            createPieChart(this.props.takeHomePay, this.state.frequency);
        }.bind(this), 0);
    }

    changeFrequency () {
        return (event) => {
            this.setState({
                frequency: event.currentTarget.value,
            });
        }
    }

    render () {

        var takeHomePay = this.props.takeHomePay[0].amount;
        var taxes = this.props.takeHomePay[1].amount;
        var fica = this.props.takeHomePay[2].amount;

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

                    <div class='pay-options-container'>
                       <select class='pay-options' onChange={this.changeFrequency()}>
                            <option value="annually">Annually</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="bi-weekly">Bi-Weekly</option>
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