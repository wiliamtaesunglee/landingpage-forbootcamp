import React from 'react';
//import logo from './logo.svg';
import styles from './App.module.css';
import Header from './components/header/Header'
import MainContent from './components/mainContent/MainContent';

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <MainContent/>
    </div>
  );
}

export default App;
