import NextLink from 'next/link'
import {
    Box,
    Container,
    Divider,
    Link,
    SimpleGrid,
    Stack,
    Menu,
    MenuItem,
    MenuList,
    MenuButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoYoutube, IoLogoTwitch, IoLogoTwitter, IoLogoTiktok } from 'react-icons/io5'

const LinkImage = ( { href, path, target, children, ...props } ) => {
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            target={target}
            {...props}
        >
            {children}
        </Link>
    )
}

const Navbar = props => {
    const path = props
    
    return (
        <Box
            as="nav"
            w="100%"
            style={{backdropFilter: 'blur(15px)'}}
            zIndex={2}
            {...props}
        >
            

            
            Navbar
            <Container
                dislpay="flex"
                align="center"
                maxW="container.md"
                p={2}
                justify="space-between"
                wrap="wrap"
            >
                <SimpleGrid columns={4} display={{ base: 'none', md: 'flex' }}>
                    <LinkImage href="https://www.tiktok.com/@talmerak" path={path} target="_blank">
                        <IoLogoTiktok size={56} color='black' />
                    </LinkImage>
                    <LinkImage href="https://www.youtube.com/channel/UCGbXokwBVgCnNWTkOHsEi1g" path={path} target="_blank">
                        <IoLogoYoutube size={56} color='black' />
                    </LinkImage>
                    <LinkImage href="https://www.twitch.tv/talmerak" path={path} target="_blank">
                        <IoLogoTwitch size={56} color='black' />
                    </LinkImage>
                    <LinkImage href="https://twitter.com/talmerak_" path={path} target="_blank">
                        <IoLogoTwitter size={56} color='black' />
                    </LinkImage>
                </SimpleGrid>
            </Container>

            <Divider borderColor='black' />
        </Box>
    )
}

export default Navbar