import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'
import '../components/App.css'

const Website = ({Component, pageProps}) => {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default Website