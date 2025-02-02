import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderMain from "../../components/HeaderMain";
import BannerCarousel from "../../components/BannerCarousel";

export default function index() {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <HeaderMain />
      <BannerCarousel />
    </ScrollView>
  );
}
