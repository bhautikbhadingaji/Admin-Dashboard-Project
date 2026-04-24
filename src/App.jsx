import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { LoginPage } from './pages/LoginPage'
import { Dashboard } from './components/Dashboard'
import { UserManagement } from './components/User-Management'

export const App = () => {

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/login' element = {<LoginPage/>}/>
    <Route path='/' element = {<Dashboard/>}/>
    <Route path='/user-management' element = {<UserManagement />}/>

   </Routes>
   </BrowserRouter>
   </>
  )
}

