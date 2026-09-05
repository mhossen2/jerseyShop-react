function OrderSummary() {
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
          <tr>
            <td>1x --</td>
            <td>$ --</td>
          </tr>

          <tr>
            <th>Total</th>
            <th>$ --</th>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default OrderSummary
