import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../../Context';
import './map.scss';

const centerOfMap = [57.429717, 74.784674];
const zoomOfMap = 4;

function Map() {

  const [restatauntsArray] = useContext(Context);
  const ymaps = window.ymaps;
  const [currentMap, setCurrentMap] = useState();
  const [colOfRenderedRestaraunts, setColOfRenderedRestaraunts] = useState(0);

  useEffect(() => {

    function initMap() {
      setCurrentMap(new ymaps.Map('map', {
        center: centerOfMap,
        zoom: zoomOfMap
      }));
    };

    function generatePlacemark(coords, metaData) {
      const [coordA, coordB] = coords;
      return new ymaps.Placemark([coordB, coordA], {
        balloonContentHeader: `<h2>${metaData.name}</h2>`,
        balloonContentBody: `<p>${metaData.address}</p>`,
        hintContent: metaData.name
      }, {
        preset: 'islands#dotIcon',
        iconColor: '#F00'
      })
    }

    if (!currentMap) {
      ymaps.ready(initMap)
    } else {
      if (restatauntsArray.length > 0) {
        for(let i = colOfRenderedRestaraunts; i < restatauntsArray.length; i += 1 ) {
          currentMap.geoObjects.add(generatePlacemark(restatauntsArray[i].geometry.coordinates, restatauntsArray[i].properties.CompanyMetaData));
          setColOfRenderedRestaraunts(prev => prev + 1);
        }
      }
    }
  },
    [restatauntsArray, ymaps, currentMap, colOfRenderedRestaraunts]);

  return (
    <div id="map" height="800" width="2000">
    </div>
  );
}

export default Map;
