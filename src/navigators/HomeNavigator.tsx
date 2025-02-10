import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { Category, Product } from "../models";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Foundation from "@expo/vector-icons/Foundation";

export type RootStackParamList = {
  Home: undefined;
  CategoryDetails: { category: Category };
  ProductDetails: { product: Product };
};

const Stack = createStackNavigator<RootStackParamList>();

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
        options={{
          ...commonHeaderOptions,
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Ürünler
            </Text>
          ),
        }}
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

export function useHideTabBar() {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const parent = navigation.getParent();
      parent?.setOptions({ tabBarStyle: { display: "none" } });

      return () => {
        parent?.setOptions({ tabBarStyle: { display: "flex" } });
      };
    }, [navigation])
  );
}
