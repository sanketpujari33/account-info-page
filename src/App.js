import React from 'react';
import AcountInfo from './pages/acountInfo/AcountInfo';
import { AppProvider } from './server/AppContext';
import './App.css'
function App() {

  return (
    <>
      <AppProvider>
        <AcountInfo />
      </AppProvider>
    </>
  );
}

export default App;
