import { 
    Box,
    Image,
    Text,
    LinkBox,
    LinkOverlay,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'

const HoverBox = styled.span`
    > img {
        transition: 300ms ease;
    }

    > p {
        transition: 300ms ease;
    }

    &:hover img {
        box-shadow: 10px 5px 5px black;
        transform: translate( 0, -0.5em );
    }

    &:hover p {
        transform: translate( 0, -0.5em );
    }
`
export const ContentItem = ({children, href, title, thumbnail}) => (
    <Box textAlign="center">
        <LinkBox cursor="pointer" href={href} target="_blank">
            <HoverBox>
                <Image 
                    src={thumbnail} 
                    alt={title} 
                    className="grid-item-thumbnail" 
                    placeholder="blur" 
                    loading="lazy"
                    borderRadius={12}
                />
                <LinkOverlay href={href} target="_blank"></LinkOverlay>
                <Text mt={2} fontWeight="bold">{title}</Text>
                <Text fontSize={14}>{children}</Text>
            </HoverBox> 
        </LinkBox>
    </Box>
)