import { Container, Box, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '../components/layouts/main'

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