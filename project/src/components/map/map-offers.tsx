import {useRef, useEffect} from 'react';
import {Icon, Marker, LatLng} from 'leaflet';
import {useMap} from '../../hooks/useMap';
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

  const currentCity = ArrayCities.find((value) => value.name === cityName) || ArrayCities[0];

  const map = useMap(mapRef, currentCity);

  useEffect(() => {
    if (map) {
      map.setView(new LatLng(currentCity.location.latitude, currentCity.location.longitude), currentCity.location.zoom);

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
  }, [map, offers, selectedOffer, cityName]);

  return <section className={main ? 'cities__map map' : 'property__map map'} ref={mapRef}></section>;
}


