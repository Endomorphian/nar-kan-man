import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

//pages
import Create from './pages/create/Create';
//import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Project from './pages/project/Project';
import Signup from './pages/signup/Signup';
//import Navbar from './components/Navbar';
//import Sidebar from './components/Sidebar';
import Main from './pages/Main/Main';
import Test from './pages/test/Test';

function App() {
  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          
          {user && <div>logged in {user.displayName}<br /></div> }
          <div className='container'>
          
          <Main />
            <Routes>
              <Route 
                path="/" 
                element={user ? <p>Do nothing for now</p> : <Navigate to="/login" />} 
              />
              <Route 
                path="/test" 
                element={ <Test /> } 
              />
              <Route 
                path="/create" 
                element={user ? <Create /> : <Navigate to="/login" />} 
              />
              <Route 
                path="/projects/:id" 
                element={user ? <Project /> : <Navigate to="/login" />} 
              />
              <Route 
                path="/login" 
                element={user ? <Navigate to="/" /> : <Login /> } 
              />
              <Route 
                path="/signup" 
                element={user ? <Navigate to="/" /> : <Signup /> } 
              />
              <Route path="*" element={(
                <div><h1>404 - Page not found</h1></div>
                )} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
