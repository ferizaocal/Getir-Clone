import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import CustomText from "../CustomText/CustomText";

type TextComponentProps = {
  detail: string;
  isTitle: boolean;
  isLastItem: boolean;
};

const TextComponent = ({ detail, isTitle, isLastItem }: TextComponentProps) => (
  <View style={[styles.textContainer, isLastItem && { borderBottomWidth: 0 }]}>
    <CustomText style={[styles.text, isTitle && styles.titleText]}>
      {detail}
    </CustomText>
    {!isTitle && <Feather name="chevron-down" size={20} color="#9F9F9F" />}
  </View>
);

export default function DetailProperty() {
  const details = [
    "Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti",
    "İçindekiler",
    "Besin Değerleri",
    "Kullanım",
    "Ek Bilgiler",
  ];

  return (
    <View style={styles.container}>
      {details.map((item, index) => (
        <TextComponent
          key={item}
          detail={item}
          isTitle={index === 0}
          isLastItem={index === details.length - 1}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "white",
  },
  textContainer: {
    paddingVertical: 12,
    borderBottomWidth: 0.3,
    borderBottomColor: "lightgray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#687482",
    fontSize: 13,
    fontWeight: "500",
  },
  titleText: {
    color: "black",
    fontSize: 10,
    fontWeight: "400",
  },
});
