import styled from 'styled-components'
import { IconContext } from 'react-icons'

export function Icon({ children, size, hue }){
    return (
        <IconContext.Provider value={{ size: size, color: hue }}>
            {children}
        </IconContext.Provider>
    )
}
