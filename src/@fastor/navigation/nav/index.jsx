import styled from 'styled-components'
import { Base, Border, Space } from '../../@root'

export const Nav = styled.nav `
    ${Base}
    ${Border}
    ${Space}

    &.inactive {
        opacity: 0;
        visibility: hidden;
        transition: height 200ms cubic-bezier(0.4,0,0.2,1), opacity 200ms cubic-bezier(0.4,0,0.2,1);
    }

    &.active {
        opacity: 1;
        transition: height 200ms cubic-bezier(0.4,0,0.2,1), opacity 200ms cubic-bezier(0.4,0,0.2,1) .2s;
    }
`