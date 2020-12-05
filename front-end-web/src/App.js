import React from 'react';
import Routes from './routes.js';
import { Global } from './styles/global'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './global'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {  
  return (
    <Provider store={store}>
    <PersistGate loding={null} persistor={persistor}>
      <Global/>
      <Routes />
      <ToastContainer/>
      </PersistGate>
    </Provider>
  );
}

export default App;
