import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen_container: {
    flex: 1,
    paddingHorizontal: 20
  },
  header: {
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: "contain"
  },
  welcome_msg: {
    fontSize: 20
  },
  header_title: {
    fontWeight: "bold"
  },
  ingredient_input: {
    width: 100,
    height: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 3,
    borderColor: "grey",
    marginVertical: 10
  },
  desc_msg: {
    textAlign: "center",
    opacity: 0.7
  },
  ingredient: {
    backgroundColor: "orange",
    borderRadius: 3,
    padding: 5,
    marginLeft: 5
  },
  row_container: {
    flexDirection: "row"
  },
  api: {
    position: "absolute",
    bottom: 10,
    right: "25%"
  }
});

export default styles;
