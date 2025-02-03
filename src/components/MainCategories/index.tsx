import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import CategoryItem from "../../components/CategoryItem";
import categoriesGetir from "../../../assets/categoriesGetir";
import { Category } from "../../models";

export default function index() {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <View>
      <View style={styles.listContainer}>
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});
