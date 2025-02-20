import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import DetailBox from "../../components/DetailBox/DetailBox";
import DetailProperty from "../../components/DetailProperty/DetailProperty";
import CardButton from "../../components/CardButton/CardButton";
import CustomText from "../../components/CustomText/CustomText";
import { useHideTabBar } from "../../hooks/useHideTabBar";

type ProductDetailsProps = {
  route: {
    params: {
      product: Product;
    };
  };
};

export default function ProductDetailsScreen({ route }: ProductDetailsProps) {
  useHideTabBar();

  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    setProduct(route?.params?.product);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <ImageCarousel images={product?.images ?? []} />
        <DetailBox
          price={product?.fiyat ?? 0}
          name={product?.name ?? ""}
          quantity={product?.miktar ?? ""}
        />
        <CustomText style={styles.detailText}>Detaylar</CustomText>

        <DetailProperty />
      </View>
      {product && <CardButton product={product} />}
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
