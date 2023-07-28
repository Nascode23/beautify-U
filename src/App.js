
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Navbar} from './components/navbar';
import {} from './pages/cart/cart';
import {} from './pages/shop/shop';
import { ShopContextProvider } from './context/shop-context';


function App() {
  return (<div className="App">
    <ShopContextProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<shop />}/>
        <Route path="/cart" element={<cart />}/>
      </Routes>
    </Router>
    </ShopContextProvider>
  </div>
  );
}

export default App;
