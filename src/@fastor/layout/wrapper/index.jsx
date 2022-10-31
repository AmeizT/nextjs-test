import styled, {css} from 'styled-components'
import { Base, Radius } from '../../@root'

export const Wrapper = styled.div`
    ${Base}
    ${Radius}
    height: ${props => props.h || "100%"};
    position: absolute;
    top: 0;
    left: 0;
    z-index: var(--zx10);
    ${(props) => {
        switch(props.variant){
            case 'darker':
                return css`
                    background: #00000080;
                `

            case 'dark':
                return css`
                    background: #0000004f;
                `

            case 'snow':
                return css`
                    background: #ffffff75;
                `

            default:
                return css`
                    background: #0000004f;
                `
        }
    }}
`