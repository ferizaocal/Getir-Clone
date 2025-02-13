import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useHideTabBar } from "../../navigators/HomeNavigator";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import DetailBox from "../../components/DetailBox/DetailBox";
import DetailProperty from "../../components/DetailProperty/DetailProperty";
import CardButton from "../../components/CardButton/CardButton";
import CustomText from "../../components/CustomText/CustomText";

export default function ProductDetailsScreen(props: any) {
  useHideTabBar();

  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    setProduct(props.route?.params?.product);
  }, []);
  console.log(product);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <ImageCarousel images={product?.images ?? []} />
        <DetailBox
          price={product?.fiyat ?? 0}
          name={product?.name ?? ""}
          quantity={product?.miktar ?? ""}
        />
        <CustomText style={styles.detailText}>Detaylar</CustomText>

        <DetailProperty />
      </ScrollView>
      <CardButton
        product={product}
        addItemToCart={() => console.log("Ürün sepete eklendi")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  detailText: {
    paddingHorizontal: 10,
    paddingVertical: 13,
    color: "#808B99",
    fontWeight: "600",
    fontSize: 14,
  },
});
