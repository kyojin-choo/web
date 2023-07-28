import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8} justifySelf="flex-start">
          <Text>
            <Code fontSize="xl">Hello World!</Code> Welcome to Daniel's Website
          </Text>
          <Text>
            Should be stacked on top of each other.
          </Text>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
