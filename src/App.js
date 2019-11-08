import React from 'react';
//import logo from './logo.svg';
import styles from './App.module.css';
import Header from './components/header/Header'
import MainContent from './components/mainContent/MainContent';
import Form from './components/form/Form'

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <MainContent/>
      <Form/>
    </div>
  );
}

export default App;
