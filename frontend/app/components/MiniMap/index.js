import React, { useState } from "react";
import { View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { TabRouter } from "@react-navigation/native";
import axios from 'axios';

// Local imports
import styles from './styles';
import eventTest from '../../utils/eventTest.js';


const MiniMap = ({event}) => {

  const API_KEY = 'AIzaSyDbPBhjyCIyVvmR4B-27U-e36dKJ-MxUMU';

  const getCoordsForAddress = async ({event}) => {
    console.log('Im here')
    
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(event.location)}&key=${API_KEY}`)
    
      const data = response.data ;


      if ( !data || data.status === 'ZERO_RESULTS') {
        const error = new Errors('No address found', 422);
        throw error
      };

      const coordinates = data.results[0].geometry.location;
      console.log(coordinate)
  
      return coordinates

  }

  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE = 50.84615802838505;
  const LONGITUDE = 4.353924849306058;
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
          {/* <Marker 
              coordinate={coordinate}
              title={event.title}
              description={event.location} 
          /> */}
        </MapView>
      </View>
    
  );
}

export default MiniMap;