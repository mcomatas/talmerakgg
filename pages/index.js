import { Container, Box, useColorModeValue, chakra, shouldForwardProp } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '../components/layouts/main'
import { motion, isValidMotionProp, easeInOut } from 'framer-motion'
import Image from 'next/image'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('purple.200')} p={2} mb={6} mt={6} align="center">
                    hello
                </Box>
            </Container>
        </Layout>
    )
}

export default Page