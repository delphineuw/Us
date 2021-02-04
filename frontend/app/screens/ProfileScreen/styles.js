import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "25%",
  },
  mainContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageUser: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  textUser: {
    fontSize: 20,
    margin: 20,
    color: "grey",
    fontWeight: "bold",
  },
  gridUser: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginLeft: "60%",
  },
  hobbiesWrapper: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 20,
    margin: 10,
  },
  hobby: {
    height: 100,
    width: 100,
    borderRadius: 100,
    margin: 5,
  },
  gridHobby: {
    margin: 5,
  },
  texthobby: {
    textAlign: "center",
    margin: 10,
    fontFamily: "Chilanka_400Regular",
    fontSize: 18,
  },
  textcontent: {
    margin: 9,
  },
  fabsPencil: {
    display: "flex",
    position: "absolute",
    bottom: 10,
    right: 10,
    elevation: 30,
  },
});
export default styles;
