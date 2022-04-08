import React, { useContext } from 'react';
import { Context } from '../../Context';
import { useParams } from 'react-router-dom';
import './restaraunt.scss';

function Restaraunt() {
  const [restatauntsArray] = useContext(Context);
  const { id:index } = useParams();
  const { properties:{ CompanyMetaData:currentRestarauntData } } = restatauntsArray[index];

  return (
    <div className="restaraunt">
      <div className="restaraunt__container">
        <h1>{currentRestarauntData.name}</h1>
        <div className='restaraunt__address'><b>Адрес:</b> {currentRestarauntData.address}</div>
        <div className="restaraunt__schedule"><b>График работы: </b>{currentRestarauntData.Hours.text}</div>
        <div className="restaraunt__site"><b>Сайт: </b><a href={currentRestarauntData.url}>{currentRestarauntData.url}</a></div>
      </div>
    </div>
  );
}

export default Restaraunt;
