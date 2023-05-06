import { Flex, HStack, Spacer, VStack } from "@react-native-material/core";
import { Image } from "expo-image";
import { Button, Card, Text, useTheme } from "react-native-paper";

export default function Cards({
  children,
  title,
  content,
  action,
  text,
  uri,
  icon,
}) {
  const theme = useTheme();
  return (
    // <Card mode="outlined">
    //   <Card.Content>
    // <>
    <VStack
      spacing={10}
      fill
      style={{
        borderColor: theme.colors.outline,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 10,
        // backgroundColor: theme.colors.surfaceDisabled,
      }}
      p={20}
    >
      {uri && (
        <Image
          contentFit="contain"
          contentPosition="left center"
          source={require("../../assets/images/" + uri)}
          style={{ width: 150, height: 150 }}
        />
      )}
      {title && <Text variant="titleLarge">{title}</Text>}
      {content && <Text variant="bodyLarge">{content}</Text>}
      {action && (
        <>
          <Spacer pb={25} />

          <HStack justify="end">
            <Button
              mode="outlined"
              icon={icon ?? null}
              onPress={() => action()}
            >
              {text}
            </Button>
          </HStack>
        </>
      )}
    </VStack>
    // </>
    //   </Card.Content>
    // </Card>
  );
}
