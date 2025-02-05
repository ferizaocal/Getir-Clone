import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const { height, width } = Dimensions.get("window");

const TypeBox = ({
  item,
  active,
  setCot,
}: {
  item: string;
  active: string;
  setCot: any;
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          paddingHorizontal: 10,
          borderRadius: 6,
          height: height * 0.045,
          marginRight: 12,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        item == active
          ? { backgroundColor: "#5c3ebc" }
          : { borderColor: "#f0eff7", borderWidth: 2 },
      ]}
      onPress={() => setCot(item)}
    >
      <Text
        style={[
          { fontSize: 15, color: "#7849F7", fontWeight: "600" },
          item == active && { color: "white" },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default function Index() {
  const [category, setCategory] = useState<String>("Birlikte İyi Gider");
  return (
    <ScrollView
      contentContainerStyle={{ flexDirection: "row", alignItems: "center" }}
      style={{
        width: "100%",
        height: height * 0.072,
        paddingHorizontal: 10,
        backgroundColor: "white",
      }}
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
        <TypeBox setCot={setCategory} item={item} active={category} />
      ))}
    </ScrollView>
  );
}
