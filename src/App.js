import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Restaraunt from './components/Restaraunt/Restaraunt'
import Home from './components/Home/Home';
import { Context } from './Context';

function App() {
  const [restatauntsArray, setRestatauntsArray] = useState([]);

  return (
    <>
    <BrowserRouter>
      <div className="wrapper">
        <header>
          <Header />
        </header>

        <main>
          <Context.Provider value={[restatauntsArray, setRestatauntsArray]}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/restaraunt/:id" element={<Restaraunt />} />
            </Routes>
          </Context.Provider>
        </main>

        <footer>Restaraunts App (c)</footer>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
