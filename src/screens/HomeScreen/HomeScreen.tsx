import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import BannerCarousel from "../../components/BannerCarousel/BannerCarousel";
import MainCategories from "../../components/MainCategories/MainCategories";

export default function HomeScreen() {
  return (
    <>
      <HeaderMain />
      <BannerCarousel />
      <MainCategories />
    </>
  );
}
