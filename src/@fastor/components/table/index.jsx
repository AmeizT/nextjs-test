import styled, {css} from 'styled-components'
import { Border, Base, Typography } from '../../@root'

export const Table = styled.table`
    width: ${props => props.wt || '100%'};
    display: table;
    border-collapse: collapse;
    ${Border}
    border: none;
`

export const TableBody = styled.tbody``

export const TableFoot = styled.tfoot``


export const TableRow = styled.tr.attrs(props => ({
    colspan: props.cs,
    rowspan: props.rs,
}))`
    width: ${props => props.wt || '100%'};
    &:nth-child(even){
        background-color: ${props => props.bg};
        @media(prefers-color-scheme: dark){
            background-color: ${props => props.bgd};
        }
    }
`

export const TableHead = styled.th.attrs(props => ({
    colspan: props.cs,
    rowspan: props.rs,
}))`
    text-align: left;
    padding: ${props => props.space || '12px 0'};
    ${Typography}
`

export const TableData = styled.td.attrs(props => ({
    colspan: props.cs,
    rowspan: props.rs,
}))`
    text-align: left;
    padding: ${props => props.space || '12px 0'};
    ${Typography}
`