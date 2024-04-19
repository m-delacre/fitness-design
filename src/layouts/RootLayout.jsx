import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Flex } from '@chakra-ui/react'
import Footer from '../components/Footer'

export default function RootLayout() {
  return (
    <Flex flexDirection='column' w="100%" h="fit-content" minH='90vh' bg="white">
        <Navbar />
        <Outlet />
        <Footer />
    </Flex>
  )
}
