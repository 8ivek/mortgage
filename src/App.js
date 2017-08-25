import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
	    this.state = {
		    principle: '',
		    interest_rate: '',
		    years: ''
	    }
    }
	
	handleChange = (e) => {
        let newState = {};
		newState[e.target.name] = e.target.value;
		this.setState(newState);
	};
 
    calculateFunction = () => {
	    let formData = {
		    formPrinciple: this.state.principle,
		    formInterestRate: this.state.interest_rate,
		    formYears: this.state.years
	    }
	
	    if(!isNaN(formData.formPrinciple) && !isNaN(formData.formInterestRate) && !isNaN(formData.formYears)){
		    var r = (formData.formInterestRate / 1200);
		    var n = formData.formYears * 12;
		    var top = r * Math.pow((1+r),n);
		    var bottom = (Math.pow((1+r),n))-1;
		    var m = formData.formPrinciple * (top/bottom);
		    this.refs.calc_result.innerHTML = 'Result: '+ m.toFixed(2);
	    }else{
		    return false;
	    }
    };
	
	handleSubmit = (e, message) => {
		e.preventDefault();
		this.calculateFunction();
	};
	
    render() {
        return (
          <div className="App">
            <div className="App-header">
              <h2>Mortgage Calculator</h2>
            </div>
            <div className="App-intro">
                <form className='react-form' onSubmit={this.handleSubmit}>
                <table className="table" width="100%" cellPadding={0} cellSpacing={0} frameBorder={0}>
                    <tbody>
                        <tr>
                            <td>Principle:</td>
                            <td className="text-left"><input className='form-input' type="text" name="principle" value={this.state.principle} required onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Interest Rate:</td>
                            <td className="text-left"><input className='form-input' type="text" name="interest_rate" value={this.state.interest_rate} required onChange={this.handleChange} /> %</td>
                        </tr>
                        <tr>
                            <td>Time:</td>
                            <td className="text-left"><input className='form-input' type="text" name="years" value={this.state.years} required onChange={this.handleChange} /> years</td>
                        </tr>
                        <tr>
                            <td colSpan={2}><span contentEditable='true' ref='calc_result'></span></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="text-left"><input className='btn' type="submit" name="calculate" value="Calculate" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            </div>
          </div>
        );
    }
}

export default App;
