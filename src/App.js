import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <MainSection></MainSection>
    </div>
  );
}

export default App;
