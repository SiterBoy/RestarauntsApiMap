import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Restaraunt from './components/Restaraunt/Restaraunt'
import Home from './components/Home/Home';

function App() {
  const [colOfRestaurans, setColOfRestaurans] = useState(5);
  const [restatauntsArray, setRestatauntsArray] = useState([]);

  async function getRestarauntsData () {
    const response = await fetch(`https://search-maps.yandex.ru/v1/?text=Ресторан&type=biz&lang=ru_RU&apikey=d6f3df15-e119-4a3f-94e6-4875b6bc0e0a&results=${colOfRestaurans}`);
    const { features:restaraunts } = await response.json();
    setRestatauntsArray(restaraunts)
  }

  useEffect(() => {
    getRestarauntsData();
  }, [colOfRestaurans]);
  
    
  return (
    <>
    <BrowserRouter>
      <div className="wrapper">
        <header>
          <Header />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaraunt/" element={<Restaraunt />} />
          </Routes>
        </main>

        <footer>Restaraunts App (c)</footer>
      </div>
    </BrowserRouter>
    {/* <div id="map"></div>
    <div className="restataunts">
      {restatauntsArray.length > 0 &&
        restatauntsArray.map((restaraunt) => <p key={restaraunt.properties.name}>{restaraunt.properties.name}</p>)
      }
    </div> */}
    </>
  );
}

export default App;
