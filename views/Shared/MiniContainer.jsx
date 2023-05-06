import { Flex } from "@react-native-material/core";

export default function MiniContainer({ children, style }) {
  return (
    <Flex style={style}>
      <Flex
        w={"100%"}
        maxW={1000}
        pv={50}
        ph={25}
        style={{ alignSelf: "center" }}
        children={children}
      />
    </Flex>
  );
}
