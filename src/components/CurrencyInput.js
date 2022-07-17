import React from 'react'
import '../css/styles.css'



function CurrencyInput({currencies,amount,currType,onAmountChange,onCurrencyChange}) {
  return (
    <div className='currency-class'>
        <input type="number" className='inputClass' value={amount} onChange = {(e) => onAmountChange(e.target.value)}/>
        <select className='selectClass' value={currType} onChange = {(e) => onCurrencyChange(e.target.value)} >
        {
           currencies && currencies.map((currency,index) => (
                <option key={index} value={currency}>{currency}</option>
            ))
        }
                    
            
            
            
        </select>
    </div>
  )
}

export default CurrencyInput