import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import CardItem from "../../components/CardItem";
import productsGetir from "../../../assets/productsGetir";
import { useHideTabBar } from "../../navigators/HomeNavigator";
import ProductItem from "../../components/ProductItem";

const { width, height } = Dimensions.get("window");
export default function Index() {
  useHideTabBar();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <FlatList
          style={{ backgroundColor: "f9f9f9" }}
          data={productsGetir.slice(0, 4)}
          renderItem={({ item }) => <CardItem product={item} />}
        />
        <Text style={{ padding: 15, fontWeight: "bold", color: "#5D3EBD" }}>
          Önerilen Ürünler
        </Text>
        <ScrollView
          style={{ backgroundColor: "white", height: height * 0.25 }}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          horizontal={true}
        >
          {productsGetir.map((item, index) => (
            <ProductItem key={index} index={item.id} item={item} />
          ))}
        </ScrollView>
      </ScrollView>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: height * 0.12,
          paddingHorizontal: "4%",
          width: "100%",
          backgroundColor: "#f8f8f8",
          position: "absolute",
          bottom: 0,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 3,
            borderBottomLeftRadius: 8,
            borderTopLeftRadius: 8,
            backgroundColor: "#5D3EBD",
            height: height * 0.06,
            justifyContent: "center",
            alignItems: "center",
            marginTop: -10,
          }}
        >
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            height: height * 0.06,
            marginTop: -10,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <Text
            style={{
              color: "#5D3EBD",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            <Text>{"\u20BA"}</Text>
            24.99
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
