import { extendTheme, keyframes } from '@chakra-ui/react'
import { motion } from 'framer-motion'

let currentTime = new Date();
let hour = currentTime.getHours();

let setBG = function() {
    if( hour >= 5 && hour < 8 ) return 'url(/dawn.png)'
    else if( hour >= 8 && hour < 11 ) return 'url(/early-morning.png)'
    else if( hour >= 11 && hour < 14 ) return 'url(/morning.png)'
    else if( hour >= 14 && hour < 17 ) return 'url(/afternoon.png)'
    else if( hour >= 17 && hour < 20 ) return 'url(/evening.png)'
    else if( hour >= 20 && hour < 23 ) return 'url(/dusk.png)'
    else if( hour >= 23 || hour < 2 ) return 'url(/midnight.png)'
    else if( hour >= 2 && hour < 5 ) return 'url(/night.png)'
}

//By using high percent number and high seconds it's a cheating way to look like
//it reset. I couldn't figure out how to make it not reset with width auto
//on backgroundSize
const animationKeyframes = keyframes`
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 10000000% 0;
    }
`

const animation = `${animationKeyframes} 1500000s linear infinite`;

const styles = {
    global: props => ({
        body: {
            backgroundImage: setBG(),
            animation: animation,
            backgroundSize: "auto 100vh",
        }
    })
}

const theme = extendTheme({
    styles
})

export default theme