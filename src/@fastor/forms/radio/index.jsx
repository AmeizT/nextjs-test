import styled from 'styled-components'
import { Base, Radius, Space } from '../../@root'

export const Radio = styled.input.attrs({
    type: 'radio',
})`
    ${Base}
    ${Radius}
    ${Space}
`