import { useState,useEffect } from 'react';
import './App.css';
import CurrencyInput from './components/CurrencyInput';

function App() {
  const [amount1,setAmount1] = useState()
  const [amount2,setAmount2] = useState()
  const [currencyType1, setCurrencyType1] = useState('USD')
  const [currencyType2, setCurrencyType2] = useState('USD')
  const [rates,setRates] = useState([])

// var myHeaders = new Headers();
// myHeaders.append("apikey", "aJ0bN1mEPqDN2uvrd3HdVZsHWO5v55bq");


// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

useEffect(() => {

  fetch(
  "https://v1.nocodeapi.com/ritesh1234/cx/mvQxVLImQQQmanYq/rates")
  .then(response => response.json())
  .then(data => setRates(data.rates))

  
}, [])


function handleAmount1Change(amount1){
  
  setAmount2(amount1 * rates[currencyType2] / rates[currencyType1])
  setAmount1(amount1)
}

function handleCurrency1Change(currencyType1){
  setAmount2(amount1 * rates[currencyType2] / rates[currencyType1])
  setCurrencyType1(currencyType1)

}

function handleAmount2Change(amount2){
  setAmount1(amount2 * rates[currencyType1] / rates[currencyType2])
  setAmount2(amount2)
}

function handleCurrency2Change(currencyType2){
  setAmount1(amount2 * rates[currencyType1] / rates[currencyType2])
  setCurrencyType2(currencyType2)

}


  return (
    <div className="App">
      <CurrencyInput currencies={Object.keys(rates)} amount = {amount1} currType = {currencyType1} onAmountChange = {handleAmount1Change} onCurrencyChange = {handleCurrency1Change} />
      <CurrencyInput currencies={Object.keys(rates)}  amount = {amount2} currType = {currencyType2} onAmountChange={handleAmount2Change} onCurrencyChange = {handleCurrency2Change}/>
    </div>
  );
}

export default App;
