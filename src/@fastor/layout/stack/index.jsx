import styled from 'styled-components'
import { Base, Border, Radius, Space } from '../../@root'

export const Stack = styled.div`
    ${Base}
    ${Space}
    ${Border}
    ${Radius}

    ${(props) => {
        switch(props.variant){
            case "x":
                return css`
                    flex-direction: row;
                `

            case "y":
                return css`
                    flex-direction: column;
                `
        }
    }}
`