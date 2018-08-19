import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import calculatePayCheck from '../js/calculatePayCheck';
import Result from './result';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pay: 0,
            resultReady: false,
            takeHomePay: 0,
        }
    }

    update (field) {
        return (event) => {
            this.setState({
                [field]: parseInt(event.currentTarget.value)
            })
        }
    }

    calculatePay () {
        this.setState({
            takeHomePay: calculatePayCheck(this.state.pay),
            resultReady: true
        })
    }

    render () {
        if (!this.state.resultReady) {
            return (
                <div class='calculator'>
                    <form>
                        <label for='pay'>Salary:</label><br/><br/>
                        <input id='pay' onChange={this.update('pay')} type='number' />

                        <br/><button onClick={this.calculatePay.bind(this)} class='qbutton'>Calculate</button>
                    </form>
                </div>
            )
        } else {
            return <Result takeHomePay={this.state.takeHomePay}/>
        }
        
    }

}

export default Calculator;