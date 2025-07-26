import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './context/CartProvider';


function App() {
  return (
    <CartProvider>
    <Header/>
    <Meals/>
    </CartProvider>
    
  );
}

export default App;
