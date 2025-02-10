import { View, Text } from "react-native";
import React from "react";

type DetailBoxProps = {
  price: number;
  name: string;
  quantity: string;
};

export default function Index({ price, name, quantity }: DetailBoxProps) {
  return (
    <View
      style={{ width: "100%", alignItems: "center", backgroundColor: "white" }}
    >
      <Text
        style={{
          color: "#5D3EBD",
          fontWeight: "bold",
          fontSize: 20,
          marginTop: 12,
        }}
      >
        {"\u20BA"}
        {price}
      </Text>
      <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 12 }}>
        {name}
      </Text>
      <Text
        style={{
          color: "#848897",
          fontWeight: "600",
          marginTop: 8,
          paddingBottom: 18,
        }}
      >
        {quantity}
      </Text>
    </View>
  );
}
