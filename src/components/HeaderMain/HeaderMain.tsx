import { View, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/dimensions";
import CustomText from "../CustomText/CustomText";

export default function HeaderMain() {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }}
        />
        <View style={styles.headerOneView}>
          <CustomText style={styles.title}>Ev</CustomText>
          <View style={styles.textView}>
            <CustomText
              style={styles.address}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Yenişehir Mahallesi Atatürk Caddesi No 128 Daire 1
            </CustomText>
          </View>
          <Entypo name="chevron-right" size={22} color="#5d3ebd" />
        </View>
        <View style={styles.headerTwo}>
          <CustomText style={styles.tvsLabel}>TVS</CustomText>
          <CustomText style={styles.tvsTime}>
            13<CustomText style={styles.tvsMinutes}>dk</CustomText>
          </CustomText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerMain: {
    height: SCREEN_HEIGHT * 0.064,
    backgroundColor: "#f7d102",
  },
  headerOne: {
    height: SCREEN_HEIGHT * 0.064,
    width: "80%",
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: "3%",
    borderTopRightRadius: 35,
    borderBottomRightRadius: 35,
  },
  image: {
    width: 30,
    height: 30,
  },
  headerOneView: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    borderLeftWidth: 2,
    borderLeftColor: "#f3f2fd",
    paddingLeft: 8,
  },
  textView: {
    width: SCREEN_WIDTH - 205,
  },
  headerTwo: {
    height: SCREEN_HEIGHT * 0.064,
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  address: {
    fontSize: 11.5,
    color: "#6e7480",
    marginHorizontal: 6,
  },
  tvsLabel: {
    fontSize: 10,
    color: "#5D3EBD",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 2,
  },
  tvsTime: {
    fontSize: 20,
    color: "#5D3EBD",
    fontWeight: "bold",
    textAlign: "center",
  },
  tvsMinutes: {
    fontSize: 16,
    color: "#5D3EBD",
    fontWeight: "bold",
  },
});
