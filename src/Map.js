import React, { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css';

const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const denmark = { lng: 12.97453, lat: 55.836 };
    const zoom = 5;
    maptilersdk.config.apiKey = 'BmdgCiRONzD0eaHRi0dL';

    useEffect(() => {
        if (map.current) return;
      
        map.current = new maptilersdk.Map({
          container: mapContainer.current,
          style: 'https://api.maptiler.com/maps/toner-v2/style.json?key=BmdgCiRONzD0eaHRi0dL',
          center: [denmark.lng, denmark.lat],
          zoom: zoom,
        });
      
      }, [denmark.lng, denmark.lat, zoom]);

      return (
        <div className="map-wrap">
          <div ref={mapContainer} className="map" />
        </div>
      );
};

export default Map;

