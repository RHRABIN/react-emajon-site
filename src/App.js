import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shiping from './components/Shiping/Shiping';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div >
      <Header></Header>
      {/* <Shop></Shop> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }>

        </Route>

        <Route path='/order' element={<Orders></Orders>}></Route>

        <Route path='/shiping' element={
          <RequireAuth>
            <Shiping></Shiping>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

      </Routes>

    </div>
  );
}

export default App;
