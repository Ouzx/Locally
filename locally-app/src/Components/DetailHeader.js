import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Theme from "../utils/theme";

export default ({ headerName }) => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={Theme.Colors.white} />
      <View style={{ height: 150, backgroundColor: Theme.Colors.white }}>
        <View
          style={{
            top: 50,
            left: 30,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 24, marginLeft: Theme.Numbers.padding }}>
            {headerName}
          </Text>
        </View>
      </View>
    </View>
  );
};
