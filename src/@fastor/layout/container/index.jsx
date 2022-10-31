import styled, { css } from 'styled-components'
import { Base, Border, Radius, Space } from '../../@root'

export const Container = styled.div `
    ${Base}
    ${Space}
    ${Border}
    ${Radius}
    padding: ${(props) => props.space || "0 var(--sz50)"};
    @media only screen and (min-width: 992px) {
        padding: ${(props) => props.space7x || "0 var(--sz90)"};
    }
`
















