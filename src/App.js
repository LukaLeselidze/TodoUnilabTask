import './App.css';
import { Route, Routes, } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Authentication from './components/Authentication';
import Todos from './components/Todos';
import { LoginContext } from './components/Contexts/LoginContext'
import { useState } from 'react';
import ProtectedRouts from './components/ProtectedRouts';


function App() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [user, setUser] = useState([]);
  const [nameEntered, setNameEntered] = useState(false)
  const [isUploaded, setisUploaded] = useState(false);

  return (
    <div className="App">
      <LoginContext.Provider value={{ setImage, image, name, setName, nameEntered, setNameEntered, isUploaded, setisUploaded, user, setUser }}>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/sign-in' element={<Authentication />} />
          <Route element={<ProtectedRouts />}>
            <Route path='/sign-in/todos' element={<Todos />} />
          </Route>
        </Routes>
      </LoginContext.Provider>
    </div >
  );
}

export default App;

