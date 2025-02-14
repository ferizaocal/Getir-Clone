import { ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SCREEN_HEIGHT } from "../../utils/dimensions";
import CustomText from "../CustomText/CustomText";

const TypeBox = ({
  item,
  active,
  setCot,
}: {
  item: string;
  active: string;
  setCot: (category: string) => void;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.typeBox,
        item === active ? styles.activeBox : styles.inactiveBox,
      ]}
      onPress={() => setCot(item)}
    >
      <CustomText style={[styles.text, item === active && styles.activeText]}>
        {item}
      </CustomText>
    </TouchableOpacity>
  );
};

export default function TypeFiltering() {
  const [category, setCategory] = useState<string>("Birlikte İyi Gider");

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {[
        "Birlikte İyi Gider",
        "Kahvaltı",
        "Dondurma",
        "Temel Gıda",
        "Atıştırmalık",
        "İçecek",
        "Fit & Form",
        "Ev Bakım",
        "Kişisel",
      ].map((item) => (
        <TypeBox
          key={item}
          setCot={setCategory}
          item={item}
          active={category}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.072,
    paddingHorizontal: 10,
    backgroundColor: "white",
    shadowColor: "#7E7B7B",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  typeBox: {
    paddingHorizontal: 10,
    borderRadius: 6,
    height: SCREEN_HEIGHT * 0.045,
    marginRight: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  activeBox: {
    backgroundColor: "#5c3ebc",
  },
  inactiveBox: {
    borderColor: "#f0eff7",
    borderWidth: 2,
  },
  text: {
    fontSize: 15,
    color: "#7849F7",
    fontWeight: "600",
  },
  activeText: {
    color: "white",
  },
});
