import React, { useContext } from 'react';
import { Context } from '../../Context';
import { Link } from 'react-router-dom';

import './restaraunts.scss';

function Restaraunts({ setColOfRestaurans, addRestarauntsStep }) {

  const [restatauntsArray] = useContext(Context);

  const scrollHandler = React.useCallback((evt) => {
    const blockHeight = evt.target.clientHeight;
    const blockHeightWithScroll = evt.target.scrollHeight;
    const scrolledHeight = evt.target.scrollTop;
    console.log(blockHeight,blockHeightWithScroll, scrolledHeight );
    if(blockHeight + scrolledHeight >= blockHeightWithScroll) {
      console.log('We are here');
      setColOfRestaurans((prev) => prev + addRestarauntsStep);
    }
  }, [addRestarauntsStep, setColOfRestaurans]);

  return (
    <div className='restaraunts'>
      <h2>Найденные рестораны</h2>
      <div className="restaraunts__container" onScroll={scrollHandler}>
        {restatauntsArray.length > 0 &&
          restatauntsArray.map((restaraunt, index) => (
              <div className="restaraunts__elem" key={restaraunt.properties.CompanyMetaData.id}>
                <Link to={`/restaraunt/${index}`}>{restaraunt.properties.name}</ Link>
              </div>
            )
          )
        }
      </div>
    </div>
  );
}

export default Restaraunts;
