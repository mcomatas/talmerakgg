import { Box, Container, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/main'
import { ContentItem } from '../components/contentitem'
import { ChevronLeftIcon } from '@chakra-ui/icons'

const Stream = () => {
    return (
        <Layout>
            <Container align="center">

                <Box pt={10}>
                    <ContentItem thumbnail="/thumbnails/stream.png" title="Twitch Stream" href="https://twitch.tv/Talmerak" />
                </Box>

                <Box p={4}>
                    <NextLink href="/">
                        <Button colorScheme="green" leftIcon={ <ChevronLeftIcon/> } >
                            Home
                        </Button>
                    </NextLink>
                </Box>
            </Container>
        </Layout>
    )
}

export default Stream