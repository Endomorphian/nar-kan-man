import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

//pages
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Project from './pages/project/Project';
import Signup from './pages/signup/Signup';
import Resultat from './pages/resultat/Resultat';
import Main from './pages/Main/Main';
import Navbar from './components/Navbar';
import Settings from './pages/settings/Settings';
import Test from './pages/test/Test';
import { Drycker } from './pages/drycker/Drycker';

import mySvg from "./images/background.svg";

function App() {
  const { user, authIsReady } = useAuthContext()

  LogRocket.init('mtdvrl/nar-kan-man')
  setupLogRocketReact(LogRocket);

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
                path="/test" 
                element={ <Test /> } 
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
