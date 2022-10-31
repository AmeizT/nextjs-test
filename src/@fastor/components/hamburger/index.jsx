import styled, { css } from "styled-components"

export const Hamburger = styled.span`
    width: 2.5rem;
    height: 2px;
    display: block;
    top: 0;
    background: transparent;


    &::after,
    &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        background: var(--dark40); 
    }

    &::after {
        top: .325rem;
    }

    &::before {
        top: -.325rem;
    }
`