import Head from 'next/head'
import { Box, Container, Image } from '@chakra-ui/react'
import Navbar from '../navbar.js'

const Main = ( { children, router } ) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Talmerak</title>
            </Head>

            <Navbar />

            <Container maxW="container.md">
                {children}
            </Container>
        </Box>
    )
}

export default Main