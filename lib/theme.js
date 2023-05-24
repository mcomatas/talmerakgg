import { extendTheme } from '@chakra-ui/react'

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

const styles = {
    global: props => ({
        body: {
            backgroundImage: setBG()
        }
    })
}

const theme = extendTheme({
    styles
})

export default theme