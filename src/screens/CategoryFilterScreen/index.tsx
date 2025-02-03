import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import CategoryFiltering from "../../components/CategoryFiltering";
import { Category } from "../../models";

export default function Index(props: any) {
  const [category, setCategory] = useState<Category[]>(
    props.route?.params?.category
  );
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
    </ScrollView>
  );
}
