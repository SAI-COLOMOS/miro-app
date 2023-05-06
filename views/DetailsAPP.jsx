import { Flex, HStack, VStack, Wrap } from "@react-native-material/core";
import { IconButton, Text, useTheme } from "react-native-paper";
import DetailsView from "./Shared/DetailsView";
import { Image } from "expo-image";
import Container from "./Shared/Container";
import Cards from "./Shared/Cards";

export default function DetailsAPP() {
  const theme = useTheme();
  return (
    <DetailsView title="Detalles técnicos de la aplicación">
      <VStack>
        <Container style={{ backgroundColor: theme.colors.backdrop }}>
          <>
            <Text variant="titleLarge">Un lenguaje varias posibilidades</Text>

            <Text variant="bodyLarge">
              La aplicación fue creada enteramente con JavaScript, utilizando la
              librería de React Native y el framework de Expo
            </Text>
          </>
        </Container>

        <Container style={{ backgroundColor: theme.colors.primaryContainer }}>
          <>
            <Text variant="titleLarge">
              Multiplataforma, nadie se queda afuera
            </Text>

            <Text variant="bodyLarge">
              Gracias a la versatilidad de React Native, nuestra aplicación está
              disponible para los dos principales sistemas operativos para
              teléfonos inteligentes: iOS y Android, por lo que cualquier
              persona podrá utilizar esta app sin importar qué dispositivo móvil
              utilice, claro, siempre y cuando este cumpla con los requisitos
              mínimos de hardware y software
            </Text>
            <Wrap spacing={20} wrap="wrap" pt={20}>
              <VStack fill minW={300}>
                <Cards
                  uri={"android.png"}
                  title="Android"
                  content="Nuestra aplicación es compatible con todos aquellos
                 dispositivos Android que tengan la versión 5 en adelante"
                />
              </VStack>

              <VStack fill minW={300}>
                <Cards
                  uri={"ios.png"}
                  title="iOS"
                  content="Nuestra aplicación es compatible con todos aquellos
                 dispositivos iOS que tengan la versión 13 en adelante"
                />
              </VStack>
            </Wrap>
          </>
        </Container>
      </VStack>
    </DetailsView>
  );
}
