import { useState } from 'react'

function App() {
  const shopName = 'Jersey Shop Made with React JS'

  const [items, setItems] = useState([
    {
      id: 1,
      photo: 'real_madrid.webp',
      name: 'Real Madrid',
      price: 119.99,
      active: false,
      quantity: 1,
      isInBag: false,
    },
    {
      id: 2,
      photo: 'milan.png',
      name: 'Milan',
      price: 99.99,
      active: false,
      quantity: 1,
      isInBag: false,
    },
    {
      id: 3,
      photo: 'chelsea.webp',
      name: 'Chelsea',
      price: 99.99,
      active: false,
      quantity: 1,
      isInBag: false,
    },
    {
      id: 4,
      photo: 'barcelona.png',
      name: 'Barcelona',
      price: 109.99,
      active: false,
      quantity: 1,
      isInBag: false,
    },
    {
      id: 5,
      photo: 'benfica.png',
      name: 'Benfica',
      price: 89.49,
      active: false,
      quantity: 1,
      isInBag: false,
    },
    {
      id: 6,
      photo: 'manchester.webp',
      name: 'Manchester City',
      price: 129.79,
      active: false,
      quantity: 1,
      isInBag: false,
    },
    {
      id: 7,
      photo: 'bayern.webp',
      name: 'Bayern',
      price: 119.99,
      active: false,
      quantity: 1,
      isInBag: false,
    },
    {
      id: 8,
      photo: 'psg.png',
      name: 'PSG',
      price: 94.99,
      active: false,
      quantity: 1,
      isInBag: false,
    },
    {
      id: 9,
      photo: 'ajax.webp',
      name: 'Ajax',
      price: 89.99,
      active: false,
      quantity: 1,
      isInBag: false,
    },
  ])

  const addToBag = (id) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, isInBag: true } : item,
      ),
    )
  }

  const changeQuantity = (id, amount) => {
    setItems((currentItems) =>
      currentItems.map((item) => {
        if (item.id !== id) {
          return item
        }

        return {
          ...item,
          quantity: Math.max(1, item.quantity + amount),
        }
      }),
    )
  }

  const bagItems = items.filter((item) => item.isInBag)
  const orderTotal = bagItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  return (
    <>
      <section className="items">
        <h4>{shopName}</h4>

        {items.map((item) => (
          <div
            key={item.id}
            className={`product${item.isInBag ? ' selected' : ''}`}
            onClick={() => addToBag(item.id)}
          >
            <div className="photo">
              <img src={'./img/' + item.photo} />
            </div>
            <div className="description">
              <span className="name">{item.name}</span>
              <span className="price">$ {item.price}</span>
              {item.isInBag && (
                <div className="quantity-area">
                  <button
                    disabled={item.quantity <= 1}
                    onClick={(event) => {
                      event.stopPropagation()
                      changeQuantity(item.id, -1)
                    }}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    onClick={(event) => {
                      event.stopPropagation()
                      changeQuantity(item.id, 1)
                    }}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

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
            {bagItems.length === 0 && (
              <tr>
                <td colSpan="2">Your basket is empty</td>
              </tr>
            )}
            {bagItems.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.quantity}x {item.name}
                </td>
                <td>$ {(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
            <tr>
              <th>Total</th>
              <th>$ {orderTotal.toFixed(2)}</th>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}

export default App
