import React from 'react'
import numeral from 'numeral'
const CurrencyFormat = (props) => {
  const { amount, currency = 'USD' } = props;
  return (
    <div>{numeral(amount).format('0,0.00')} {currency}</div>
  )
}

export default CurrencyFormat