import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";
import ContainLayout from "./layout/container";
import copyToClipboard from "./util";

export default function Home() {
  const CA = "Coming soon";
  const toast = useToast();

  return (
    <Box>
      <ContainLayout>
        <Flex py="24px" align="center" justify="space-between">
          <Text fontWeight={800} fontSize={24} color="#9971D4">
            $KIM
          </Text>
          <Flex align="center" gap="12px">
            <Box
              bg="brand.100"
              px="13px"
              py="12px"
              rounded="full"
              as="a"
              href="https://twitter.com/KimthePet"
              target="_blank"
              _hover={{ bg: "#9971D4", color: "white" }}
            >
              <FaXTwitter size={20} />
            </Box>
            <Button px="32px" bg="#9971D4" _hover={{ bg: "brand.100" }}>
              Buy Now
            </Button>
          </Flex>
        </Flex>
      </ContainLayout>
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
            fontSize={[30, 64]}
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
              {CA}
            </Box>
            <Box
              rounded="full"
              borderWidth="6px"
              borderColor="rgb(153, 113, 212, 0.1)"
              bg="white"
              px="16px"
              py="6px"
              cursor="pointer"
              fontSize={24}
              onClick={() =>
                copyToClipboard(
                  `${CA}`,
                  toast({
                    containerStyle: {
                      bg: "#9971D4",
                    },
                    title: `${CA}`,
                    // description: "We've created your account for you.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  })
                )
              }
            >
              copy
            </Box>
          </Flex>
        </VStack>
      </VStack>
      <VStack align="center" my="60px" w="full" gap="40px" px="32px">
        <Heading fontSize={[32, 64]}>Tokenomics</Heading>
        <Flex
          align="center"
          justify="center"
          w="full"
          px="24px"
          py="44px"
          bg="#9971D4"
          color="white"
        >
          <Heading>Coming soon</Heading>
        </Flex>
        {/* <Box maxW="500px" display={{ base: "block", lg: "none" }}>
          <Image src="/tokenomics.png" alt="" />
        </Box>
        <Box maxW="920px" display={{ base: "none", lg: "block" }}>
          <Image src="/tokenomics-desktop.png" alt="" />
        </Box> */}
      </VStack>
      <Box
        w="full"
        bg="#9971D4"
        h="80px"
        borderTopWidth="5px"
        borderBottomWidth="5px"
        borderColor="black"
      >
        <Flex
          w="full"
          h="full"
          align="center"
          justify="center"
          gap="24px"
          overflow={"hidden"}
        >
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
          <Text color="white" fontSize="28">
            $KIM
          </Text>
        </Flex>
      </Box>
      <VStack align="center" gap="36px" my="60px" px="32px">
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
            <Text textAlign="center" color="#9971D4" fontSize={24}>
              Trade $SOL for $KIM on Jupiter
            </Text>
            <Button px="32px" bg="#9971D4" _hover={{ bg: "brand.100" }}>
              TRADE
            </Button>
          </VStack>
        </VStack>
      </VStack>
      <Box w="full" py="34px" bg="#9971D4">
        <ContainLayout>
          <Flex
            flexWrap="wrap"
            gap="64px"
            align="center"
            justify="center"
            w="full"
          >
            <Box>
              <Image src="/kim-footer.png" w="400px" alt="" />
            </Box>
            <VStack align={["center", "flex-end"]} gap="32px">
              <Heading color="white" className="text-color1">
                Join $KIM Community
              </Heading>
              <Flex align="center" gap="12px">
                <Box
                  bg="white"
                  px="13px"
                  py="12px"
                  rounded="12px"
                  as="a"
                  href="https://twitter.com/KimthePet"
                  target="_blank"
                  _hover={{ bg: "#9971D4", color: "white" }}
                >
                  <FaXTwitter size={30} />
                </Box>
                <Box
                  bg="white"
                  px="13px"
                  py="12px"
                  rounded="12px"
                  as="a"
                  href="https://t.me/kimthepet"
                  target="_blank"
                  _hover={{ bg: "#9971D4", color: "white" }}
                >
                  <FaTelegram size={30} />
                </Box>
              </Flex>
              <Button
                px="32px"
                py="24px"
                bg="white"
                _hover={{ bg: "brand.100" }}
              >
                Buy Now
              </Button>
            </VStack>
          </Flex>
        </ContainLayout>
      </Box>
    </Box>
  );
}
