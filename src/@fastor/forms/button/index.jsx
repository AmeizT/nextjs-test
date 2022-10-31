import styled, {css} from 'styled-components'
import { Base, Border, Radius, Space, Typography } from '../../@root'

export const Button = styled.button.attrs({
    role: 'button',
    tabIndex: 0,
})`
    ${Base}
    width: ${props => props.w || "fit-content"};
    place-items: center;
    position: relative;
    padding: ${props => props.space || '12px 24px'};
    @media only screen and (min-width: 1020px){
        padding: ${props => props.space7x || '7px 16px'};
    }
    ${Border}
    ${Radius}
    ${Space}
    ${Typography}
    color: ${props => props.hue || "var(--dark40)"};
    @media(prefers-color-scheme: dark){
        color: ${props => props.hued || "var(--snow20)"};
    }
    transition: 100ms background ease-in-out;


    &[data-cart-count]::before {
        content: attr(data-cart-count);
        width: 1.4rem;
        height: 1.4rem;
        display: grid;
        place-items: center;
        position: absolute;
        top: -0.2rem;
        right: -0.2rem;
        border-radius: 50px;
        color: var(--snow10);
        background: var(--firebrick);
    }

    & svg {
        width: ${props => props.svgSizeX};
        height: ${props => props.svgSizeY};
        fill: ${props => props.iHex};
        @media(prefers-color-scheme: dark){
            fill: ${props => props.iHexd};
        }
    }

    ${(props) => {
        switch(props.mouseover){
            case "dark":
                return css`
                    &:hover {
                        background: var(--dark40);
                        color: var(--snow20);
                    }
                `
        }
    }}

    &:hover {
        background: ${props => props.hoverPaint};
        color: ${props => props.hoverColor};
    }

    &:hover svg {
        fill: ${props => props.hoverIcon};
        transition: 100ms fill ease-in-out;
    }

    &:disabled {
        color: var(--gray20);
        background: var(--snow40);
        @media(prefers-color-scheme: dark){
            color: var(--gray20);
            background: var(--dark50);
        }
    }

    &[data-avatar].grow {
        padding: var(--sz20);
        border: 2px solid var(--sky);
        transition: border 100ms ease-in;
    }

    &[data-avatar].shrink {
        border: none;
        transition: border 100ms ease-in;
    }

    &[data-tab].active {
        border-radius: 0;
        font-weight: 700;
        color: var(--sky);
        border-bottom: 2px solid var(--sky);
        transition: border 100ms ease-in;
        @media(prefers-color-scheme: dark){
            color: var(--sky);
        }
    }

    &[data-tab].inactive {
        border-radius: 0;
        border-bottom: 3px solid transparent;
        transition: border 100ms ease-out;
    }

    &[data-accent].active {
        color: var(--snow10);
        background: #ffffff5c;
        transition: background 100ms ease-in;
        @media(prefers-color-scheme: dark){
            color: var(--sky);
        }
    }

    &[data-accent].inactive {
        color: var(--snow10);
        background: #0000005c;
        transition: background 100ms ease-in;
        @media(prefers-color-scheme: dark){
            color: var(--snow20);
            background: var(--dark60);
        }
    }

    &.active {
        scale: 1.1;
        transition: scale 100ms ease-in-out;
        & svg {
            scale: 1.1;
            fill: var(--primary);
            transition: scale 100ms ease-in-out;
        }
    }
`