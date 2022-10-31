import { css } from 'styled-components'

export const Border = css`
    ${(props) => {
        switch(props.borders){
            case "base":
                return css`
                    border-bottom: var(--b10);
                    @media(prefers-color-scheme: dark){
                        border-bottom: var(--bd10);
                    }
                `

            case "basesnow":
                return css`
                    border-bottom: var(--bsnow);
                    @media(prefers-color-scheme: dark){
                        border-bottom: var(--bsnow);
                    }
                `

            case "basedark":
                return css`
                    border-bottom: var(--bdark);
                    @media(prefers-color-scheme: dark){
                        border-bottom: var(--bd10);
                    }
                `

            case "top":
                return css`
                    border-top: var(--b10);
                    @media(prefers-color-scheme: dark){
                        border-top: var(--bd10);
                    }
                `

            case "topsnow":
                return css`
                    border-top: var(--bsnow);
                    @media(prefers-color-scheme: dark){
                        border-top: var(--bsnow);
                    }
                `

            case "topdark":
                return css`
                    border-top: var(--bdark);
                    @media(prefers-color-scheme: dark){
                        border-top: var(--bdark);
                    }
                `

            case "start":
                return css`
                    border-left: var(--b10);
                    @media(prefers-color-scheme: dark){
                        border-left: var(--bd10);
                    }
                `

            case "end":
                return css`
                    border-right: var(--b10);
                    @media(prefers-color-scheme: dark){
                        border-right: var(--bd10);
                    }
                `

            case "contained":
                return css`
                    border: var(--b20);
                    @media(prefers-color-scheme: dark){
                        border: var(--bd20);
                    }
                `

            default:
                return css`
                    border-bottom: ${(props) => props.bb};
                    border-top: ${(props) => props.bt};
                    border-left: ${(props) => props.bs};
                    border-right: ${(props) => props.be};
                    border: ${(props) => props.borders};
                    @media (prefers-color-scheme: dark) {
                        border: ${(props) => props.borders};
                    }
                `;
        }
    }}
`