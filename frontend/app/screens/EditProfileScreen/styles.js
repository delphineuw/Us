import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  wrapper: { justifyContent: "center", flex: 1, alignItems: "center" },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "60%",
  },
  image: { width: 120, height: 120, borderRadius: 60 },
});

export default styles;
