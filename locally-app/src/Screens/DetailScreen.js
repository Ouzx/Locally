import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Theme from "../utils/theme";
import { BoxShadow } from "react-native-shadow";

import DetailHeader from "../Components/DetailHeader";
import Badge from "../Components/Badge";
import DetailedItem from "../Components/DetailedItem";
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
            <View style={{ alignSelf: "flex-start", marginTop: 5 }}>
              <Badge badgeColor={["#FCA780", "#FF5981"]} badgeName="Badge" />
            </View>
          </View>
        </View>
      </View>
      <View>
        <ScrollView
          contentContainerStyle={{
            padding: Theme.Numbers.paddingM,

            // alignItems: "center",
          }}
        >
          <DetailedItem colors={["#FCA780", "#FF5981"]} />
          <DetailedItem colors={["#FCA780", "#FF5981"]} />
          <DetailedItem colors={["#FCA780", "#FF5981"]} />
          <DetailedItem colors={["#FCA780", "#FF5981"]} />
        </ScrollView>
      </View>
    </View>
  );
};
