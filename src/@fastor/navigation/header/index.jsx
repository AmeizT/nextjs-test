import styled, {css} from 'styled-components'
import { Base, Border, Radius, Space } from '../../@root';

export const Header = styled.header.attrs({
    role: "banner",
})`
    ${Base}
    ${(props) => {
        switch(props.hs){
            case 30:
                return css`
                    height: var(--hs30);
                `;

            case 50:
                return css`
                    height: var(--hs50);
                `;

            case 70:
                return css`
                    height: var(--hs70);
                `;

            case 90:
                return css`
                    height: var(--hs90);
                `;
            
            default:
                return css`
                    height: ${props => props.hs};
                `;
        }
    }};
    
    ${(props) => {
        switch(props.variant){
            case "fxd":
                return css`
                    position: fixed;
                    top: 0;
                `

            case "fxdBase":
                return css`
                    position: fixed;
                    bottom: 0;
                `
        }
    }}
    ${Border}
    ${Space}
    ${Radius}
 
    z-index: var(--zx99);

    & svg {
        fill: ${props => props.iHue};
        @media(prefers-color-scheme: dark){
            fill: ${props => props.iHued};
        }
    }

    .brand svg {
        & .primary {
            fill: var(--dark-500);
            @media(prefers-color-scheme: dark){
                fill: var(--gray-300);
            }
        }

        & .secondary {
            fill: var(--dark-500);
            @media(prefers-color-scheme: dark){
                fill: var(--gray-300);
            }
        }
    }

    &.active {
        opacity: 0.99;
        background: var(--dark-500);
    }

    &.active svg {
        fill: var(--gray-300);
    }

    &.active .brand svg {
        & .primary {
            fill: var(--gray-300);
        }

        & .secondary {
            fill: var(--gray-300);
        }
    }
`