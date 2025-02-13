import { Text, StyleSheet, TextProps } from "react-native";
import React from "react";

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  style?: object;
}
export default function CustomText({
  children,
  style,
  ...props
}: CustomTextProps) {
  return (
    <Text style={[styles.default, style]} {...props}>
      {children}
    </Text>
  );
}
const styles = StyleSheet.create({
  default: {
    fontWeight: "500",
  },
});
