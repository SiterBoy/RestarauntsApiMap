import React, { useState, useEffect, useContext} from "react";
import { Context } from "../../Context";

import Restaraunts from '../Restaraunts/Restaraunts';
import Map from '../Map/Map';
import './home.scss';

const addRestarauntsStep = 10;
const firstColsOfRestarauns = 20;

// const apiKey1 = '371d42fa-1adc-4346-b830-d2d69bf70eae';
const apiKey2 = 'd6f3df15-e119-4a3f-94e6-4875b6bc0e0a';
// const apiKey3 = 'a19ad26e-7206-43ae-8d28-5b827b3e489d';

function Home() {
  const [, setRestatauntsArray] = useContext(Context);
  const [colOfRestaurans, setColOfRestaurans] = useState(firstColsOfRestarauns);

  useEffect(() => {
    async function getRestarauntsData () {
      try{
        const response = await fetch(`https://search-maps.yandex.ru/v1/?text=Ресторан&type=biz&lang=ru_RU&apikey=${apiKey2}&results=${colOfRestaurans}`);
        const { features:restaraunts } = await response.json();
        setRestatauntsArray(restaraunts);
      } catch (err) {
        console.log('Ошибка при загрузке данных с апи ресторанов');
      }
    }

    getRestarauntsData();
  }, [colOfRestaurans, setRestatauntsArray]);

  return (
    <div className="home-container">
      <Map/>
      <Restaraunts addRestarauntsStep={addRestarauntsStep} setColOfRestaurans={setColOfRestaurans}/>
    </div>
  );
}

export default Home;


