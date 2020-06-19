import React from 'react';
import './App.scss';
import Header from './components/HeaderSection/Header';
import MainSection from './components/MainSection/MainSection';
function App() {
  return (
    <div className="App">
      <Header />
      <MainSection></MainSection>
    </div>
  );
}

export default App;
