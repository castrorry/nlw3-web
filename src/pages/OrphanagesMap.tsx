import React from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import Leaflet from 'leaflet';

import LocalMarker from '../assests/Local.svg';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';

const mapIcon = Leaflet.icon({
  iconUrl: LocalMarker,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

const OrphanagesMap: React.FC = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={LocalMarker} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Goiânia</strong>
          <span>Goias</span>
        </footer>
      </aside>

      <Map
        center={[-16.6758656, -49.2590183]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker
          position={[-16.6758656, -49.2590183]}
          icon={mapIcon}
        >
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar das meninas
            <Link to="orphanage/7">
              <FiArrowRight size={20} color="#FFFFFF" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size="32" color="#FFFFFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;