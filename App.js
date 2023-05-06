import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartingPage from "./views/StartingPage";
import {
  MD3DarkTheme,
  MD3LightTheme,
  Provider,
  configureFonts,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./views/Navigation";
import { useFonts } from "expo-font";
import { Dark, Light } from "./assets/themes/themes";
// import { darkTheme } from "./assets/themes/themeGreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    LexendDeca: require("./assets/fonts/LexendDeca.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    const fontConfig = {
      fontFamily: "LexendDeca",
    };

    const theme = {
      ...Dark,
      fonts: configureFonts({ config: fontConfig }),
    };

    return (
      <Provider theme={theme}>
        <NavigationContainer theme={theme}>
          <Navigation />
        </NavigationContainer>
      </Provider>
    );
  }
}
