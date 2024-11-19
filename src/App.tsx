import { useState } from 'react'
import './App.css'
import Login from './Login'
import SignUp from './SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrdersList from './OrdersList';


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
          <Route path="/Orders" element={<OrdersList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
