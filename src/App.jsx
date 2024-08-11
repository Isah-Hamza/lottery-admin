import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Landing from '../src/pages/Landing';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DashboardLayout from './layouts/DashboardLayout';
import AdminLayout from './layouts/AdminLayout';
import Admin from './pages/Admin'
import Transaction from './pages/Admin/Transaction';
import Operator from './pages/Admin/Operator';
import Login from './pages/Login';
import Subscriptions from './pages/Admin/Subscriptions';
import ServiceOperators from './pages/Admin/ServiceOperators';
import Services from './pages/Admin/Services';

function App() {
  const [count, setCount] = useState(0)

  return (
  // <Landing />
  <BrowserRouter>
    <Routes>
      {/* <Route path='/dashboard' Component={Admin} /> */}
      <Route path='/' Component={Login} />
      {/* <Route path='/dashboard' Component={Admin} />
      <Route path='/report' Component={Operator} />
      <Route path='/transactions' Component={Transaction} /> */}
      {/* <Route path='/' Component={DashboardLayout} >
        <Route path='' Component={Dashboard} />
        <Route path='home' Component={Dashboard} />
        <Route path='dashboard' Component={Dashboard} />
      </Route> */}

      <Route path='/' Component={AdminLayout} >
        <Route path='/dashboard' Component={Admin} />
        <Route path='/transactions' Component={Transaction} />
        <Route path='/subscriptions' Component={Subscriptions} />
        <Route path='/report' Component={Operator} />
        <Route path='/operators' Component={ServiceOperators} />
        <Route path='/services' Component={Services} />
      </Route>

    </Routes>
  </BrowserRouter>
  )
}

export default App
