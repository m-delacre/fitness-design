import {
    Avatar,
    AvatarGroup,
    Button,
    Flex,
    HStack,
    Heading,
    Image,
    Text,
} from "@chakra-ui/react";
import React from "react";
import avatar1 from "../assets/avatar_bruce.jpg";
import avatar2 from "../assets/avatar_ww.jpg";
import avatar3 from "../assets/avatar_oppenheimer.jpg";
import { ViewIcon } from "@chakra-ui/icons";

export default function AboutCard() {
    return (
        <Flex
            w={{ base: '90%', sm: '70%', md: '70%', lg: '70%', xl: '100%' }}
            h={{ base: '350px', sm: '350px', md: '320px', lg: '350px', xl: '100%' }}
            bg="#A993FF"
            p="20px"
            borderRadius="20px"
            flexDirection="column"
            gap="15px"
        >
            <Flex
                bg="#BEADFF"
                w="fit-content"
                h="fit-content"
                p="10px 20px"
                borderRadius="50px"
            >
                <Text fontWeight="600">About Trake</Text>
            </Flex>
            <Heading fontSize={{ base: '20px', sm: '20px', md: '28px', lg: '38px', xl: '38px' }}>TRAKE'S FITNESS FUSION</Heading>
            <HStack
                w="fit-content"
                h="fit-content"
            >
                <AvatarGroup size="md" max={3}>
                    <Avatar src={avatar1} border="none" />
                    <Avatar src={avatar2} border="none" />
                    <Avatar src={avatar3} border="none" />
                </AvatarGroup>
                <Text fontSize={{ base: '20px', sm: '20px', md: '25px', lg: '30px', xl: '30px' }} fontWeight="700" color="white">
                    +8
                </Text>
                <Text fontSize={{ base: '20px', sm: '20px', md: '25px', lg: '30px', xl: '30px' }} fontWeight="500" color="black">
                    Trake Fitness
                </Text>
            </HStack>
            <Text w={{ base: '100%', sm: '80%', md: '80%', lg: '80%', xl: '80%' }} h="fit-content" fontSize={{ base: '16px', sm: '16px', md: '16px', lg: '16px', xl: '16px' }} fontWeight='500'>
                Discover a world of possibilities and achieve your fitness goals
                like never before.
            </Text>
            <Button
                w="fit-content"
                h="fit-content"
                bg="#FFA15D"
                alignSelf="flex-end"
                p="15px 20px"
                borderRadius="50px"
                _hover={{
                    bg: "#FFB18B",
                }}
            >
                <HStack>
                    <Flex
                        w="fit-content"
                        h="fit-content"
                        bg="black"
                        p="5px"
                        borderRadius="50px"
                    >
                        <ViewIcon fontSize="18px" color="white" />
                    </Flex>
                    <Text>Watch Now</Text>
                </HStack>
            </Button>
        </Flex>
    );
}
