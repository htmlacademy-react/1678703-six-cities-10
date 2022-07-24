import {useRef, useEffect} from 'react';
import {Icon, Marker, Map, TileLayer} from 'leaflet';
// import {useMap} from '../../hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';
import {Offers, Offer} from '../../types/offer';
import { ArrayCities } from '../../const';

type MapProps = {
  cityName: string;
  offers: Offers;
  selectedOffer: Offer | undefined;
  main: boolean;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 45],
  iconAnchor: [15, 45]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [30, 45],
  iconAnchor: [15, 45]
});

export function MapOffers(props: MapProps): JSX.Element {
  const {cityName, offers, selectedOffer, main} = props;

  const mapRef = useRef(null);
  const isRenderedRef = useRef<boolean>(false);

  // eslint-disable-next-line no-console
  console.log('11', cityName, mapRef.current);

  const currentCity = ArrayCities.find((value) => value.name === cityName) || ArrayCities[0];


  useEffect(() => {

    // eslint-disable-next-line no-console
    console.log('44', cityName, mapRef.current);

    if(mapRef.current !== null && !isRenderedRef.current){
      const cityLocation = currentCity.location;
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
      isRenderedRef.current = true;

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(instance);
      });
    }


  }, [offers, selectedOffer, cityName]);

  return <section className={main ? 'cities__map map' : 'property__map map'} ref={mapRef}></section>;
}


