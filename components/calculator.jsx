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
            salaryType: null,
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

    changeSalaryType(type) {
        if (type === 'hourly') {
            this.setState({salaryType: 'hourly'});
        } else {
            this.setState({salaryType: 'annually'})
        }
    }

    render () {
        console.log(this.state.takeHomePay);
        console.log(this.state.salaryType);
        if (!this.state.resultReady) {
            return (
                <div>
                    <form>

                        <input type="radio" name="salary" value="annually"/>Annually
                        <input type="radio" name="salary" value="hourly"/>Hourly
                        
                        <label for='pay'>Salary:</label><br/><br/>
                        <input id='pay' onChange={this.update('pay')} type='number' />

                        <br/><button onClick={this.calculatePay.bind(this)} class='qbutton'>Calculate</button>
                    </form>
                </div>
            )
        } else {
            return <Result takeHomePay={this.state.takeHomePay} grossPay={this.state.pay}/>
        }
        
    }

}

export default Calculator;