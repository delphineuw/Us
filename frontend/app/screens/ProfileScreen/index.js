import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";

// local import
import FabsTemplate from "../../components/FabsComponentTemplate";
import user from "../../utils/participantsTest.js";
import hobby from "../../utils/hobbiesTest.js";
import styles from "./styles";

const profileScreen = (props) => {
  // const [user, setUser] = useState({});
  // const id = 1;

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:4000/api/users/${id}`)
  //     .then((res) => {
  //       console.log(res);
  //       setUser(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Image style={styles.imageUser} source={user[0].imageUri} />
        <Text style={styles.textUser}>
          {user[0].firstName} {user[0].lastName}
        </Text>

        <View style={styles.gridUser}>
          <FontAwesome name="birthday-cake" size={24} color="black" />
          <Text style={styles.textcontent}> {user[0].birthday} </Text>
        </View>

        <View style={styles.gridUser}>
          <Entypo name="location-pin" size={24} color="black" />
          <Text style={styles.textcontent}> {user[0].city} </Text>
        </View>

        <View style={styles.gridUser}>
          <Fontisto name="world-o" size={24} color="black" />
          <Text style={styles.textcontent}> {user[0].country} </Text>
        </View>

        <View style={styles.hobbiesWrapper}>
          <Image source={hobby[0].imageUri} style={styles.hobby} />
          <Image source={hobby[1].imageUri} style={styles.hobby} />
          <Image source={hobby[2].imageUri} style={styles.hobby} />
        </View>
      </View>

      <MaterialCommunityIcons
        onPress={() => props.navigation.navigate("EditProfileScreen")}
        name="pencil-circle-outline"
        size={90}
        color="#rgba(21,133,130, 1)"
        style={styles.fabsPencil}
      />
      {/* <Button
        title="hobbies"
        onPress={() => props.navigation.navigate("EditHobbiesScreen")}
      /> */}
    </View>
  );
};
export default profileScreen;
