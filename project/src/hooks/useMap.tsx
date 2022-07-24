import {useEffect, useState, MutableRefObject, } from 'react';
import { City } from '../types/city';
import {Map, TileLayer} from 'leaflet';


export function useMap(mapRef: MutableRefObject<HTMLElement | null>, currentCity: City): Map | null {

  const [map, setMap] = useState<Map | null>(null);
  // const isRenderedRef = useRef<boolean>(false);useRef


  // let prevCity: City | null = null;


  useEffect(() => {

    // eslint-disable-next-line no-console
    console.log('22', currentCity.name);

    // if(map !== currentCity) {
    //   isRenderedRef.current = false; && !isRenderedRef.current
    // }

    const cityLocation = currentCity.location;
    if (mapRef.current !== null) {

      // eslint-disable-next-line no-console
      console.log('33', mapRef.current);

      const instance = new Map(mapRef.current, {
        center: {
          lat: cityLocation.latitude,
          lng: cityLocation.longitude
        },
        zoom: cityLocation.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);

      // isRenderedRef.current = true;
      // prevCity = currentCity;

    // eslint-disable-next-line no-console
    // console.log('33', map);
    }
    return () => {
      // if(mapRef.current !== null){
      // mapRef.current = null;
      // }
      // setMap(null);
    };

  }, [mapRef, currentCity]);

  return map;
}
