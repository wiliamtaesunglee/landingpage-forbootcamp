import React from 'react';
//import logo from './logo.svg';
import styles from './App.module.css';
import Header from './components/header/Header'
import MainContent from './components/mainContent/MainContent';
import Form from './components/form/Form'
import CourseInfo from './components/courseInfo/CourseInfo'
import Professor from './components/professor/Professor'
function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <MainContent/>
      <Form/>
      <CourseInfo/>
      <Professor/>
    </div>
  );
}

export default App;
