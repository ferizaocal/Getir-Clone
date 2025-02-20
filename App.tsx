import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import * as Linking from "expo-linking";

const prefix = Linking.createURL("/");

export default function App() {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Sohbet: {
          screens: {
            CardScreen: {
              path: "cardScreen/:message",
              parse: {
                message: (message: string) => `${message}`,
              },
            },
          },
        },
      },
    },
  };
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
