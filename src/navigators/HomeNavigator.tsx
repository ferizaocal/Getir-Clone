import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import React, { useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen/ProductDetailsScreen";
import { Category, Product } from "../models";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Foundation from "@expo/vector-icons/Foundation";
import CardScreen from "../screens/CardScreen/CardScreen";

export type RootStackParamList = {
  Home: undefined;
  CategoryDetails: { category: Category };
  ProductDetails: { product: Product };
  CardScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const { width, height } = Dimensions.get("window");

export default function HomeNavigator() {
  const commonHeaderOptions = {
    headerStyle: { backgroundColor: "#5c3ebc" },
    headerTintColor: "white",
    headerBackTitle: "",
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          ...commonHeaderOptions,
          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{ width: 70, height: 30 }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={({ navigation }) => ({
          ...commonHeaderOptions,
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Ürünler
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CardScreen")}
              style={{
                width: width * 0.22,
                height: 33,
                backgroundColor: "white",
                marginRight: width * 0.02,
                borderRadius: 9,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 23, height: 23, marginLeft: 6 }}
                source={require("../../assets/cart.png")}
              />
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#F3EFFE",
                  height: 33,
                  borderTopRightRadius: 9,
                  borderBottomRightRadius: 9,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#5D3EBD",
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  <Text>{"\u20BA"}</Text>
                  24,00
                </Text>
              </View>
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={({ navigation }) => ({
          ...commonHeaderOptions,
          headerLeft: () => <CloseButton navigation={navigation} />,
          headerRight: () => <FavoriteButton />,
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Ürün Detayı
            </Text>
          ),
        })}
      />
      <Stack.Screen
        name="CardScreen"
        component={CardScreen}
        options={({ navigation }) => ({
          headerTintColor: "white",
          headerBackTitle: "",
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Sepetim
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 8 }}
            >
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Ionicons
                style={{ marginRight: 8 }}
                name="trash"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const CloseButton = ({ navigation }: { navigation: any }) => (
  <TouchableOpacity
    onPress={() => navigation.goBack()}
    style={{ marginLeft: 12 }}
  >
    <Ionicons name="close" size={24} color="white" />
  </TouchableOpacity>
);

const FavoriteButton = () => (
  <TouchableOpacity style={{ marginRight: 12 }}>
    <Foundation name="heart" size={24} color="#32177a" />
  </TouchableOpacity>
);
