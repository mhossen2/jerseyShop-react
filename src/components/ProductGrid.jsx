import PropTypes from 'prop-types'
import ProductCard from './ProductCard.jsx'

function ProductGrid({ shopName, items }) {
  return (
    <section className="items">
      <h4>{shopName}</h4>

      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  )
}

ProductGrid.propTypes = {
  shopName: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ProductGrid
