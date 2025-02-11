import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

export default function Index(props: any) {
  return (
    <TouchableOpacity
      onPress={() => props.addItemToCart(props.product)}
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: height * 0.1,
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          backgroundColor: "#5D39C1",
          flexDirection: "row",
          alignItems: "center",
          height: height * 0.05,
          justifyContent: "center",
          width: "88%",
          marginHorizontal: "6%",
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "bold", color: "white" }}>
          Sepete Ekle
        </Text>
      </View>
    </TouchableOpacity>
  );
}
