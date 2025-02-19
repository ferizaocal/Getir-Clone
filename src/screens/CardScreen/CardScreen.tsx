import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
} from "react-native";
import CardItem from "../../components/CardItem/CardItem";
import productsGetir from "../../../assets/productsGetir";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useHideTabBar } from "../../hooks/useHideTabBar";
import { useAppSelector } from "../../hooks/useRedux";
import { SCREEN_HEIGHT } from "../../utils/dimensions";

export default function CardScreen() {
  useHideTabBar();
  const { items, totalPrice } = useAppSelector((state) => state.cart);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <FlatList
          style={styles.flatList}
          data={items}
          renderItem={({ item }) => (
            <CardItem product={item.product} quantity={item.quantity} />
          )}
        />
        <Text style={styles.suggestedText}>Önerilen Ürünler</Text>
        <ScrollView
          style={styles.horizontalScroll}
          showsHorizontalScrollIndicator={false}
          bounces
          horizontal
        >
          {productsGetir.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </ScrollView>
      </ScrollView>

      <TouchableOpacity style={styles.bottomContainer}>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>Devam</Text>
        </TouchableOpacity>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>
            {"\u20BA"}
            {totalPrice.toFixed(2)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  flatList: {
    backgroundColor: "#f9f9f9",
  },
  suggestedText: {
    padding: 15,
    fontWeight: "bold",
    color: "#5D3EBD",
  },
  horizontalScroll: {
    backgroundColor: "white",
    height: SCREEN_HEIGHT * 0.25,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: SCREEN_HEIGHT * 0.12,
    paddingHorizontal: "4%",
    width: "100%",
    backgroundColor: "#f8f8f8",
    position: "absolute",
    bottom: 0,
  },
  continueButton: {
    flex: 3,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: "#5D3EBD",
    height: SCREEN_HEIGHT * 0.06,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10,
  },
  continueText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  priceContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: SCREEN_HEIGHT * 0.06,
    marginTop: -10,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  priceText: {
    color: "#5D3EBD",
    fontWeight: "bold",
    fontSize: 15,
  },
});
