import { 
    Container,
    Box,
    SimpleGrid
} from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '../components/layouts/main'
import { motion, isValidMotionProp, easeInOut } from 'framer-motion'
import Image from 'next/image'
import Logo from '../components/logo'
import LinkItem from '../components/linkitem'

const Page = () => {
    return (
        <Layout>
            <Logo />
            <Container align="center">
                <SimpleGrid columns={[1,1,2]} gap={9} textAlign="center">
                    <LinkItem href="/videos">
                        VIDEOS
                    </LinkItem>
                    <LinkItem href="/stream">
                        STREAM
                    </LinkItem>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Page