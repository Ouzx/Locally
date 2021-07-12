import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Badges from "../utils/Badges";

export default ({ badgeId }) => {
  const badge = Badges[badgeId];

  return (
    <TouchableOpacity>
      <LinearGradient
        start={[0, 1]}
        end={[1, 0]}
        colors={badge.badgeColor}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 1,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text numberOfLines={1} style={{ color: "white" }}>
          {badge.Name}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
