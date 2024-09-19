import React from 'react';
import './App.css';
import SidebarMenu from './components/sidebarMenu/SidebarMenu'
import AcountInfo from './Page/acountInfo/AcountInfo';
function App() {

  return (
    <>
      <div class="header">
      </div>
      <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
      <label for="openSidebarMenu" class="sidebarIconToggle">
        <div class="spinner diagonal part-1"></div>
        <div class="spinner horizontal"></div>
        <div class="spinner diagonal part-2"></div>
      </label>
      <div id="sidebarMenu">
        <SidebarMenu />
      </div>
      <AcountInfo />
    </>
  );
}

export default App;
