import { useAppContext } from '../context/useAppContext.js'
import ProductCard from './ProductCard.jsx'

function ProductGrid() {
  const { shopName, items, toggleItemInBag, updateItemQuantity } =
    useAppContext()

  return (
    <section className="items">
      <h4>{shopName}</h4>

      {items.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          onToggleBag={() => toggleItemInBag(item.id)}
          onChangeQuantity={(amount) => updateItemQuantity(item.id, amount)}
        />
      ))}
    </section>
  )
}

export default ProductGrid
