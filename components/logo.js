import Image from 'next/image'
import styled from '@emotion/styled'
import { motion, isValidMotionProp } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const MotionBox = chakra( motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Logo = () => {
    return (
        <MotionBox
            animate={{
                scale: [1, 1.05, 1]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
            }}
        >
            <Image src="/talmerak.png" alt="logo" width={1000} height={1000} position="relative" />
        </MotionBox>
    )
}

export default Logo