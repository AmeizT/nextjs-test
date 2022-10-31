import { keyframes } from "styled-components"

export const slideIn = keyframes`
    from {
        transform: translateX(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 200ms ease-out;
    }

    to {
        transform: translateX(0%);
        opacity: 1;
        visibility: visible;
    }
`

export const slideOut = keyframes`
    from {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
        transition: all 200ms ease-out;
    }

    to {
        transform: translateX(100%);
        opacity: 0;
        visibility: hidden;
    }
`