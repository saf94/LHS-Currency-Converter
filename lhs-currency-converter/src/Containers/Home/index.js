import React, { Component } from 'react';
import CurrencyBlock from '../../Components/CurrencyBlock'
import currencies from '../../currencies.json';
import './index.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currenciesList: [],
            leftConversionRate: 0,
            leftCurrency: currencies[1],
            leftConvertedValue: 1.2234,
            rightConversionRate: 0,
            rightCurrency: currencies[0],
            rightConvertedValue: 1,
         }
    }

    currenciesList = () => {
        let currenciesArray = [];
        currencies.map((items) => {
            currenciesArray.push(items.fullName)
        })

        this.setState({
            currenciesList: currenciesArray
        })
    }

    leftHandleChangeCurrenciesList = (event) => {
        currencies.map((items) => {
            if (items.fullName === event.target.value) {
                let newRightValue = (this.state.leftConvertedValue / items.rate) * this.state.rightCurrency.rate;
                this.setState({
                    leftCurrency: items,
                    rightConvertedValue: newRightValue
                })
            }
        })
    }

    rightHandleChangeCurrenciesList = (event) => {
        currencies.map((items) => {
            if (items.fullName === event.target.value) {
                let newLeftValue = (this.state.rightConvertedValue / items.rate) * this.state.leftCurrency.rate;
                this.setState({
                    rightCurrency: items,
                    leftConvertedValue: newLeftValue
                })
            }
        })
    }

    lefthandleChangeConvertedValue = (inputValue) => {
        this.setState({
            leftConvertedValue: inputValue
        })
    }

    righthandleChangeConvertedValue = (inputValue) => {
        this.setState({
            rightConvertedValue: inputValue
        })
    }

    

    componentDidMount() {
        this.currenciesList();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.leftConvertedValue !== nextState.leftConvertedValue) {
            let newRightValue = (nextState.leftConvertedValue / nextState.leftCurrency.rate) * nextState.rightCurrency.rate;
            this.setState({
                rightConvertedValue: newRightValue
            })
        }

        if (this.state.rightConvertedValue !== nextState.rightConvertedValue) {
            let newLeftValue = (nextState.rightConvertedValue / nextState.rightCurrency.rate) * nextState.leftCurrency.rate;
            this.setState({
                leftConvertedValue: newLeftValue
            })
        }
        return true;
    }
    
    render() { 
        return ( 
            <div className="container">
                <h1>Currency Converter</h1>
                <div class="wrapper">
                    <CurrencyBlock conversionRate={this.state.leftConversionRate} currency={this.state.leftCurrency} oppositeCurrency={this.state.rightCurrency} convertedValue={this.state.leftConvertedValue} currenciesList={this.state.currenciesList} handleChangeCurrenciesList={this.leftHandleChangeCurrenciesList} handleChangeConvertedValue={this.lefthandleChangeConvertedValue}/>
                    <img src='repeat.png' />
                    <CurrencyBlock conversionRate={this.state.rightConversionRate} currency={this.state.rightCurrency} oppositeCurrency={this.state.leftCurrency} convertedValue={this.state.rightConvertedValue} currenciesList={this.state.currenciesList} handleChangeCurrenciesList={this.rightHandleChangeCurrenciesList} handleChangeConvertedValue={this.righthandleChangeConvertedValue}/>
                </div>
            </div>
         )
    }
}
 
export default Home;