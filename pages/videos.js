import { Box, Container, Button, SimpleGrid } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Layout from '../components/layouts/main'
import { ContentItem } from '../components/contentitem'

const Videos = () => {
    return (
        <Layout>
            <Container align="center">
                <SimpleGrid columns={[1,1,2]} gap={6} pt={10}>
                
                    <ContentItem thumbnail="thumbnails/wanted9999.png" title="Super Mario 64 DS Wanted World Record" href="https://youtu.be/ytUcapcJAyA" />
                    
                    <ContentItem thumbnail="/thumbnails/SM64_16Star_1854.png" title="16 Star Speedrun in 18:54" href="https://youtu.be/o0jbOoRfhmI" />

                </SimpleGrid>

                <Box p={4}>
                    <NextLink href="/">
                        <Button colorScheme='green' leftIcon={<ChevronLeftIcon />}>
                            Home
                        </Button>
                    </NextLink>
                </Box>
            </Container>
        </Layout>
    )
}

export default Videos