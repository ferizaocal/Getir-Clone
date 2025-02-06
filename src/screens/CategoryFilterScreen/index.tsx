import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import CategoryFiltering from "../../components/CategoryFiltering";
import { Category } from "../../models";
import TypeFiltering from "../../components/TypeFiltering";
import ProducsContainer from "../../components/ProductsContainer";

export default function Index(props: any) {
  const [category, setCategory] = useState<Category[]>(
    (props.route?.params?.category as Category[]) || []
  );
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
      <ProducsContainer />
    </ScrollView>
  );
}
