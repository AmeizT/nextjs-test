"use client"

import styled from "styled-components"

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    color: white;
    background: darkcyan;
`

export default function Home(){
    return (
        <Container>
            Homepage
        </Container>
    )
}