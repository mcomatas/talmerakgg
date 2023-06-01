import { forwardRef } from 'react'
import NextLink from 'next/link'
import {
    Box,
    Container,
    Divider,
    Link,
    SimpleGrid,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton
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

const MenuLink = forwardRef(( props, ref ) => (
    <Link ref={ref} as={NextLink} {...props} />
))

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
            <Container
                dislpay="flex"
                align="center"
                maxW="container.md"
                p={2}
                justify="space-between"
                wrap="wrap"
            >
                <SimpleGrid columns={4} spacing={150} display={{ base: 'none', md: 'flex' }}>
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

                    <Box flex={1} align="right">
                        <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                            <Menu isLazy id="navbar-menu">
                                <MenuButton
                                    as={IconButton}
                                    icon={<HamburgerIcon />}
                                    variant="outline"
                                    colorScheme='black'
                                    aria-label="Options"
                                />
                                <MenuList>
                                    <MenuItem as={MenuLink} href="https://www.tiktok.com/@talmerak" target="_blank">
                                        TikTok
                                    </MenuItem>
                                    <MenuItem as={MenuLink} href="https://www.youtube.com/channel/UCGbXokwBVgCnNWTkOHsEi1g" target="_blank">
                                        YouTube
                                    </MenuItem>
                                    <MenuItem as={MenuLink} href="https://www.twitch.tv/talmerak" target="_blank">
                                        Twitch
                                    </MenuItem>
                                    <MenuItem as={MenuLink} href="https://twitter.com/talmerak_" target="_blank">
                                        Twitter
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>

            </Container>

            <Divider borderColor='black' />
        </Box>
    )
}

export default Navbar