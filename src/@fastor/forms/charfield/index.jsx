import styled from 'styled-components'
import { Radius, Space, Typography } from '../../@root'

export const CharField = styled.input.attrs(props => ({
    type: props.type,
    placeholder: props.faker,
}))`
    ${Radius}
    ${Space}
    ${Typography}    
`