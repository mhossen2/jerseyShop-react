import { useAppContext } from '../context/useAppContext.js'

function OrderSummary() {
  const { items } = useAppContext()
  const basketItems = items.filter((item) => item.isInBag)
  const orderTotal = basketItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  return (
    <section className="summary">
      <strong>Order Summary</strong>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {basketItems.length === 0 ? (
            <tr>
              <td colSpan="2">Your basket is empty</td>
            </tr>
          ) : (
            basketItems.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.quantity}x {item.name}
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))
          )}

          <tr>
            <th>Total</th>
            <th>${orderTotal.toFixed(2)}</th>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default OrderSummary
