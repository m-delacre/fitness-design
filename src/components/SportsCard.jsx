import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, HStack, Text, Button, Heading, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import handballImg from "../assets/sport_handball.png";
import basketballImg from "../assets/sport_basket.png";
import footballImg from "../assets/sport_foot.png";
import fitnessImg from "../assets/sport_musculation.png";
import runningImg from "../assets/sport_running.png";

export default function SportsCard({ width, height }) {
    const sportArray = [
            {
                "id": 0,
                "name": "Handball",
                "description": " is a team sport in which two teams of seven players each pass a ball using their hands with the aim of throwing it into the goal of the opposing team.",
                "img": handballImg
            },
            {
                "id": 1,
                "name": "Basketball",
                "description": "A team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball through the defender's hoop.",
                "img": basketballImg
            },
            {
                "id": 2,
                "name": "Football",
                "description": "Football, is a team sport played between two teams of 11 players each, who primarily use their feet to propel a ball around a rectangular field called a pitch.",
                "img": footballImg
            },
            {
                "id": 3,
                "name": "Fitness",
                "description": "Fitness is the practice of progressive resistance exercise to build, control, and develop one's muscles via hypertrophy.",
                "img": fitnessImg
            },
            {
                "id": 4,
                "name": "Running",
                "description": "Running is a method of terrestrial locomotion by which humans and other animals move rapidly on foot.",
                "img": runningImg
            }
        ];
    const [index, setIndex] = useState(0);
    const [sport, setSport] = useState(sportArray[index]);
    const lastIndex = sportArray.length;

    function upIndex() {
        if (index + 1 === lastIndex) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function downIndex() {
        if (index - 1 < 0) {
            setIndex(lastIndex - 1);
        } else {
            setIndex(index - 1);
        }
    }

    useEffect(() => {
        setSport(sportArray[index]);
    }, [index]);

    return (
        <Flex
            w={{ base: '90%', sm: '70%', md: '70%', lg: '70%', xl: '100%' }}
            h={{ base: 'fit-content', sm: '400px', md: '400px', lg: '400px', xl: '100%' }}
            p="40px"
            bg="black"
            borderRadius="20px"
            flexDirection="column"
            justifyContent="flex-start"
            align="flex-start"
            position="relative"
        >
            <HStack mb="30px" spacing={3}>
                <Flex
                    w="fit-content"
                    h="fit-content"
                    bg="white"
                    p="8px"
                    borderRadius="50px"
                    cursor="pointer"
                    onClick={downIndex}
                >
                    <ArrowBackIcon fontSize="16px" color="black" />
                </Flex>
                <Text color="white" fontWeight="600" fontSize="24px">
                    {index + 1}/{lastIndex}
                </Text>
                <Flex
                    w="fit-content"
                    h="fit-content"
                    bg="white"
                    p="8px"
                    borderRadius="50px"
                    cursor="pointer"
                    onClick={upIndex}
                >
                    <ArrowForwardIcon fontSize="16px" color="black" />
                </Flex>
            </HStack>
            <Heading color="white" fontSize="30px" mb="10px">
                {sport.name}
            </Heading>
            <Text
                w="50%"
                h="31%"
                className="textEllips"
                color="gray.500"
                mb="20px"
            >
                {sport.description}
            </Text>
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
            <Image
                src={sport.img}
                pos="absolute"
                top="0"
                left="50%"
                w='50%'
                h="100%"
                overflow="visible"
            />
        </Flex>
    );
}
