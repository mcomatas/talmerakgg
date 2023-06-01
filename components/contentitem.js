import { 
    Box,
    Image,
    Text,
    LinkBox,
    LinkOverlay
} from '@chakra-ui/react'
import NextLink from 'next/link'

const ContentItem = ({ children, title, thumbnail, href }) => {
    <Box w="100%" rounded="lg" textAlign="center">
        <LinkBox
            as={NextLink}
            href={href}
            target="_blank"
            scroll={false}
            cursor="pointer"
        >
            <Image 
                src={thumbnail}
                alt={title}
                placeholder="blur"
                borderRadius={12}
            />
                <LinkOverlay as="div" href={href} target="_blank">
                    <Text>{children}</Text>
                </LinkOverlay>
        </LinkBox>
    </Box>
}

export default ContentItem