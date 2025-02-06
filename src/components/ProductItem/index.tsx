import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { Product } from "../../models";

type productItemProps = {
  item: Product;
};

export default function Index({ item }: productItemProps) {
  const { height, width } = Dimensions.get("window");
  return (
    <TouchableOpacity
      style={{
        width: width * 0.28,
        marginTop: 12,
        height: height * 0.23,
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: 15,
        marginBottom: 6,
      }}
    >
      <Image
        style={{
          width: width * 0.285,
          height: width * 0.285,
          borderRadius: 12,
          borderWidth: 0.2,
          borderColor: "gray",
        }}
        source={{
          uri: item.image,
        }}
      />
      <View
        style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
      >
        <Text
          style={{
            textDecorationLine: "line-through",
            color: "#747990",
            fontWeight: "bold",
            fontSize: 10,
          }}
        >
          {"\u20BA"}
          {item.fiyatIndirimli}
        </Text>

        <Text
          style={{
            color: "#5D3EBD",
            fontWeight: "bold",
            fontSize: 12,
            marginLeft: 4,
          }}
        >
          {"\u20BA"}
          {item.fiyat}
        </Text>
      </View>
      <Text style={{ fontWeight: "600", fontSize: 13, marginTop: 4 }}>
        {item.name}
      </Text>
      <Text
        style={{
          color: "#747990",
          fontSize: 12,
          marginTop: 4,
          fontWeight: "600",
        }}
      >
        {item.miktar}
      </Text>

      <TouchableOpacity
        style={{
          position: "absolute",
          borderWidth: 0.3,
          right: -10,
          top: -10,
          borderRadius: 5,
          shadowRadius: 3.8,
          shadowOpacity: 0.05,
          borderColor: "lightgrey",
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: 30,
          height: 30,
        }}
      >
        <Entypo name="plus" size={22} color="#5D3EBD" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
