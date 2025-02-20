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
import { Product } from "../../models";
import { useAppDispatch } from "../../hooks/useRedux";
import { addToCart } from "../../redux/features/cardSlice";

interface CardButtonProps {
  product: Product;
}

export default function CardButton({ product }: CardButtonProps) {
  const dispatch = useAppDispatch();
  return (
    <TouchableOpacity
      onPress={() => dispatch(addToCart(product))}
      style={styles.container}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <CustomText style={styles.buttonText}>Sepete Ekle</CustomText>
        </View>
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
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#5D39C1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: SCREEN_HEIGHT * 0.05,
    width: "88%",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});
