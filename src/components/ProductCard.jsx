import PropTypes from 'prop-types'

function ProductCard({ item, onToggleBag }) {
  return (
    <div
      className={`product${item.isInBag ? ' selected' : ''}`}
      onClick={onToggleBag}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onToggleBag()
        }
      }}
      role="button"
      tabIndex="0"
    >
      <div className="photo">
        <img src={'./img/' + item.photo} alt={item.name} />
      </div>
      <div className="description">
        <span className="name">{item.name}</span>
        <span className="price">$ {item.price}</span>
        {item.isInBag && (
          <div className="quantity-area">
            <button disabled={item.quantity <= 1}>-</button>
            <span className="quantity">{item.quantity}</span>
            <button>+</button>
          </div>
        )}
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isInBag: PropTypes.bool.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onToggleBag: PropTypes.func.isRequired,
}

export default ProductCard
