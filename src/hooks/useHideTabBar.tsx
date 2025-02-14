import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

export function useHideTabBar() {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const parent = navigation.getParent();
      parent?.setOptions({ tabBarStyle: { display: "none" } });

      return () => {
        parent?.setOptions({ tabBarStyle: { display: "flex" } });
      };
    }, [navigation])
  );
}
