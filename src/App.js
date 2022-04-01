import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div >
      <Header></Header>
      {/* <Shop></Shop> */}
      <Routes>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/order' element={<Orders></Orders>}></Route>
      </Routes>

    </div>
  );
}

export default App;
