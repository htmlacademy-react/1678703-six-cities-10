import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';
import {Offers, Offer} from '../../types/offer';
import { ArrayCities } from '../../const';

type MapProps = {
  cityOffer: string;
  offers: Offers;
  selectedOffer: Offer | undefined;
  main: boolean;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export function Map(props: MapProps): JSX.Element {
  const {cityOffer, offers, selectedOffer, main} = props;

  const mapRef = useRef(null);

  const currentCity = ArrayCities.find((value) => value.name === cityOffer) || ArrayCities[0];

  const map = useMap(mapRef, currentCity);

  // eslint-disable-next-line no-console
  // console.log('11', selectedOffer);

  useEffect(() => {
    if (map) {
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
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  const getStyleMap = () => main ? {height: '500px'} : {width: '1144px', height: '579px', margin: 'auto'};

  return <div style={getStyleMap()} ref={mapRef}></div>;
}


