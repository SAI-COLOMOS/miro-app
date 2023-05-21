import {
  Flex,
  HStack,
  Spacer,
  VStack,
  Wrap,
} from "@react-native-material/core";
import { Button, Text, useTheme } from "react-native-paper";
import { Image } from "expo-image";
import { ScrollView, useWindowDimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import Container from "./Shared/Container";
import * as Linking from "expo-linking";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Cards from "./Shared/Cards";

export default function StartingPage() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  const scrollY = useSharedValue(0);
  const coverTransform = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: scrollY.value, // <= 0 ? scrollY.value : 0, //interpolate(offSet.value, [-500, 0, 500], [-500, 0, 500])
        },
      ],
    };
  });

  return (
    <ScrollView
      onScroll={(event) => {
        scrollY.value = event.nativeEvent.contentOffset.y * 0.5;
      }}
      scrollEventThrottle={16}
      style={{ height: "100%", backgroundColor: theme.colors.background }}
    >
      <Flex
        center
        w={width}
        h={height}
        style={{
          shadowColor: theme.colors.shadow,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 50,
          overflow: "hidden",
          zIndex: 10,
        }}
      >
        <Animated.View
          style={[{ width: "100%", height: "100%" }, coverTransform]}
        >
          <Image
            source={require("../assets/images/background.jpg")}
            contentFit="cover"
            contentPosition="center"
            style={{ width: "100%", height: "100%" }}
          />
        </Animated.View>

        <Flex
          center
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: theme.colors.backdrop,
            zIndex: 5,
          }}
        >
          <VStack center ph={"10vw"} w={"100%"} h={"100%"} spacing={20}>
            <Image
              source={require("../assets/images/sai.png")}
              contentFit="contain"
              style={{
                height: "50%",
                width: "90%",
                maxWidth: 750,
                maxHeight: 150,
              }}
            />
            <Wrap spacing={10}>
              <Button
                icon="github"
                mode="contained"
                onPress={async () => {
                  await Linking.openURL("https://www.github.com/SAI-COLOMOS");
                }}
              >
                Ver GitHub
              </Button>
            </Wrap>
          </VStack>
        </Flex>
      </Flex>

      <Container uri={"section-actually.jpg"}>
        <VStack spacing={20}>
          <Flex w={"100%"}>
            <Text variant="displayMedium">
              ¿Por qué seguir haciendo las cosas a la antigua?
            </Text>
          </Flex>

          <Flex w={"100%"}>
            <Text variant="bodyLarge">
              En un mundo donde la era digital es dominante... ¿por qué no
              modernizarse? Gracias a la tecnología podemos automatizar procesos
              que pueden llegar a ser repetitivos, además de que también podemos
              delegar tareas para que sean justamente los dispositivos
              electrónicos quienes se encarguen de llevarlas a cabo, siendo, en
              algunos casos, mejor ejecutas que si un humano lo hubiese hecho
            </Text>
          </Flex>
        </VStack>
      </Container>

      <Container uri={"section-platform.jpg"}>
        <VStack spacing={20}>
          <Flex w={"100%"}>
            <Text variant="displayMedium">
              Una plataforma para administrarlo todo
            </Text>
          </Flex>

          <Flex w={"100%"}>
            <Text variant="bodyLarge">
              Nosotros creemos que hay mejores maneras de hacer las cosas, una
              de ellas es llevar a cabo la administración del servicio social,
              es por ello, que decidimos crear una plataforma la cual pueda
              cumplir con esta tarea y, de esta manera, es que desarrollamos
              tanto una API como una aplicación móvil
            </Text>
          </Flex>
        </VStack>
      </Container>

      <Container
        style={{
          backgroundColor: theme.colors.tertiaryContainer,
          shadowColor: theme.colors.shadow,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 50,
          zIndex: 10,
        }}
      >
        <VStack spacing={20}>
          <Flex w={"100%"}>
            <Text variant="displayMedium">
              Aplicación y servidor, un match perfecto
            </Text>
          </Flex>

          <VStack w={"100%"} spacing={20}>
            <Text variant="bodyLarge">
              Nuestra plataforma se compone de dos pilares fundamentales:
              nuestro servidor, el cual funciona como una API REST; y nuestra
              aplicación, que es el medio por el cual los usuarios harán uso de
              la plataforma
            </Text>

            <Wrap spacing={20} wrap="wrap">
              <VStack fill minW={300}>
                <Cards
                  uri="miro-rest.png"
                  title="MIRO-REST"
                  content="Es nuestro servidor, el cual consta de propiamente dicho, un
               servidor, y que además cuenta con una base de datos"
                  action={() =>
                    navigation.navigate("Detalles técnicos del servidor")
                  }
                  text="Ver detalles técnicos"
                  icon="format-list-bulleted-type"
                />
              </VStack>

              <VStack fill minW={300}>
                <Cards
                  uri="app-core.png"
                  title="Servicio social"
                  content="Es la aplicación mediante la cual, los administradores,
                  encargados y prestadores hará uso de la plataforma"
                  action={() =>
                    navigation.navigate("Detalles técnicos de la aplicación")
                  }
                  text="Ver detalles técnicos"
                  icon="format-list-bulleted-type"
                />
              </VStack>
            </Wrap>
          </VStack>
        </VStack>
      </Container>

      <Container uri={"section-security.jpg"}>
        <VStack>
          <Flex w={"100%"}>
            <Text variant="displayMedium">Seguridad ante todo</Text>
          </Flex>

          <VStack w={"100%"} spacing={20}>
            <Text variant="bodyLarge">
              Nos tomamos en serio tu privacidad, ya que al ser una plataforma
              que maneja datos personales, es necesario que sepas qué hacemos
              con toda la información que tú y los demás usuarios nos brindan.
              Es por ello que cumplimos con ciertas características para que
              puedas estar tranquilo de que tu información está en un buen lugar
            </Text>

            <Flex justify="end" items="end">
              <Button
                mode="outlined"
                icon="security"
                onPress={async () =>
                  await Linking.openURL(
                    "https://api.sai-colomos.dev/security-report.pdf"
                  )
                }
              >
                Ver reporte de seguridad
              </Button>
            </Flex>
          </VStack>
        </VStack>
      </Container>

      <Flex
        style={{
          backgroundColor: "#000",
          shadowColor: theme.colors.shadow,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 50,
          overflow: "hidden",
          zIndex: 10,
        }}
      >
        <Wrap
          wrap="wrap"
          spacing={20}
          w={"100%"}
          maxW={1000}
          pt={50}
          pb={100}
          ph={25}
          style={{ alignSelf: "center" }}
        >
          <VStack fill minW={300} spacing={10}>
            <Image
              source={require("../assets/images/saileft.png")}
              contentFit="contain"
              contentPosition="left center"
              style={{
                width: "auto",
                height: 75,
              }}
            />
            <Text variant="bodyLarge">Derechos reservados. 2023 ©</Text>
          </VStack>

          <Flex fill minW={300} items={width > 600 ? "end" : "start"}>
            <Text
              role="link"
              href="https://www.github.com/SAI-COLOMOS"
              variant="bodyMedium"
            >
              GitHub
            </Text>
            <Text
              role="button"
              onPress={() =>
                navigation.navigate("Detalles técnicos del servidor")
              }
              variant="bodyMedium"
            >
              Detalles técnicos del servidor
            </Text>
            <Text
              onPress={() =>
                navigation.navigate("Detalles técnicos de la aplicación")
              }
              variant="bodyMedium"
            >
              Detalles técnicos de la aplicación
            </Text>
            <Text
              role="link"
              href="https://api.sai-colomos.dev/security-report.pdf"
              variant="bodyMedium"
            >
              Reporte de seguridad
            </Text>
          </Flex>
        </Wrap>
      </Flex>
    </ScrollView>
  );
}
