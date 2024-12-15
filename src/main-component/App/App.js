import React from 'react';
import AllRoute from '../router'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../sass/style.scss';
import  { AuthProvider } from '../../context/AuthContext';


const App = () => { 

  return (
    <AuthProvider>
    <div className="App" id='scrool'>
          <AllRoute/>
          <ToastContainer/>
    </div>
    </AuthProvider>
  );
}

export default App;
