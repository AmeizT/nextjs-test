import styled from 'styled-components'
import { Headtext, Lead, Text } from "../../content/text"
import { Segment, Stack, Item } from "../../layout"

export const Load = styled.div`
    & .heart {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
        transform: rotate(45deg);
        transform-origin: 40px 40px;
    }

    & .heart div {
        top: 32px;
        left: 32px;
        position: absolute;
        width: 32px;
        height: 32px;
        background: red;
        animation: pump 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    & .heart div:after,
    & .heart div:before {
        content: " ";
        position: absolute;
        display: block;
        width: 32px;
        height: 32px;
        background: red;
        box-shadow: 5px 4px 5px #0004 inset;
    }

    & .heart div:before {
        left: -24px;
        border-radius: 50% 0 0 50%;
    }

    & .heart div:after {
        top: -24px;
        border-radius: 50% 50% 0 0;
    }

    @keyframes pump {
        0% {
            transform: scale(0.95);
        }
        5% {
            transform: scale(1.1);
        }
        39% {
            transform: scale(0.85);
        }
        45% {
            transform: scale(1);
        }
        60% {
            transform: scale(0.95);
        }
        100% {
            transform: scale(0.9);
        }
    }
`

export function Loader(){
    return (
        <Segment ht="100%" ay="center">
            <Item space="var(--size100) 0" cx="center">
                <Load><div className="heart"><div></div></div></Load>
            </Item>
        </Segment>
    )
}