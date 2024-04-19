import { ArrowForwardIcon, ArrowRightIcon, ViewIcon } from "@chakra-ui/icons";
import {
    Button,
    Flex,
    Heading,
    Text,
    Box,
    HStack,
    Image,
} from "@chakra-ui/react";
import React from "react";
import runnerImg from "../assets/sport_double_runner.png";
import yogaImg from "../assets/sport_yoga.png";
import etirementImg from "../assets/sport_etirement.png";
import ExploreCard from "../components/ExploreCard";
import sports from "../Data.json";
import SportsCard from "../components/SportsCard";
import AboutCard from "../components/AboutCard";
import PriceCard from "../components/PriceCard";
import StoriesCard from "../components/StoriesCard";

export default function Home() {
    const sportsArray = sports.sports;
    return (
        <Flex
            w="100%"
            h="fit-content"
            alignItems="center"
            flexDirection="column"
            mt="20px"
            mb="80px"
            gap="50px"
        >
            <Flex w={{ base: '100%', sm: '100%', md: '100%', lg: '100%', xl: '1400px' }} justifyContent="center" alignItems='center' flexDirection={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' }} gap="50px">
                <Flex
                    p={{ base: "10px 30px", sm: "20px 50px", md: "20px 50px", lg: "20px 50px", xl: "40px 70px" }}
                    w={{ base: '100%', sm: '100%', md: '100%', lg: '43%', xl: '43%' }}
                    h={{ base: "fit-content", sm: "fit-content", md: "fit-content", lg: "fit-content", xl: "600px" }}
                    flexDirection="column"
                    gap="30px"
                >
                    <Heading fontSize={{ base: "45px", sm: "65px", md: "65px", lg: "40px", xl: "65px" }}>
                        GUIDING YOUR PATH TO WELLNESS
                    </Heading>
                    <Text fontSize="20px">
                        At feel good fitness we believe that a healthy body and
                        mind are essential for a fulfiling life.
                    </Text>
                    <Flex justifyContent="space-between">
                        <Button
                            bg="#FF8200"
                            borderRadius="50px"
                            w="fit-content"
                            h="fit-content"
                            p="15px 35px"
                            color="black"
                            _hover={{
                                bg: "#FF7200",
                                color: "white",
                            }}
                        >
                            Join Now
                        </Button>
                        <Flex
                            w="200px"
                            h="200px"
                            borderRadius="50%"
                            bg="#DEFF05"
                            position="relative"
                        >
                            <Box
                                position="absolute"
                                top="80px"
                                right={{ base: "80%", sm: "80%", md: "80%", lg: "80%", xl: "80%" }}
                                bg="white"
                                w="180px"
                                h="auto"
                                borderRadius="20px"
                                boxShadow="2xl"
                            >
                                <HStack
                                    w="100%"
                                    h="100%"
                                    alignItems="center"
                                    p="10px 10px"
                                    spacing={4}
                                >
                                    <Flex
                                        w="fit-content"
                                        h="fit-content"
                                        bg="black"
                                        p="10px"
                                        borderRadius="50px"
                                    >
                                        <ViewIcon
                                            fontSize="18px"
                                            color="white"
                                        />
                                    </Flex>
                                    <Text fontWeight="600" fontSize="14px">
                                        Find Your Nearest Gym
                                    </Text>
                                </HStack>
                            </Box>
                            <Image src={yogaImg} w="250px" h="200px" />
                        </Flex>
                    </Flex>
                </Flex>
                <Flex
                    w={{ base: '100%', sm: '100%', md: '100%', lg: '43%', xl: '43%' }}
                    h="600px"
                    flexDirection="column"
                    gap="30px"
                    alignItems="center"
                    justifyContent="center"
                    pos="relative"
                >
                    <Box
                        w="75%"
                        h="70%"
                        bg="purple.200"
                        borderRadius="20px"
                        p={{ base: '0px 0px', sm: '40px 70px', md: '40px 70px', lg: '40px 70px', xl: '40px 70px' }}
                        marginLeft={{ base: '20px', sm: '0px', md: '0px', lg: '0px', xl: '0px' }}
                    ></Box>
                    <Image
                        src={runnerImg}
                        w={{ base: '400px', sm: '400px', md: '400px', lg: '400px', xl: '500px' }}
                        h={{ base: '450px', sm: '450px', md: '450px', lg: '450px', xl: '550px' }}
                        pos="absolute"
                        top={{ base: '50px', sm: '50px', md: '50px', lg: '50px', xl: '20px' }}
                        right={{ base: '50px', sm: '50px', md: '25%', lg: '60px', xl: '60px' }}
                    />
                </Flex>
            </Flex>
            <Flex justifyContent="center">
                <Text as="h3" fontSize="3xl" fontWeight={700}>
                    Fitness at Your Comfort
                </Text>
            </Flex>
            {/* part2 */}
            <Flex w={{ base: '100%', sm: '100%', md: '100%', lg: '100%', xl: '1150px' }} h='fit-content' gap='50px' flexDirection={{ base: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row' }} alignItems={{ base: 'center', sm: 'center', md: 'center', lg: 'center', xl: 'row' }}>
                <AboutCard />
                <SportsCard width={{ base: '100%', sm: '100%', md: '100%', lg: '100%', xl: '40%' }}/>
            </Flex>
            {/* part3 */}
            <Flex w={{ base: '100%', sm: '100%', md: '100%', lg: '100%', xl: '1150px' }} h='fit-content' gap='50px' flexDirection={{ base: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row' }} alignItems={{ base: 'center', sm: 'center', md: 'center', lg: 'center', xl: 'row' }}>
                <ExploreCard src={etirementImg} />
            </Flex>
            <Flex justifyContent="center" mt='60px'>
                <Text as="h3" fontSize={{ base: '2xl', sm: '3xl', md: '3xl', lg: '3xl', xl: '3xl' }} fontWeight={700}>
                    Wellness Within Your Budget
                </Text>
            </Flex>
            <Flex w={{ base: '100%', sm: '100%', md: '100%', lg: '100%', xl: '1150px' }} alignItems="center" height={{ base: 'fit-content', sm: 'fit-content', md: 'fit-content', lg: 'fit-content', xl: '550px' }} gap='50px' justify={{ base: 'space-around', sm: 'space-around', md: 'space-around', lg: 'space-around', xl: 'space-between' }} flexDir={{ base: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row' }}>
                <PriceCard w={{ base: '100%', sm: '100%', md: '100%', lg: '100%', xl: '50%' }} height='100%' />
                <StoriesCard height='100%' />
            </Flex>
        </Flex>
    );
}
