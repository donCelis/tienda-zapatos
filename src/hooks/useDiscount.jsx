const useDiscount = (initialValue = 0, discount = 0) => {
  const initialfinalValue = (initialValue / 100) * discount

  const options = { style: 'currency', currency: 'USD' }

  const currency = new Intl.NumberFormat('en-US', options)
  const convertCurrency = (valuePrice) => {
    return currency.format(valuePrice)
  }
  const valueProduct = convertCurrency(initialValue)
  const finalValue = convertCurrency(initialfinalValue)

  return {
    valueProduct,
    discount,
    finalValue,
    initialfinalValue,
    convertCurrency
  }
}
export default useDiscount
