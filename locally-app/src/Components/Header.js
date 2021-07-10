import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../utils/theme";

export default ({ headerName }) => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          paddingTop: 25,
          alignItems: "center",
          backgroundColor: Colors.white,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{headerName}</Text>
        <TouchableOpacity>
          <AntDesign name="pluscircle" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
