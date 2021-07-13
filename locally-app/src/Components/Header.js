import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Theme from "../utils/theme";
import SvgExport30 from "./icons/Svgexport30";
export default ({ onPress }) => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={Theme.Colors.white} />
      <View
        style={{
          flexDirection: "row",
          // justifyContent: "space-between",
          padding: 20,
          paddingTop: 25,
          alignItems: "center",
          backgroundColor: Theme.Colors.white,
        }}
      >
        <View style={{ flex: 1 }}>
          <SvgExport30 fill="black" width={150} />
        </View>
        <TouchableOpacity onPress={onPress}>
          <AntDesign name="pluscircle" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
