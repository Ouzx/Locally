import React from "react";
import { View, Text, FlatList } from "react-native";
import Theme from "../utils/theme";
import TempData from "../utils/TempData";

import Header from "../Components/Header";
import Seperator from "../Components/Seperator";
import ContactItem from "../Components/ContactItem";

function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Seperator />
      <View
        style={{
          // alignItems: "center",
          backgroundColor: Theme.Colors.white,
          // flex: 1,
        }}
      >
        <FlatList
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{ height: 250 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <ContactItem
              des1={item.des1}
              img={item.img}
              badgeId={item.badgeId}
              dataId={parseInt(item.key)}
            />
          )}
          data={TempData}
        />
      </View>
    </View>
  );
}

export default HomeScreen;
