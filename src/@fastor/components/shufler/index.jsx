import styled, { css } from 'styled-components'
import { Base, Space } from '../../@root'

export const Shufler = styled.div `
    ${Base}
    display: ${props => props.view || 'grid'};
    ${(props) => {
        switch(props.move){
            case "x":
                return css`
                    scroll-snap-type: x mandatory;
                `

            case "y":
                return css`
                    scroll-snap-type: y mandatory;
                `

            default:
                return css`
                    scroll-snap-type: ${props => props.snapType || 'x mandatory'};
                `
        }
    }}
    -ms-overflow-style: none;  
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    ${Space}
`