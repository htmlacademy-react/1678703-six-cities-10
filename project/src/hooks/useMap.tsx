import {useEffect, useState, MutableRefObject} from 'react';
import { City } from '../types/city';
import leaflet from 'leaflet';


function useMap(mapRef: MutableRefObject<HTMLElement | null>, currentCity: City): Map | null {

  const [map, setMap] = useState<Map | null>(null);

  const cityLocation = currentCity.location;

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new leaflet.Map(mapRef.current, {
        center: {
          lat: cityLocation.latitude,
          lng: cityLocation.longitude
        },
        zoom: cityLocation.zoom,
      });

      const layer = new leaflet.TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
