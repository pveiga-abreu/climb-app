import Routes from './routes.js';
import React from 'react';
import { Global } from './styles/global'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './global'

function App() {  
  return (
    <Provider store={store}>
    <PersistGate loding={null} persistor={persistor}>
      <Global/>
      <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
