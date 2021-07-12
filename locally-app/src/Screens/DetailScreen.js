import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Theme from "../utils/theme";
import { BoxShadow } from "react-native-shadow";

import DetailHeader from "../Components/DetailHeader";
import Badge from "../Components/Badge";
import DetailedItem from "../Components/DetailedItem";
import * as pps from "../../assets/pps";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const imgSize = 100;
const shadow = Theme.Shadow;

shadow.width = imgSize / 2;
shadow.height = imgSize / 2;

export default ({ userName, userImg, badgeText, userColor, badgeColor }) => {
  return (
    <View>
      <DetailHeader headerName="Detay" colors={Theme.Gradients.g1} />
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
              <Badge badgeColor={Theme.Gradients.g1} badgeName="Badge" />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 10,
        }}
      >
        <Text style={{ fontSize: 32 }}>(543) 548 6221</Text>
      </View>
      <View
        style={{
          padding: Theme.Numbers.paddingM,
          alignItems: "center",
        }}
      >
        <DetailedItem
          colors={Theme.Gradients.g6}
          des1="Ara"
          des2="5535216352"
          Icon={() => <Ionicons name="call" size={24} color="white" />}
        />
        <DetailedItem
          colors={Theme.Gradients.g7}
          des1="Mesaj"
          des2="5535216352"
          Icon={() => <Entypo name="message" size={24} color="white" />}
        />
        <DetailedItem
          colors={Theme.Gradients.g8}
          des1="Ayarlar"
          des2="5535216352"
          Icon={() => (
            <Ionicons name="settings-sharp" size={24} color="white" />
          )}
        />
        <DetailedItem
          colors={Theme.Gradients.g9}
          des1="Paylaş"
          des2="5535216352"
          Icon={() => <Entypo name="share" size={24} color="white" />}
        />
      </View>
    </View>
  );
};
