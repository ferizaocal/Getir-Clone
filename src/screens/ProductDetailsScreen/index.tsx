import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useHideTabBar } from "../../navigators/HomeNavigator";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel";
import DetailBox from "../../components/DetailBox";
import DetailProperty from "../../components/DetailProperty";
import CardButton from "../../components/CardButton";

export default function Index(props: any) {
  useHideTabBar();

  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    setProduct(props.route?.params?.product);
  }, []);
  console.log(product);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
        <ImageCarousel images={product?.images ?? []} />
        <DetailBox
          price={product?.fiyat ?? 0}
          name={product?.name ?? ""}
          quantity={product?.miktar ?? ""}
        />
        <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 13,
            color: "#808B99",
            fontWeight: "600",
            fontSize: 14,
          }}
        >
          Detaylar
        </Text>
        <DetailProperty />
      </ScrollView>
      <CardButton />
    </View>
  );
}
