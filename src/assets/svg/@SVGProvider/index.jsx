import styled from "styled-components"

export const SVGContainer = styled.span`
    & svg {
        fill: ${props => props.hex || "var(--dark40)"};
        @media(prefers-color-scheme: dark){
            fill: ${props => props.hexd || "var(--snow20)"};
        }
    }
`

export default function SVGProvider({ w, h, hex, hexd, children }){
    return (
        <SVGContainer>
            { children }
        </SVGContainer>
    )
}

SVGProvider.defaultProps = {
    w: 24,
    h: 24,
    hex: "var(--dark40)",
    hexd: "var(--snow20)",
}