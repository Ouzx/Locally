import { StyleSheet } from "react-native";
const Colors = {
  white: "white",
  gray: "#F4F4F6",
};

const Numbers = {
  padding: 20,
  paddingM: 30,
};

const Shadow = StyleSheet.create({
  shadow: {
    shadowOffset: { width: 25, height: 20 },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 10,
    // background color must be set
    backgroundColor: "#0000", // invisible color
    // borderWidth: 1,
    // borderColor: "black",
  },
});

export default { Colors, Numbers, Shadow };
