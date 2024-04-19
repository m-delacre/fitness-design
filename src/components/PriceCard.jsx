import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function ({ height }) {
    return (
        <Flex w={{ base: '90%', sm: '90%', md: '70%', lg: '70%', xl: '50%' }} h={height} flexDir="column">
            <Heading w={{ base: '90%', sm: '60%', md: '60%', lg: '60%', xl: '60%' }} fontSize={{ base: '1.5rem', sm: '2rem', md: '2rem', lg: '2rem', xl: '2rem' }} mb="50px">
                BEST SUITABLE PACKAGE FOR YOU
            </Heading>
            <Flex alignItems="center" w="100%" h="auto">
                <Flex direction="column" gap="10px" w="80%" h="100%">
                    <Heading as="h3" fontSize="20px">
                        PREMIUM MEMBERSHIP
                    </Heading>
                    <Text w="80%">
                        The ultimate package for serious fitness enthusiasts.
                    </Text>
                </Flex>
                <Flex w="30%" h="100%" alignItems="center" justify="flex-end">
                    <Flex
                        w="fit-content"
                        h="fit-content"
                        bg="#FFA15D"
                        p="10px 20px"
                        borderRadius="50px"
                    >
                        <Text color="black" fontWeight="700" fontSize={{ base: '0.8rem', sm: '1rem', md: '1rem', lg: '1rem', xl: '1rem' }}>
                            $19.99/Month
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
            <Divider borderColor="black" mt="20px" mb="20px" />
            <Flex alignItems="center" w="100%" h="auto">
                <Flex direction="column" gap="10px" w="80%" h="100%">
                    <Heading as="h3" fontSize="20px">
                        SILVER MEMBERSHIP
                    </Heading>
                    <Text w="80%">
                        Take your fitness journey to the next level.
                    </Text>
                </Flex>
                <Flex w="30%" h="100%" alignItems="center" justify="flex-end">
                    <Text color="black" fontWeight="700">
                        $19.99/Month
                    </Text>
                </Flex>
            </Flex>
            <Divider borderColor="black" mt="20px" mb="20px" />
            <Flex alignItems="center" w="100%" h="auto">
                <Flex direction="column" gap="10px" w="80%" h="100%">
                    <Heading as="h3" fontSize="20px">
                        BASIC MEMBERSHIP
                    </Heading>
                    <Text w="80%">
                        Start your journey with essential features.
                    </Text>
                </Flex>
                <Flex w="30%" h="100%" alignItems="center" justify="flex-end">
                    <Text color="black" fontWeight="700">
                        FREE
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
}
