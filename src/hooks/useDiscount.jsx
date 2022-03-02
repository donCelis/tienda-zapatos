const useDiscount = (initialValue = 0, discount = 0) => {
  const initialfinalValue = (initialValue / 100) * discount

  const options = { style: 'currency', currency: 'USD' }

  const currency = new Intl.NumberFormat('en-US', options)
  const valueProduct = currency.format(initialValue)
  const finalValue = currency.format(initialfinalValue)

  return { valueProduct, discount, finalValue }
}
export default useDiscount
