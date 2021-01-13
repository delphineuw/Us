import React, { useState } from "react";
import { View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Local imports
import styles from './styles';
import eventTest from '../../utils/eventTest.js';



const MiniMap = ({event}) => {

  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE = event.coordinate.latitude;
  const LONGITUDE = event.coordinate.longitude;
  // const LATITUDE = 50.84615802838505;
  // const LONGITUDE = 4.353924849306058;
  const LATITUDE_DELTA = 0.0052;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

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
              coordinate={event.coordinate}
              title={event.title}
              description={event.address} 
          />
        </MapView>
      </View>
    
  );
}

export default MiniMap;