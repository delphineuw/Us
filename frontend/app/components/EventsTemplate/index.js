import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

// Local imports
import styles from "./styles";
import eventTest from "../../utils/eventTest.js";
import hobbiesTest from "../../utils/hobbiesTest.js";

const EventsTemplate = ({ event }) => {
  const navigation = useNavigation();

  const imgSwitch = () => {
    switch (event.category) {
      case "Restaurant":
        return (
          <Image
            style={styles.cardImg}
            resizeMode="cover"
            source={hobbiesTest[0].imageUri}
          />
        );
      case "Tennis":
        return (
          <Image
            style={styles.cardImg}
            resizeMode="cover"
            source={hobbiesTest[1].imageUri}
          />
        );
      case "Afterwork":
        return (
          <Image
            style={styles.cardImg}
            resizeMode="cover"
            source={hobbiesTest[2].imageUri}
          />
        );
      case "Running":
        return (
          <Image
            style={styles.cardImg}
            resizeMode="cover"
            source={hobbiesTest[3].imageUri}
          />
        );
      case "Cycling":
        return (
          <Image
            style={styles.cardImg}
            resizeMode="cover"
            source={hobbiesTest[4].imageUri}
          />
        );
      case "Bar":
        return (
          <Image
            style={styles.cardImg}
            resizeMode="cover"
            source={hobbiesTest[5].imageUri}
          />
        );
      case "Squash":
        return (
          <Image
            style={styles.cardImg}
            resizeMode="cover"
            source={hobbiesTest[6].imageUri}
          />
        );
      case "Badminton":
        return (
          <Image
            style={styles.cardImg}
            resizeMode="cover"
            source={hobbiesTest[7].imageUri}
          />
        );
      case "Cinema":
        return (
          <Image
            style={styles.cardImg}
            resizeMode="cover"
            source={hobbiesTest[8].imageUri}
          />
        );
      case "Coworking":
        return (
          <Image
            style={styles.cardImg}
            resizeMode="cover"
            source={hobbiesTest[9].imageUri}
          />
        );
      case "Sightseeing":
        return (
          <Image
            style={styles.cardImg}
            resizeMode="cover"
            source={hobbiesTest[10].imageUri}
          />
        );
      case "Climbing":
        return (
          <Image
            style={styles.cardImg}
            resizeMode="cover"
            source={hobbiesTest[11].imageUri}
          />
        );
      default:
        return <FontAwesome name="picture-o" size={34} color="black" />;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cardsWrapper}
        onPress={() => navigation.navigate("EventDescriptionScreen", { event })}
      >
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            {/* <Image
              source={event.imageUri}
              resizeMode="cover"
              style={styles.cardImg}
            /> */}
            {imgSwitch()}
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle} numberOfLines={1}>
              {event.title}
            </Text>
            <Text style={styles.cardDetails}>
              {event.start}
              {event.date} {event.time}
            </Text>
            <Text style={styles.cardDetails} numberOfLines={2}>
              {event.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EventsTemplate;
