import styled, { css } from 'styled-components'
import { Base, Border, Radius, Space } from '../../@root'

export const Drawer = styled.dialog`
    ${Base}
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    color: var(--dark70);
    border: none;
    @media(prefers-color-scheme: dark){
        color: var(--snow20);
    }
    ${Space}
    ${Border}
    ${Radius}
    z-index: ${props => props.zx};

    &.active {
        opacity: 1;
        visibility: visible;
        transform: translate(0, 0);
        transition: transform 500ms var(--easeInOut077);
    }

    &.inactive {
        opacity: 0;
        transform: translate(100%, 0);
        transition: transform 500ms, opacity 300ms, ease-out;
    }

    &[open] {
        transform: translate(0, 0);
        visibility: visible;
        opacity: 1;
    }
`