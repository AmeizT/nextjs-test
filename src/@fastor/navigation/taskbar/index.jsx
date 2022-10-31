import styled, {css} from 'styled-components'
import { Base, Border, Space} from '../../@root'

export const TaskBar = styled.footer.attrs({
    role: 'contentinfo',
})`
    ${Base}
    ${Space}
    ${Border}

    & .brand svg {
        width: 6rem;

        & .primary {
            fill: var(--dark40);
            @media(prefers-color-scheme: dark){
                fill: var(--snow20);
            }
        }

        & .secondary {
            fill: var(--dark-500);
            @media(prefers-color-scheme: dark){
                fill: var(--snow-200);
            }
        }
    }
`