import React from "react";
import { View, Text, Image } from "react-native";
import Theme from "../utils/theme";
import { BoxShadow } from "react-native-shadow";

import DetailHeader from "../Components/DetailHeader";
import Badge from "../Components/Badge";
import DetailedItem from "../Components/DetailedItem";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const imgSize = 100;
const shadow = Theme.Shadow;

shadow.width = imgSize / 2;
shadow.height = imgSize / 2;

export default ({ route, navigation }) => {
  const user = route.params;

  return (
    <View>
      <DetailHeader headerName="Detay" colors={user.DetailedColor} />
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
              source={user.img}
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
              {user.des1}
            </Text>
            <View style={{ alignSelf: "flex-start", marginTop: 5 }}>
              <Badge badgeId={user.badgeId} />
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
        <Text style={{ fontSize: 32 }}>{user.num}</Text>
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
          Icon={() => <Ionicons name="call" size={24} color="white" />}
        />
        <DetailedItem
          colors={Theme.Gradients.g7}
          des1="Mesaj"
          Icon={() => <Entypo name="message" size={24} color="white" />}
        />
        <DetailedItem
          colors={Theme.Gradients.g8}
          des1="Ayarlar"
          Icon={() => (
            <Ionicons name="settings-sharp" size={24} color="white" />
          )}
        />
        <DetailedItem
          colors={Theme.Gradients.g9}
          des1="Paylaş"
          Icon={() => <Entypo name="share" size={24} color="white" />}
        />
      </View>
    </View>
  );
};
