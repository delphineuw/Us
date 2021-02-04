import React from "react";
import { View, Text, Button, Image } from "react-native";

// Local Imports
import PLACEHOLDER from "../../assets/user.jpg";
import Form from "../../components/FormTemplate/index";
import styles from "./styles";

const editForm = [
  {
    id: 1,
    render: "text",
    placeholder: "Write here...",
    label: "Full Name",
    multiline: false,
    type: "name",
    security: false,
    autoCapitalize: "none",
    value: "",
  },
  {
    id: 2,
    render: "text",
    placeholder: "Write here...",
    label: "Email",
    multiline: false,
    type: "emailAddress",
    security: false,
    autoCapitalize: "none",
    value: "",
  },
  {
    id: 4,
    render: "radio",
    label: "Gender",
    options: ["Male", "Female", "Other"],
    value: "Other",
  },
  {
    id: 5,
    render: "date",
    label: "Date of birth",
    value: new Date(),
  },
];

const changeHobbies = true;

const EditProfileScreen = (change) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={PLACEHOLDER} />
          <Button title="Upload" onPress={() => console.log("Click")} />
        </View>
        <Form
          inputs={editForm}
          onSubmit={(val) => console.log(val)}
          changeHobbies={changeHobbies}
        />
      </View>
    </View>
  );
};

export default EditProfileScreen;
