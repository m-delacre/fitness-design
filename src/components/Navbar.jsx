import { SearchIcon } from "@chakra-ui/icons";
import {
    Button,
    Flex,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const textStyle = {
        color: "black",
        fontWeight: "500",
        fontSize: '22px'
    };

    return (
        <Flex
            display="flex"
            w={{ base: '100%', sm: '100%',  md: '100%', lg: '100%', xl:'100%' }}
            height="fit-content"
            p="30px"
            justifyContent="center"
            alignItems="center"
        >
            <HStack spacing={{ base: '10', sm: '20',  md: '20', lg: '20', xl:'20' }} fontSize={{ base: '18px', sm: '22px',  md: '22px', lg: '22px', xl:'22px' }} fontWeight='600'>
                <Link to="/">
                    <Text>Home</Text>
                </Link>
                <Link to="/features">
                    <Text>Features</Text>
                </Link>
                <Link to="/pricing">
                    <Text>Pricing</Text>
                </Link>
                <Link to="/blog">
                    <Text>Blog</Text>
                </Link>
            </HStack>
        </Flex>
    );
}
