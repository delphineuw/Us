import React, { useState } from "react";
import { View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Local imports
import styles from './styles';
import eventTest from '../../utils/eventTest.js';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = eventTest[0].coordinate.latitude;
const LONGITUDE = eventTest[0].coordinate.longitude;
// const LATITUDE = 50.84615802838505;
// const LONGITUDE = 4.353924849306058;
const LATITUDE_DELTA = 0.0052;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const MiniMap = props => {

  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });

  return (

      <View style={styles.container}>
        <MapView 
            style={styles.map} 
            // provider={MapView.PROVIDER_GOOGLE}
            initialRegion={region}
            showsUserLocation={true}
            onRegionChangeComplete={region => setRegion(region)}
            >
          <Marker 
              coordinate={eventTest[0].coordinate}
              title={eventTest[0].title}
              description={eventTest[0].address} 
          />
        </MapView>
      </View>
    
  );
}

export default MiniMap;