import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Theme from "../utils/theme";
import DetailHeader from "../Components/DetailHeader";
import { BoxShadow } from "react-native-shadow";

import * as pps from "../../assets/pps";
const imgSize = 100;
const shadow = Theme.Shadow;

shadow.width = imgSize / 2;
shadow.height = imgSize / 2;

export default ({ userName, userImg, badgeText, userColor, badgeColor }) => {
  return (
    <View>
      <DetailHeader headerName="Detay" colors={["#FCA780", "#FF5981"]} />
      <View
        style={{
          padding: Theme.Numbers.paddingM,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            top: -50,
          }}
        >
          <BoxShadow setting={shadow}>
            <Image
              source={pps.x1}
              style={{ width: imgSize, height: imgSize, borderRadius: 12 }}
            />
          </BoxShadow>
        </View>
        <View style={{ left: imgSize / 2, bottom: imgSize / 2 }}>
          <View style={{ top: imgSize / 4, left: imgSize / 6 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              Leon Garcia
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
