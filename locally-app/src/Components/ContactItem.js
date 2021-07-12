import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import Badge from "../Components/Badge";
import Theme from "../utils/theme";
import TempData from "../utils/TempData";
import { useNavigation } from "@react-navigation/native";

import Seperator from "../Components/Seperator";

const imgSize = 70;

export default ({ des1, img, badgeId, dataId }) => {
  const navigation = useNavigation();
  const user = TempData[dataId];
  return (
    <View
      style={{
        flexDirection: "row",
        margin: Theme.Numbers.paddingM,
        marginBottom: 0,
      }}
    >
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.navigate("Detay", user)}
        >
          <View
            style={{
              elevation: 20,
              paddingVertical: 10,
              borderRadius: 9999,
            }}
          >
            <Image
              source={img}
              style={{ width: imgSize, height: imgSize, borderRadius: 9999 }}
            />
          </View>
          <View style={{ marginLeft: 30, marginTop: -20, flex: 1 }}>
            <Text style={{ fontSize: 24, marginVertical: 3 }}>{des1}</Text>
            <View style={{ position: "relative" }}>
              <View style={{ position: "absolute" }}>
                <Badge badgeId={badgeId} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ marginTop: 20 }}>
          <Seperator />
        </View>
      </View>
    </View>
  );
};
