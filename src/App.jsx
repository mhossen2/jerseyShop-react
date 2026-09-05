import OrderSummary from './components/OrderSummary.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import AppProvider from './context/AppProvider.jsx'

function App() {
  return (
    <AppProvider>
      <ProductGrid />
      <OrderSummary />
    </AppProvider>
  )
}

export default App
