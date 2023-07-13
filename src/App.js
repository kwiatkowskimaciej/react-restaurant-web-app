import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment className="App">
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
