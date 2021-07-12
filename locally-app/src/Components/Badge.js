import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default ({ badgeName, badgeColor }) => {
  return (
    <TouchableOpacity>
      <LinearGradient
        start={[0, 1]}
        end={[1, 0]}
        colors={badgeColor}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 1,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>{badgeName}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
