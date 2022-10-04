import React, { useEffect } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { useStores } from "../store/storesContext";

import "./Map.css";

const Map = ({ fullScreen }) => {
  const { stores, fetchAllStores } = useStores();

  useEffect(() => {
    fetchAllStores();
  }, [fullScreen]);

  if (stores.length === 0) {
    return (
      <MapContainer
        center={["8.9949", "-79.5181"]}
        zoom={13}
        scrollWheelZoom={true}
        className= 'my-map'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={["8.9949", "-79.5181"]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
  return (
    <MapContainer
      center={[stores[0].coordenatesX, stores[0].coordenatesY]}
      zoom={13}
      scrollWheelZoom={true}
      className= 'my-map'
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {stores.map((store) => (
        <Marker
          key={store._id}
          position={[store.coordenatesX, store.coordenatesY]}
        >
          <Popup>
            <p>{store.title}</p>
            <p>{store.cellphone}</p>
            <p>{store.address}</p>
            <p> Visit us Here!. We look forward to see you!.</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
