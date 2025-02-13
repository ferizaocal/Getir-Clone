import { View, StyleSheet } from "react-native";
import React from "react";
import CustomText from "../CustomText/CustomText";

type DetailBoxProps = {
  price: number;
  name: string;
  quantity: string;
};

export default function DetailBox({ price, name, quantity }: DetailBoxProps) {
  return (
    <View style={styles.container}>
      <CustomText style={styles.price}>₺{price}</CustomText>
      <CustomText style={styles.name}>{name}</CustomText>
      <CustomText style={styles.quantity}>{quantity}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },
  price: {
    color: "#5D3EBD",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
  },
  name: {
    fontSize: 16,
    marginTop: 8,
    fontWeight: "700",
  },
  quantity: {
    color: "#848897",
    fontWeight: "600",
    marginTop: 6,
    paddingBottom: 18,
  },
});
