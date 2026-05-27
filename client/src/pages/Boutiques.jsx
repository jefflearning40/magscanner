import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function normalizeText(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[-']/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;

  const dLat =
    ((lat2 - lat1) * Math.PI) / 180;

  const dLon =
    ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) *
      Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c =
    2 *
    Math.atan2(
      Math.sqrt(a),
      Math.sqrt(1 - a)
    );

  return (R * c).toFixed(1);
}

function ChangeMapCenter({ shop, userPosition }) {
  const map = useMap();

  useEffect(() => {
    if (userPosition) {
      map.setView(
        [
          userPosition.latitude,
          userPosition.longitude,
        ],
        10
      );

      return;
    }

    if (shop) {
      map.setView(
        [
          Number(shop.latitude),
          Number(shop.longitude),
        ],
        12
      );
    }
  }, [shop, userPosition, map]);

  return null;
}

function Boutiques() {
  const [shops, setShops] = useState([]);
  const [selectedShop, setSelectedShop] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const [userPosition, setUserPosition] =
    useState(null);

  useEffect(() => {
    fetch(
      "http://localhost:3000/api/shops"
    )
      .then((r) => r.json())
      .then((data) => {
        setShops(data);

        setSelectedShop(
          data[0] || null
        );
      });
  }, []);

  function handleSearch(event) {
    const value =
      normalizeText(
        event.target.value
      );

    setSearch(
      event.target.value
    );

    const result =
      shops.find((shop) => {
        return (
          normalizeText(
            shop.name
          ).includes(value) ||
          normalizeText(
            shop.city
          ).includes(value) ||
          normalizeText(
            shop.department
          ).includes(value)
        );
      });

    if (result) {
      setSelectedShop(result);
    }
  }

  function handleGeolocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserPosition({
          latitude:
            position.coords.latitude,

          longitude:
            position.coords.longitude,
        });
      },

      () => {
        alert(
          "Position impossible"
        );
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }

  const filteredShops =
    shops.filter((shop) => {
      const value =
        normalizeText(search);

      if (!value) {
        return true;
      }

      return (
        normalizeText(
          shop.name
        ).includes(value) ||
        normalizeText(
          shop.city
        ).includes(value)
      );
    });

  const distance =
    selectedShop &&
    userPosition
      ? calculateDistance(
          userPosition.latitude,
          userPosition.longitude,
          Number(
            selectedShop.latitude
          ),
          Number(
            selectedShop.longitude
          )
        )
      : null;

  return (
    <div className="app">

      <main className="container py-5">

        <Link
          to="/"
          className="btn btn-outline-warning mb-4"
        >
          Retour accueil
        </Link>

        <h1 className="text-warning mb-3">
          Boutiques
        </h1>

        <input
          className="form-control mb-4"
          placeholder="Ville ou département..."
          value={search}
          onChange={
            handleSearch
          }
        />

        <div className="row g-4">

          <div className="col-lg-4">

            <div className="card dashboard-card shop-detail-card">

              <div className="card-body">

                {selectedShop && (
                  <>

                    <h3 className="text-warning">

                      {
                        selectedShop.name
                      }

                    </h3>

                    <p>
                      📍{" "}
                      {
                        selectedShop.address
                      }
                    </p>

                    <p>
                      🏙️{" "}
                      {
                        selectedShop.city
                      }
                    </p>

                    <p>
                      📞{" "}
                      {
                        selectedShop.phone
                      }
                    </p>

                    {distance && (
                      <h5 className="text-warning">

                        📏 Distance :

                        {" "}

                        {
                          distance
                        }

                        km

                      </h5>
                    )}

                  </>
                )}

              </div>

            </div>

          </div>

          <div className="col-lg-8">

            <div className="card dashboard-card">

              <div className="card-body">

                <button
                  className="btn btn-warning mb-3"
                  onClick={
                    handleGeolocation
                  }
                >
                  Me localiser
                </button>

                <MapContainer
                  center={[43,-1]}
                  zoom={8}
                  className="leaflet-map"
                >

                  <ChangeMapCenter
                    shop={
                      selectedShop
                    }

                    userPosition={
                      userPosition
                    }
                  />

                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  {userPosition && (
                    <CircleMarker
                      center={[
                        userPosition.latitude,
                        userPosition.longitude,
                      ]}
                      radius={12}
                    >
                      <Popup>
                        Vous êtes ici
                      </Popup>
                    </CircleMarker>
                  )}

                  {filteredShops.map(
                    (shop) => (
                      <CircleMarker
                        key={
                          shop.id
                        }

                        center={[
                          Number(
                            shop.latitude
                          ),

                          Number(
                            shop.longitude
                          ),
                        ]}

                        radius={10}

                        eventHandlers={{
                          click:
                            () =>
                              setSelectedShop(
                                shop
                              ),
                        }}
                      >
                        <Popup>
                          {
                            shop.name
                          }
                        </Popup>
                      </CircleMarker>
                    )
                  )}

                </MapContainer>

              </div>

            </div>

          </div>

        </div>

      </main>

      <footer className="footer text-center py-3">

        © 2026 MagScanner

      </footer>

    </div>
  );
}

export default Boutiques;