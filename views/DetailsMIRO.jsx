import { Flex, HStack, VStack, Wrap } from "@react-native-material/core";
import { IconButton, Text, useTheme } from "react-native-paper";
import DetailsView from "./Shared/DetailsView";
import { Image } from "expo-image";
import MiniContainer from "./Shared/Minicontainer";
import Container from "./Shared/Container";
import Cards from "./Shared/Cards";

export default function DetailsMIRO() {
  const theme = useTheme();
  return (
    <DetailsView title="Detalles técnicos del servidor">
      <VStack>
        <Container style={{ backgroundColor: theme.colors.backdrop }}>
          <>
            <Text variant="titleLarge">Un viejo conocido bajo el capó</Text>

            <Text variant="bodyLarge">
              Nuestro servidor corre enteramente gracias a TypeScript, un
              superconjunto de JavaScript, con esto nos aseguramos de brindar un
              software lo suficientemente robusto, estable y a su vez escalable
              y familiar
            </Text>
          </>
        </Container>

        <Container style={{ backgroundColor: theme.colors.primaryContainer }}>
          <>
            <Text variant="titleLarge">Node.JS, Express y MongoDB</Text>

            <Text variant="bodyLarge">
              El trio perfecto para entregar un software robusto y moderno a la
              vez
            </Text>

            <Wrap spacing={20} wrap="wrap" pt={20}>
              <VStack fill minW={300}>
                <Cards
                  uri="nodejs.png"
                  title="Node.js"
                  content="El director encargado de orquestar esta obra, pues es gracias
               a él que el servidor funciona"
                />
              </VStack>

              <VStack fill minW={300}>
                <Cards
                  uri="express.png"
                  title="Express"
                  content="¿Una nueva petición acaba de llegar al servidor? No hay
                  problema, Express se encarga de recibirlas y contestarlas, así
                  como de realizar las modificaciones solicitadas"
                />
              </VStack>

              <VStack fill minW={300}>
                <Cards
                  uri="mongodb.png"
                  title="MongoDB"
                  content="Un servidor no es servidor si este no cuenta con su respectiva
                  base de datos, así que MongoBD llega para tomar dicho rol tan
                  importante: almacenar información"
                />
              </VStack>
            </Wrap>
          </>
        </Container>

        <Container style={{ backgroundColor: theme.colors.secondaryContainer }}>
          <>
            <Text variant="titleLarge">Acerca de la infraestructura</Text>

            <Text variant="bodyLarge">
              Sin esto, el software simplemente no funcionaria
            </Text>

            <Wrap spacing={20} wrap="wrap" pt={20}>
              <VStack fill minW={300}>
                <Cards
                  uri="docker.webp"
                  title="Docker"
                  content="Docker se encarga de virtualizar, contener, ejecutar 
                    y asilar los dos contenedores (uno para la API y otro para la 
                    base de datos) que conforman el servidor"
                />
              </VStack>

              <VStack fill minW={300}>
                <Cards
                  uri="ngrok.png"
                  title="ngrok"
                  content="¿Tener que mover el servidor? Claro, no hay necesidad de
                  configurar la IP estática y alterar los DNS que apunten a nuestro
                  servidor, ngrok nos ayuda con ello levantando un túnel que lo conecte
                  con el internet"
                />
              </VStack>

              <VStack fill minW={300}>
                <Cards
                  uri="ubuntuserver.png"
                  title="Ubuntu Server"
                  content="Un servidor con Linux, ¿quien lo diría? Todo el software
                  es ejecutado bajo la tutela de Ubuntu Server"
                />
              </VStack>

              <VStack fill minW={300}>
                <Cards
                  uri="raspberrypi.png"
                  title="Raspberry Pi"
                  content="No todo es software, actualmente el servidor está alojado
                  en una Raspberry Pi v4, ideal para realizar proyectos escolares y de IT"
                />
              </VStack>
            </Wrap>
          </>
        </Container>
      </VStack>
    </DetailsView>
  );
}
