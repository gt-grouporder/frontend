import { useState } from 'react'
import './App.css'
import Login from './Login'
import SignUp from './SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrdersList from './OrdersList';

//rendering list 
const ORDER_DATA = [
  { orderName: "order1"},
  { orderName: "my_order"},
  { orderName: "order2"},
  { orderName: "order3"},
  { orderName: "order4"},
];

function App() {
  const [count, setCount] = useState(0)
  
  //routing
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Orders" element={<OrdersList orders={ORDER_DATA} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
