import StartingPage from "./StartingPage";
import DetailsAPP from "./DetailsAPP";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsMIRO from "./DetailsMIRO";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,
        animation: "fade",
        contentStyle: {
          height: 50,
        },
      }}
    >
      <Stack.Screen
        name="Inicio"
        component={StartingPage}

        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detalles técnicos del servidor"
        component={DetailsMIRO}
        // options={{ presentation: "containedTransparentModal" }}
      />
      <Stack.Screen
        name="Detalles técnicos de la aplicación"
        component={DetailsAPP}
        // options={{ presentation: "containedTransparentModal" }}
      />
    </Stack.Navigator>
  );
}
