import { StarIcon } from "@chakra-ui/icons";
import { Flex, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import runnerImg from "../assets/sport_courreur.png";
import yogeeImg from "../assets/sport_yoga2.png";

export default function StoriesCard({ height }) {
    return (
        <Flex
            w={{ base: '90%', sm: '90%', md: '70%', lg: '70%', xl: '50%' }}
            h={{ base: '550px', sm: '550px', md: '550px', lg: '550px', xl: '100%' }}
            flexDir="column"
            bg="#EFF0EA"
            borderRadius="20px"
            p="30px"
            gap="30px"
            pos="relative"
        >
            <Flex
                w="fit-content"
                h="fit-content"
                bg="#F27325"
                p="10px"
                borderRadius="50px"
            >
                <StarIcon color="white" fontSize="16px" />
            </Flex>
            <Heading>MEMBER STORIES</Heading>
            <Text zIndex='3'>
                I have always been a yoga enjoyer from a youg age,
                all the way though college. After college I wanted to continue
                to complete.
            </Text>
            <VStack align="flex-start" gap="0">
                <Heading fontSize="24px" fontWeight="600">
                    Sophie Steward
                </Heading>
                <Text>Freelancer</Text>
                <HStack>
                    <StarIcon color="#F27325" fontSize="16px" />
                    <StarIcon color="#F27325" fontSize="16px" />
                    <StarIcon color="#F27325" fontSize="16px" />
                    <StarIcon color="#F27325" fontSize="16px" />
                    <StarIcon color="gray" fontSize="16px" />
                </HStack>
            </VStack>
            <Image src={yogeeImg} pos='absolute' bottom='0' right='40px' w={{ base: '200px', sm: '300px', md: '300px', lg: '300px', xl: '300px' }} h={{ base: '200px', sm: '300px', md: '300px', lg: '300px', xl: '300px' }} />
        </Flex>
    );
}
