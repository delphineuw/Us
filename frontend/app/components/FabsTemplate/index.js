import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

//local import
import styles from "./styles";

const FabsTemplate = ({ handlePress, color, name }) => {
  if (name === "pencil-circle-outline") {
    return (
      <MaterialCommunityIcons
        style={styles.fabs}
        onPress={handlePress}
        name={name}
        color={color}
        size={80}
      />
    );
  } else {
    return (
      <AntDesign
        style={styles.fabs}
        onPress={handlePress}
        name={name}
        color={color}
        size={80}
      />
    );
  }
};

export default FabsTemplate;
