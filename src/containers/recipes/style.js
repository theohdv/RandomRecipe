import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen_container: {
    flex: 1
  },
  recipe_item: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  desc_content: {
    paddingLeft: 10,
    width: 0,
    flexGrow: 1
  },
  ingredients_desc: {
    opacity: 0.7
  },
  thumbnail: {
    width: 60,
    height: 60,
    resizeMode: "contain"
  }
});

export default styles;
