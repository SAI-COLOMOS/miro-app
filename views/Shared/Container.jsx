import { Flex } from "@react-native-material/core";
import { ImageBackground, useWindowDimensions } from "react-native";
import { useTheme } from "react-native-paper";

export default function Container({ children, style, uri }) {
  const { width, height } = useWindowDimensions();
  const theme = useTheme();
  return (
    <Flex style={style}>
      {uri && (
        <Flex w={"100%"} h={"100%"} center style={{ position: "absolute" }}>
          <ImageBackground
            source={require("../../assets/images/" + uri)}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              zIndex: -10,
            }}
          />
          <Flex
            w={"100%"}
            h={"100%"}
            style={{
              backgroundColor: theme.colors.cover,
              position: "absolute",
            }}
          />
        </Flex>
      )}
      <Flex
        w={"100%"}
        maxW={1000}
        pv={100}
        ph={25}
        style={{ alignSelf: "center" }}
        children={children}
      />
    </Flex>
  );
}
