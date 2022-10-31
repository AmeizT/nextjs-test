import styled, {css} from 'styled-components'
import { Border, Radius, Space, Typography } from '../../@root'

export const NavLink = styled.a `
    display: ${props => props.view};
    ${Typography}
    ${Space}
    ${Radius}
    ${Border}
    transition: ${props => props.change || "all 200ms ease-in-out"};

    & svg {
        fill: ${props => props.fill};
        @media(prefers-color-scheme: dark){
            fill: ${props => props.filld};
        }
    }

    &:hover {
        color: ${props => props.mouseover};
    }
`