import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import { Category } from "../../models";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
type categoryItemProps = {
  item: Category;
};
export default function index({ item }: categoryItemProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        width: width * 0.25,
        height: width * 0.24,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
      }}
      onPress={() => navigation.navigate("CategoryDetails", { category: item })}
    >
      <Image
        style={{
          width: width * 0.18,
          height: width * 0.18,
          borderRadius: 10,
        }}
        source={{
          uri: item.src,
        }}
      />
      <Text style={{ fontSize: 12, color: "#616161", fontWeight: "500" }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}
