
'use strict';

import React from 'react';

const ACCESS_TOKEN = 'pk.eyJ1IjoiZGllZ29jMSIsImEiOiJjaWoxbnZyNG0wMGMxdWFsemVmdHE1M3o0In0.31tbvIxDPX8z2rO368-E0Q';

class Map extends React.Component {

  componentDidMount() {
    this.createMap()
  }

  componentWillReceiveProps(props) {
    if(this.props.nodes) {

    }
  }

  /*
   * Renders a map - PRIVATE METHOD
   * @param {string} divID
   */
  createMap() {
    L.mapbox.accessToken = ACCESS_TOKEN;
    let mapElement = this.refs.map;
    if (!mapElement) { return; }
    let currentMap = L.mapbox.map(mapElement, 'mapbox.streets', {
      maxZoom: 4,
      minZoom: 4,
    }).setView([43, -99], 3);
    this._map = currentMap;
  }


  addNodes(nodes) {
    
  }





  /*
   * Adds a layer for markers to map - PRIVATE METHOD
   * @param {Leaflet Map} map
   */
  addMarkerLayerToMap(map) {
      var markerLayer = new L.LayerGroup().addTo(map);
      return markerLayer;
  }

  /*
   * Adds a layer for edges to map - PRIVATE METHOD
   * @param {Leaflet Map} map
   */
  addPolylineLayerToMap(map) {
      var polylineLayer = new L.LayerGroup().addTo(map);
      return polylineLayer;
  }

  /*
   * Returns a red leaflet icon - PRIVATE METHOD
   */
  getRedIcon() {
      var RedIcon = L.Icon.Default.extend({
          options: {
              iconUrl: 'imgs/red-icon.png'
          }
      });
      return new RedIcon();
  }

  /*
   * Returns a green leaflet icon - PRIVATE METHOD
   */
  getGreenIcon() {
      var GreenIcon = L.Icon.Default.extend({
          options: {
              iconUrl: 'imgs/green-icon.png'
          }
      });
      return new GreenIcon();
  }

  render() {
    return (
      <div id='map' className='map' ref='map'></div>
    );
  }
}

export default Map;
