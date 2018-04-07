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
        console.log("inputvalue", this.state.inputValue)
        return ( 
            <div>
                <div className="conversionRate">1 {this.props.currency.currency} = {this.props.conversionRate} </div>

                <div className="currency">
                    {/* {this.props.currenciesList} */}
                    <form>
                        <select value={this.props.currency.fullName} onChange={this.props.handleChangeCurrenciesList}>
                            {this.props.currenciesList.map((items) => {
                                return <option key={items} value={items}>{items}</option>
                            })}
                            {/* <option value="grapefruit">Grapefruit</option> */}
                        </select>
                    </form>
                </div>

                <div className="convertedValue">
                    {/* {this.props.convertedValue} */}
                    <form>
                        <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
                    </form>
                </div>
            </div>
         )
    }
}
 
export default CurrencyBlock;

// const CurrencyBlock = (this.props) => {
//     return (
//         <div>
//             <div className="conversionRate">1 {this.props.currency.currency} = {this.props.conversionRate} </div>
            
//             <div className="currency">
//                 {/* {this.props.currenciesList} */}
//                 <form>
//                          <select value={this.props.currency.fullName} onChange={this.props.handleChangeCurrenciesList}>
//                             {this.props.currenciesList.map((items) => {
//                                 return <option key={items} value={items}>{items}</option>
//                             })}
//                             {/* <option value="grapefruit">Grapefruit</option> */}
//                         </select>
//                 </form>
//             </div>
            
//             <div className="convertedValue">
//                 {/* {this.props.convertedValue} */}
//                 <form>
//                     <input type="text" defaultValue={this.props.convertedValue} onChange={this.props.handleChangeConvertedValue} />
//                 </form>
//             </div>
//         </div>
//     )
// }
 
// export default CurrencyBlock;