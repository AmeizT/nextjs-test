import styled, {css} from 'styled-components'
import { Base, Radius, Typography } from '../../@root'

export const Chip = styled.span`
    ${Base}
    place-items: center;
    padding: ${props => props.space || 'var(--sz20)'};
    font-size: var(--fs12);
    font-weight: 700;
    ${Radius}
    ${Typography}
    
    ${(props) => {
        switch(props.variant){
            case "contained":
                return css`
                    border: none;
                    color: var(--dark80);
                    background-color: var(--snow20);
                    @media(prefers-color-scheme: dark){
                        color: var(--snow40);
                        background-color: var(--dark50);
                    }
                `;

            case "containedAlt":
                return css`
                    border: none;
                    color: var(--primary);
                    background-color: var(--dark40);
                    @media(prefers-color-scheme: dark){
                        color: var(--primary);
                        background-color: var(--dark50);
                    }
                `;

            case "outline":
                return css`
                    background-color: none;
                    border: var(--border);
                    @media(prefers-color-scheme: dark){
                        border: var(--border-dark);
                    }
                `
            
            default:
                return css`
                    background-color: ${props => props.bg};
                `
        }
    }}


    ${(props) => {
        switch(props.color){
            case "forest":
                return css`
                    color: var(--forest);
                    background-color: #4caf501c;
                `;

            case "primary":
                return css`
                    color: var(--primary);
                    background-color: #00754a1c;
                `;

            case "secondary":
                return css`
                    color: var(--secondary);
                    background-color: #27ae601c;
                `;

            case "thunder":
                return css`
                    color: var(--error);
                    background-color: #dc35451c;
                `;

            case "dark":
                return css`
                    color: var(--gray-400);
                    background-color: var(--dark-400);
                `;

            case "snow":
                return css`
                    background-color: var(--gray-200);
                    color: var(--gray-500);
                `;

            default:
                return css`
                    color: ${props => props.color};
                    background-color: ${props => props.paint};
                    @media(prefers-color-scheme: dark){
                        background-color: ${props => props.paintd};
                    }
                `
        }
    }}
`;