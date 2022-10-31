import { css } from 'styled-components'

export const Radius = css `
    ${(props) => {
        switch(props.rad){
            case "round":
                return css`
                    border-radius: 50px;
                `

            case "flat":
                return css`
                    border-radius: 0px;
                `
            
            case "circle":
                return css`
                    clip-path: circle();
                `

            default:
                return css`
                    border-radius: ${props => props.rad};
                `
        }
    }}

    border-top-left-radius: ${props => props.radStart};
    border-top-right-radius: ${props => props.radTopEnd};
    border-bottom-left-radius: ${props => props.radBaseStart};
    border-bottom-right-radius: ${props => props.radBaseEnd};
`