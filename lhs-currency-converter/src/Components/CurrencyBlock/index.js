import React, {Component} from 'react';
import './index.css'

class CurrencyBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputValue: 1
         }

         this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        })
        this.props.handleChangeConvertedValue(event.target.value)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            inputValue: nextProps.convertedValue
        })
    }

    render() { 
        return ( 
            <div className="innerWrapper">
                <div className="conversionRate">1 {this.props.currency.currency} = {this.props.oppositeCurrency.rate / this.props.currency.rate} {this.props.oppositeCurrency.currency} </div>

                <div className="currency">
                    <form>
                        <select value={this.props.currency.fullName} onChange={this.props.handleChangeCurrenciesList}>
                            {this.props.currenciesList.map((items) => {
                                return <option key={items} value={items}>{items}</option>
                            })}
                        </select>
                    </form>
                </div>

                <div className="convertedValue">
                    <form>
                        <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
                    </form>
                </div>
            </div>
         )
    }
}
 
export default CurrencyBlock;