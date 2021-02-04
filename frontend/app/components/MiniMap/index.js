import React, { useState, useEffect } from "react";
import { View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";

// Local imports
import styles from "./styles";
import API_KEY from "../../utils/api.js";

const MiniMap = ({ event }) => {
  const { width, height } = Dimensions.get("window");
  // const API_KEY = "APIKEY";

  const [coordinates, setCoordinates] = useState({
    lat: 50.84615802838505,
    lng: 4.353924849306058,
  });
  const [region, setRegion] = useState({
    latitude: 50.84615802838505,
    longitude: 4.353924849306058,
    latitudeDelta: 0.0192,
    longitudeDelta: 0.0052 * (width / height),
  });

  // useEffect(() => {
  //   (async () => {
  //     let response;
  //     try {
  //       response = await axios.get(
  //         `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
  //           event.location
  //         )}&key=${API_KEY}`
  //       );
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     if (response) {
  //       setCoordinates(response.data.results[0].geometry.location);
  //       setRegion((prev) => ({
  //         ...prev,
  //         latitude: response.data.results[0].geometry.location.lat,
  //         longitude: response.data.results[0].geometry.location.lng,
  //       }));
  //     }
  //   })();
  // }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        showsUserLocation={true}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        <Marker
          coordinate={{ latitude: coordinates.lat, longitude: coordinates.lng }}
          title={event.title}
          description={event.location}
        />
      </MapView>
    </View>
  );
};

export default MiniMap;
