import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import CustomText from "../CustomText/CustomText";
import { SCREEN_HEIGHT } from "../../utils/dimensions";

interface CardButtonProps {
  addItemToCart: (product: any) => void;
  product: any;
}

export default function CardButton({
  addItemToCart,
  product,
}: CardButtonProps) {
  return (
    <TouchableOpacity
      onPress={() => addItemToCart(product)}
      style={styles.container}
    >
      <View style={styles.button}>
        <CustomText style={styles.buttonText}>Sepete Ekle</CustomText>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT * 0.1,
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#5D39C1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: SCREEN_HEIGHT * 0.05,
    width: "88%",
    marginHorizontal: "6%",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});
