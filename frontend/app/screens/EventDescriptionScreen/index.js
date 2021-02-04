import React from "react";
import { View, Text, Image, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

// Local imports
import styles from "./styles";
import ButtonFullRed from "../../components/ButtonTemplate/ButtonFullRed";
import MiniMap from "../../components/MiniMap/index.js";
import eventTest from "../../utils/eventTest.js";
import hobbiesTest from "../../utils/hobbiesTest.js";
import participantsTest from "../../utils/participantsTest.js";

const EventDescriptionScreen = ({ route, navigation }) => {
  const { event } = route.params;

  const maping = () => {
    return participantsTest.map((item) => (
      <Image key={item.key} source={item.imageUri} style={styles.imgPart} />
    ));
  };

  const imgSwitch = () => {
    switch (event.category) {
      case "Restaurant":
        return <Image style={styles.head} source={hobbiesTest[0].imageUri} />;
      case "Tennis":
        return <Image style={styles.head} source={hobbiesTest[1].imageUri} />;
      case "Afterwork":
        return <Image style={styles.head} source={hobbiesTest[2].imageUri} />;
      case "Running":
        return <Image style={styles.head} source={hobbiesTest[3].imageUri} />;
      case "Cycling":
        return <Image style={styles.head} source={hobbiesTest[4].imageUri} />;
      case "Bar":
        return <Image style={styles.head} source={hobbiesTest[5].imageUri} />;
      case "Squash":
        return <Image style={styles.head} source={hobbiesTest[6].imageUri} />;
      case "Badminton":
        return <Image style={styles.head} source={hobbiesTest[7].imageUri} />;
      case "Cinema":
        return <Image style={styles.head} source={hobbiesTest[8].imageUri} />;
      case "Coworking":
        return <Image style={styles.head} source={hobbiesTest[9].imageUri} />;
      case "Sightseeing":
        return <Image style={styles.head} source={hobbiesTest[10].imageUri} />;
      case "Climbing":
        return <Image style={styles.head} source={hobbiesTest[11].imageUri} />;
      default:
        return <FontAwesome name="picture-o" size={300} color="black" />;
    }
  };

  const handlePress = () => {
    Alert.alert("You joined this event!");
  };

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View>
          {/* <Image style={styles.head} source={event.imageUri} /> */}
          {imgSwitch()}
        </View>

        <View style={styles.layer}>
          <View style={styles.viewTitle}>
            <Text style={styles.catTitle}>
              {event.category} - {""}
            </Text>

            <Text style={styles.title}>{event.title}</Text>
          </View>

          <View style={styles.viewTitle}>
            <AntDesign name="clockcircleo" size={15} color="black" />
            <Text style={styles.timeAddess}>{event.time}</Text>
          </View>
        </View>

        <View style={styles.layer}>
          <View style={styles.addressStyle}>
            <FontAwesome name="map-marker" size={20} color="black" />
            <Text style={styles.timeAddess}>{event.location}</Text>
          </View>
        </View>

        <View style={styles.layer}>
          <Text style={styles.desc}>Description</Text>
          <Text style={styles.descText}>{event.description}</Text>
        </View>

        <View style={styles.layerWhite}></View>

        <TouchableOpacity
          onPress={() => navigation.navigate("ParticipantScreen")}
        >
          <View style={styles.layer}>
            <Text>Hosting by</Text>
            <View>
              <Image
                style={styles.imgPart}
                source={participantsTest[0].imageUri}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("ParticipantScreen")}
        >
          <View style={styles.layer}>
            <Text>People going</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.imgFlex}>{maping()}</View>
            </ScrollView>
          </View>
        </TouchableOpacity>

        <MiniMap event={event} />
      </ScrollView>

      <View style={styles.btnContainer}>
        <ButtonFullRed text={"join !"} handlePress={handlePress} />
      </View>
    </View>
  );
};

export default EventDescriptionScreen;
