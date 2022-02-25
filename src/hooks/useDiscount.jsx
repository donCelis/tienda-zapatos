import { useState } from 'react'

const useDiscount = (initialValue, discount) => {
  const [moneda, setMoneda] = useState('en-US')
  const initialfinalValue = (initialValue / 100) * discount

  const options = { style: 'currency' }
  switch (moneda) {
    case 'en-US':
      options.currency = 'USD'
      break
    case 'de-DE':
      options.currency = 'EUR'
      break
  }

  const currency = new Intl.NumberFormat(moneda, options)
  const valueProduct = currency.format(initialValue)
  const finalValue = currency.format(initialfinalValue)

  return { valueProduct, discount, finalValue, setMoneda }
}
export default useDiscount
