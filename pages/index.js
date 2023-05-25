import { Container, Box, useColorModeValue, chakra, shouldForwardProp } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '../components/layouts/main'
import { motion, isValidMotionProp, easeInOut } from 'framer-motion'
import Image from 'next/image'
import Logo from '../components/logo'

const Page = () => {
    return (
        <Layout>
            <Logo />
        </Layout>
    )
}

export default Page