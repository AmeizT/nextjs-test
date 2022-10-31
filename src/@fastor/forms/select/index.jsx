import styled from 'styled-components'
import { Base, Radius, Space, Typography } from '../../@root'

export const Select = styled.select.attrs(props => ({
    placeholder: props.faker,
}))`
    ${Base}
    ${Radius}
    ${Space}
    ${Typography}
`

export const Option = styled.option `
    ${Typography}
`