import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CategoryItem from "../CategoryItem/CategoryItem";
import categoriesGetir from "../../../assets/categoriesGetir";

export default function CategoryList() {
  return (
    <FlatList
      data={categoriesGetir}
      renderItem={({ item }) => <CategoryItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
      numColumns={4}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
