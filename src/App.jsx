import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { LoginPage } from './pages/LoginPage'
import { Dashboard } from './components/Dashboard'
import { UserManagement } from './components/User-Management'
import { Toaster } from 'react-hot-toast'
import { ProtectedRoute } from './Routes/ProtectedRoute'
import { ThemeProvider } from './context/ThemeContex'

export const App = () => {

  return (
    <>
      <ThemeProvider>
      <Toaster position="top-right" reverseOrder={false} />

        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginPage />} />

            <Route element={<ProtectedRoute />}>

              <Route path='/' element={<Dashboard />} />
              <Route path='/user-management' element={<UserManagement />} />

            </Route>

          </Routes>
        </BrowserRouter>

      </ThemeProvider>
    </>
  )
}

