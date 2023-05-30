import NextLink from 'next/link'
import { Box, Link, Text, shouldForwardProp, chakra } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import { motion, isValidMotionProp } from 'framer-motion'

const HoverBox = chakra( motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const LinkItem = ({ children, href }) => {
    return (
        //clickable link area is a bit messed up and
        //I can't seem to figure out why
        <HoverBox
            whileHover={{
                scale: 1.2,
                y: -15
            }}>    
                <Link
                    as={NextLink}
                    href={href}
                    scroll={false}
                    cursor="pointer"
                >
                    <Text variant='link-item'>
                        {children}
                    </Text>
                </Link>
        </HoverBox>
    )
}

export default LinkItem