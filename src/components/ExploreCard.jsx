import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Box, Heading, Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function ExploreCard( {src}) {
    return (
        <Flex
            w={{ base: '90%', sm: '70%', md: '70%', lg: '70%', xl: '1150px' }}
            h={{ base: '400px', sm: '550px', md: '550px', lg: '550px', xl: '100%' }}
            borderRadius="20px"
            justifyContent="flex-start"
            gap="50px"
            bg="#DEFF05"
            position="relative"
        >
            <Flex
                w="fit-content"
                h="fit-content"
                p="40px"
                flexDirection="column"
                gap="20px"
            >
                <Box
                    w="fit-content"
                    h="fit-content"
                    bg="#C7E500"
                    p="10px 20px"
                    borderRadius="50px"
                >
                    <Text fontSize={{ base: '14px', sm: '18px', md: '18px', lg: '18px', xl: '18px' }} fontWeight="600">
                        Take Fitness
                    </Text>
                </Box>
                <Heading as="h2" w="70%" fontSize={{ base: '20px', sm: '35px', md: '35px', lg: '35px', xl: '48px' }}>
                    UNLEASHING YOUR FULL FITNESS POTENTIAL
                </Heading>
                <Button
                    w="fit-content"
                    h="fit-content"
                    bg="#FFA15D"
                    p="10px 20px"
                    borderRadius="50px"
                    _hover={{
                        bg: "#FFB18B",
                    }}
                >
                    <HStack>
                        <Text>Explore</Text>
                        <ArrowForwardIcon />
                    </HStack>
                </Button>
            </Flex>
            <Image
                src={src}
                w={{ base: '500px', sm: '600px', md: '450px', lg: '600px', xl: '600px' }}
                h={{ base: '250px', sm: '300px', md: '300px', lg: '370px', xl: '370px' }}
                pos="absolute"
                bottom="0px"
                right="0px"
            />
        </Flex>
    );
}
