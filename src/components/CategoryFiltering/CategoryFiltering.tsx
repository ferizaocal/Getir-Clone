import { View, Text, ScrollView, Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import categoriesGetir from "../../../assets/categoriesGetir";
import { Category } from "../../models";
import CustomText from "../CustomText/CustomText";
import { SCREEN_HEIGHT } from "../../utils/dimensions";

const CategoryBox = ({
  item,
  active,
}: {
  active: Category;
  item: Category;
}) => {
  return (
    <View
      style={[
        styles.categoryBox,
        item.name === active?.name && styles.activeCategory,
      ]}
    >
      <CustomText style={styles.categoryText}>{item.name}</CustomText>
    </View>
  );
};

export default function CategoryFiltering({
  category,
}: {
  category: Category[];
}) {
  const [categories] = useState<Category[]>(categoriesGetir);

  return (
    <ScrollView
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {categories.map((item) => (
        <CategoryBox key={item.id} item={item} active={category} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categoryBox: {
    paddingHorizontal: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  activeCategory: {
    borderBottomColor: "#ffd00c",
    borderBottomWidth: 2,
  },
  categoryText: {
    fontSize: 14,
    color: "white",
    fontWeight: "600",
  },
  scrollView: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.065,
    backgroundColor: "#7849f7",
  },
});
