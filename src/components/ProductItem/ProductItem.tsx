import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { Product } from "../../models";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigators/HomeNavigator";
import { StackNavigationProp } from "@react-navigation/stack";

type productItemProps = {
  item: Product;
};
type ProductNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ProductDetails"
>;

export default function ProductItem({ item }: productItemProps) {
  const { height, width } = Dimensions.get("window");
  const navigation = useNavigation<ProductNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
      style={[styles.container, { width: width * 0.28, height: height * 0.23 }]}
    >
      <Image
        style={[styles.image, { width: width * 0.285, height: width * 0.285 }]}
        source={{ uri: item.image }}
      />
      <View style={styles.priceContainer}>
        <Text style={styles.discountedPrice}>
          {"\u20BA"}
          {item.fiyatIndirimli}
        </Text>
        <Text style={styles.price}>
          {"\u20BA"}
          {item.fiyat}
        </Text>
      </View>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productAmount}>{item.miktar}</Text>

      <TouchableOpacity style={styles.addButton}>
        <Entypo name="plus" size={22} color="#5D3EBD" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 15,
    marginBottom: 6,
  },
  image: {
    borderRadius: 12,
    borderWidth: 0.2,
    borderColor: "gray",
  },
  priceContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  discountedPrice: {
    textDecorationLine: "line-through",
    color: "#747990",
    fontWeight: "bold",
    fontSize: 10,
  },
  price: {
    color: "#5D3EBD",
    fontWeight: "bold",
    fontSize: 12,
    marginLeft: 4,
  },
  productName: {
    fontWeight: "600",
    fontSize: 13,
    marginTop: 4,
  },
  productAmount: {
    color: "#747990",
    fontSize: 12,
    marginTop: 4,
    fontWeight: "600",
  },
  addButton: {
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
  },
});
