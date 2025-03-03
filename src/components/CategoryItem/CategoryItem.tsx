import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import { Category } from "../../models";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigators/HomeNavigator";
import { SCREEN_WIDTH } from "../../utils/dimensions";

type categoryItemProps = {
  item: Category;
};

type CategoryNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CategoryDetails"
>;

export default function CategoryItem({ item }: categoryItemProps) {
  const navigation = useNavigation<CategoryNavigationProp>();
  return (
    <TouchableOpacity
      style={{
        width: SCREEN_WIDTH * 0.25,
        height: SCREEN_WIDTH * 0.24,
        flexDirection: "column",
        alignItems: "center",

        marginTop: 7,
      }}
      onPress={() => navigation.navigate("CategoryDetails", { category: item })}
    >
      <Image
        style={{
          width: SCREEN_WIDTH * 0.18,
          height: SCREEN_WIDTH * 0.18,
          borderRadius: 10,
          marginBottom: 5,
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
