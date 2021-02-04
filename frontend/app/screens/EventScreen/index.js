import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Axios from "axios";
import { useIsFocused } from "@react-navigation/native";

// local import
import styles from "./styles";
import EventsTemplate from "../../components/EventsTemplate/index.js";
import eventTest from "../../utils/eventTest.js";
import hobbiesTest from "../../utils/hobbiesTest.js";
import FabsTemplate from "../../components/FabsTemplate/index.js";
import ipAdd from "../../utils/ipAdd.js";

const EventScreen = (props) => {
  const [eventList, setEventList] = useState([]);
  const isFocused = useIsFocused();

  //  => In order to use the axios call in the useEffect method, create a file under the name ipAdd.js
  //  and create a 'const ipAdd = YOUR_IP_ADDRESS' or 'localHost' if you use iOS'in the utils folder and export it.

  useEffect(() => {
    Axios.get(`http://${ipAdd}:4000/api/events`)
      .then((response) => {
        setEventList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isFocused]);

  const maping = () => {
    return eventTest.map((event) => (
      <EventsTemplate key={event.key} event={event} />
    ));
  };

  const mapingEventDB = () => {
    return eventList
      .map((event) => <EventsTemplate key={event.id} event={event} />)
      .reverse();
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.head}>
          <Image
            style={styles.imgHead}
            source={require("../../assets/friends.jpeg")}
          />
          <Image
            style={styles.imgLogo}
            source={require("../../assets/logo.png")}
          />
        </View>

        <Text style={styles.textHead}>Deals of the week</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={styles.event}>
            {mapingEventDB()}
            {maping()}
          </View>
        </ScrollView>

        <Text style={styles.text}>Events Today</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={styles.event}>{maping()}</View>
        </ScrollView>

        <Text style={styles.text}>All events</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={styles.event}>{maping()}</View>
        </ScrollView>

        <Text style={styles.text}>Your events</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={styles.event}>{maping()}</View>
        </ScrollView>
      </ScrollView>
      <FabsTemplate
        handlePress={() => props.navigation.navigate("HobbiesScreen")}
        name={"pluscircle"}
        color={"#rgba(21,133,130, 1)"}
      />
    </View>
  );
};

export default EventScreen;
