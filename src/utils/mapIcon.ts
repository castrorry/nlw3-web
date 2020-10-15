import leaflet from 'leaflet';

import LocalMarker from '../assests/Local.svg';

export default leaflet.icon({
  iconUrl: LocalMarker,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
});