import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const locations = [
    { name: 'Copenhagen', lat: 55.6761, lon: 12.5683, info: 'The capital city of Denmark!' },
    { name: 'Aarhus', lat: 56.1629, lon: 10.2039},
    { name: 'Odense', lat: 55.4038, lon: 10.4024, info: 'Birthplace of Hans Christian Andersen' },
    { name: 'Aalborg', lat: 57.0488, lon: 9.9217, info: 'City in Northern Denmark' },
]

export const Map = () => {
    const [activeCity, setActiveCity] = useState(null)

  return (
    <div style={{ height: '100%' }}>
        <MapContainer 
            center={[56.2639, 9.5018]}
            zoom={7}
            scrollWheelZoom={false}
            style={{width: '100%', height: '100%'}}>
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors">
            </TileLayer>

            {locations.map((loc, i) => (
                <Marker 
                key={i}
                position={[loc.lat, loc.lon]}
                eventHandlers={{
                    click: () => setActiveCity(loc),
                }}
                >
                    <Popup>{loc.name}</Popup>
                </Marker>
            ))}

            { activeCity && (
                <div className='info-box'>
                    <h2>{activeCity.name}</h2>
                    <p>{activeCity.info}</p>
                </div>
                )
            }
        </MapContainer>
    </div>
  )
}

export default Map
