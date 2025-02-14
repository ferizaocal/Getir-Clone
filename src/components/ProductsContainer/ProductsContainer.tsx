import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import productsGetir from "../../../assets/productsGetir";
import CustomText from "../CustomText/CustomText";

export default function ProductsContainer() {
  return (
    <View>
      <View style={styles.productRow}>
        {productsGetir.slice(0, 2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
      <CustomText style={styles.sectionTitle}>Çubuk</CustomText>
      <View style={styles.productGrid}>
        {productsGetir.slice(2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  sectionTitle: {
    color: "gray",
    fontWeight: "bold",
    padding: 14,
  },
  productGrid: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    flexWrap: "wrap",
    flex: 1,
    paddingVertical: 10,
  },
});
