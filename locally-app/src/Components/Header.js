import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Theme from "../utils/theme";

export default ({ headerName, onPress }) => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={Theme.Colors.white} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          paddingTop: 25,
          alignItems: "center",
          backgroundColor: Theme.Colors.white,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{headerName}</Text>
        <TouchableOpacity onPress={onPress}>
          <AntDesign name="pluscircle" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
