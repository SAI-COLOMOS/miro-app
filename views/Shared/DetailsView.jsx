import { Flex, HStack } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions, SafeAreaView } from "react-native";
import { Pressable } from "react-native";
import { ScrollView } from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";

export default function DetailsView({ title, children }) {
  const theme = useTheme();
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        overflow: "hidden",
        height: height,
        backgroundColor: theme.colors.background,
      }}
    >
      {/* <Flex
        fill
        style={{
          backgroundColor: theme.colors.background,
          overflow: "hidden",
        }}
      > */}
      <Flex
        style={{
          shadowRadius: 50,
          shadowOffset: { width: 0, height: 0 },
          shadowColor: theme.colors.shadow,
          zIndex: 10,
        }}
      >
        <HStack
          justify="between"
          items="baseline"
          w={"100%"}
          maxW={1000}
          pv={25}
          ph={25}
          style={{
            alignSelf: "center",
            // position: "absolute",
          }}
          spacing={20}
        >
          <Flex fill>
            <Text variant="headlineLarge">{title}</Text>
          </Flex>
          <IconButton
            icon="close"
            size={25}
            mode="outlined"
            onPress={() => navigation.goBack()}
          />
        </HStack>
      </Flex>

      <Flex fill>
        <ScrollView>{children}</ScrollView>
      </Flex>
      {/* </Flex> */}
    </SafeAreaView>
  );
}
