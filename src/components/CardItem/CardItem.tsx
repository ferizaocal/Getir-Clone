import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { Product } from "../../models";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/dimensions";
import CustomText from "../CustomText/CustomText";
import { useAppDispatch } from "../../hooks/useRedux";
import { addToCart, removeFromCart } from "../../redux/features/cardSlice";

type CardItemProps = {
  product: Product;
};

export default function CardItem({ product }: CardItemProps) {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.productInfo}>
          <Image style={styles.productImage} source={{ uri: product.image }} />
          <View style={styles.textContainer}>
            <CustomText style={styles.productName}>{product.name}</CustomText>
            <CustomText style={styles.productAmount}>
              {product.miktar}
            </CustomText>
            <CustomText style={styles.productPrice}>
              <CustomText>{"\u20BA"}</CustomText>
              {product.fiyat}
            </CustomText>
          </View>
        </View>
        <View style={styles.counterContainer}>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => dispatch(removeFromCart(product.id))}
          >
            <CustomText style={styles.counterText}>-</CustomText>
          </TouchableOpacity>
          <View style={styles.counterValue}>
            <CustomText style={styles.counterValueText}>
              {product.miktar}
            </CustomText>
          </View>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => dispatch(addToCart(product))}
          >
            <CustomText style={styles.counterText}>+</CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    height: SCREEN_HEIGHT * 0.13,
    width: SCREEN_WIDTH * 0.92,
    marginHorizontal: SCREEN_WIDTH * 0.04,
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.4,
    borderBottomColor: "lightgrey",
  },
  productInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  productImage: {
    height: SCREEN_HEIGHT * 0.09,
    width: SCREEN_HEIGHT * 0.09,
    borderRadius: 8,
    borderWidth: 0.4,
    borderColor: "lightgray",
  },
  textContainer: {
    marginLeft: 8,
  },
  productName: {
    fontWeight: "500",
    fontSize: 13,
    maxWidth: SCREEN_WIDTH * 0.44,
  },
  productAmount: {
    color: "#848897",
    fontWeight: "600",
    fontSize: 12,
    marginTop: 3,
  },
  productPrice: {
    color: "#5D3EBD",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 6,
  },
  counterContainer: {
    width: SCREEN_WIDTH * 0.22,
    height: SCREEN_HEIGHT * 0.04,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 0.5,
    borderColor: "lightgrey",
    shadowOpacity: 0.4,
    shadowColor: "gray",
  },
  counterButton: {
    flex: 1,
    alignItems: "center",
  },
  counterText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#5D3EBD",
  },
  counterValue: {
    flex: 1,
    backgroundColor: "#5D3EBD",
    height: SCREEN_HEIGHT * 0.04,
    justifyContent: "center",
    alignItems: "center",
  },
  counterValueText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
