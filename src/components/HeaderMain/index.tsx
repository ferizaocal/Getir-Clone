import { View, Text, Image } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import styles from "./styles";

export default function index() {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }}
        />
        <View style={styles.headerOneView}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Ev</Text>
          <View style={styles.textView}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 11.5,
                color: "#6e7480",
                marginHorizontal: 6,
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Yenişehir Mahallesi Atatürk Caddesi No 128...
            </Text>
          </View>
          <Entypo name="chevron-right" size={22} color="#5d3ebd" />
        </View>
        <View style={styles.headerTwo}>
          <Text
            style={{
              fontSize: 10,
              color: "5d3ebd",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 2,
            }}
          >
            TVS
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "#5D3EBD",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            13
            <Text
              style={{
                fontSize: 16,
                color: "#5D3EBD",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              dk
            </Text>
          </Text>
        </View>
      </View>
      <View></View>
    </View>
  );
}
