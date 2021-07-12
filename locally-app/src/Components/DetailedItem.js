import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Seperator from "../Components/Seperator";

export default ({ colors, des1, Icon }) => {
  return (
    <View style={{ flexDirection: "row", marginBottom: 10 }}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <View
            style={{ elevation: 20, borderRadius: 9999, paddingVertical: 10 }}
          >
            <LinearGradient
              start={[0.5, 1]}
              end={[0.5, 0]}
              colors={colors}
              style={{ padding: 10, borderRadius: 9999 }}
            >
              <Icon />
            </LinearGradient>
          </View>
          <View style={{ marginLeft: 30 }}>
            <Text style={{ fontSize: 24, marginVertical: 3 }}>{des1}</Text>
          </View>
        </TouchableOpacity>
        <View style={{ marginTop: 20 }}>
          <Seperator />
        </View>
      </View>
    </View>
  );
};
