import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

//pages
import Create from './pages/create/Create';
//import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Project from './pages/project/Project';
import Signup from './pages/signup/Signup';
import Resultat from './pages/resultat/Resultat';
//import Navbar from './components/Navbar';
//import Sidebar from './components/Sidebar';
import Main from './pages/Main/Main';
import Navbar from './components/Navbar';
import Settings from './pages/settings/Settings';
import { Drycker } from './pages/drycker/Drycker';

import mySvg from "./images/background.svg";

function App() {
  const { user, authIsReady } = useAuthContext()

  const mystyle = {
    backgroundImage: `url(${mySvg})`,
    backgroundSize: 'cover',
  }

  return (
    <div className="App" style={mystyle}>
      {authIsReady && (
        <BrowserRouter>
          
          {/*user && <div>logged in {user.displayName}<br /></div>*/ }
          <div className='container'>
          <Navbar />
          
            <Routes>
              <Route 
                path="/" 
                element={ <Main /> } 
              />
              <Route 
                path="/resultat" 
                element={ <Resultat /> } 
              />
              <Route 
                path="/settings" 
                element={ <Settings /> } 
              />
              <Route 
                path="/create" 
                element={user ? <Create /> : <Navigate to="/login" />} 
              />
              <Route 
                path="/drycker" 
                element={<Drycker />} 
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
