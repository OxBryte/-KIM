import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Flex align="center" justify="center" py="80px" w="full" px="24px">
        <Box w="1100px">
          <Image src="/kim.png" alt="" />
        </Box>
      </Flex>
      <VStack
        align="center"
        justify="center"
        w="full"
        bg="#9971D4"
        minH="400px"
        py="70px"
        px="32px"
      >
        <VStack gap="24px" align="center">
          <Heading
            className="text-color1"
            fontSize={[32, 64]}
            color="white"
            letterSpacing={2}
          >
            $KIM Contract Addresss
          </Heading>
          <Flex flexWrap="wrap" w="full" justify="center" gap="12px">
            <Box
              rounded="full"
              borderWidth="6px"
              borderColor="rgb(153, 113, 212, 0.1)"
              bg="white"
              px="16px"
              py="6px"
              h="fit-content"
              fontSize={[14, 24]}
            >
              0xE1aBD004250AC8D1F199421d647e01d094FAa180
            </Box>
            <Box
              rounded="full"
              borderWidth="6px"
              borderColor="rgb(153, 113, 212, 0.1)"
              bg="white"
              px="16px"
              py="6px"
              fontSize={24}
            >
              copy
            </Box>
          </Flex>
        </VStack>
      </VStack>
      <VStack align="center" my="60px" w="full" gap="40px" px="32px">
        <Heading fontSize={[32, 64]}>Tokenomics</Heading>
        <Box maxW="500px" display={{ base: "block", lg: "none" }}>
          <Image src="/tokenomics.png" alt="" />
        </Box>
        <Box maxW="920px" display={{ base: "none", lg: "block" }}>
          <Image src="/tokenomics-desktop.png" alt="" />
        </Box>
      </VStack>
      <Box
        w="full"
        bg="#9971D4"
        h="80px"
        borderTopWidth="5px"
        borderBottomWidth="5px"
        borderColor="black"
      >
        <Flex w="full" h="full" align="center" justify="center" gap="24px" overflow={'hidden'}>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
          <Text color='white' fontSize='28'>$KIM</Text>
        </Flex>
      </Box>
      <VStack align="center" gap="36px" my="60px" px='32px'>
        <Heading color="white" className="text-color" fontSize={[32, 64]}>
          How To Buy
        </Heading>
        <VStack gap="none">
          <VStack
            bg="white"
            p="24px"
            maxW="420px"
            roundedBottomLeft={32}
            roundedTopRight={32}
            roundedBottomRight={16}
            roundedTopLeft={16}
            className="bg001"
          >
            <Text color="#9971D4" fontSize={24}>
              Create wallet
            </Text>
            <Text textAlign={"center"}>
              Download Phantom wallet or your wallet of choice from the App
              Store or Google Play store for free
            </Text>
          </VStack>
          <Divider
            borderColor="#9971D4"
            borderWidth="2px"
            mt="8px"
            borderStyle="dashed"
            orientation="vertical"
            h="80px"
          />
          <VStack
            bg="white"
            p="24px"
            maxW="420px"
            roundedBottomLeft={32}
            roundedTopRight={32}
            roundedBottomRight={16}
            roundedTopLeft={16}
            className="bg001"
          >
            <Text color="#9971D4" fontSize={24}>
              Get $SOL
            </Text>
            <Text textAlign={"center"}>
              If you don’t have any SOL, you can buy directly on Phantom wallet,
              transfer from another wallet, or buy on another exchange and send
              it to your wallet
            </Text>
          </VStack>
          <Divider
            borderColor="#9971D4"
            borderWidth="2px"
            mt="8px"
            borderStyle="dashed"
            orientation="vertical"
            h="80px"
          />
          <VStack
            bg="white"
            p="24px"
            maxW="420px"
            roundedBottomLeft={32}
            roundedTopRight={32}
            roundedBottomRight={16}
            roundedTopLeft={16}
            className="bg001"
          >
            <Text textAlign='center' color="#9971D4" fontSize={24}>
              Trade $SOL for $KIM on Jupiter
            </Text>
            <Button px='32px' bg='#9971D4' _hover={{bg: 'brand.100'}}>TRADE</Button>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
}
