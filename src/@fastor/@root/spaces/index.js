import styled, { css } from 'styled-components'

export const Space = css`
    padding: ${props => props.space};
    padding-top: ${props => props.pt};
    padding-bottom: ${props => props.pb};
    padding-left: ${props => props.ps};
    padding-right: ${props => props.pe};

    @media only screen and (max-width: 575.98px){
        padding: ${props => props.space3x};
    }

    @media only screen and (min-width: 576px){
        padding: ${props => props.space4x};
    }

    @media only screen and (min-width: 768px) and (max-width: 991.98px){
        padding: ${props => props.space5x};
    }

    @media only screen and (min-width: 992px) and (max-width: 1199.98px){
        padding: ${props => props.space6x};
    }

    @media only screen and (min-width: 1200px){
        padding: ${props => props.space7x};
    }

    @media only screen and (min-width: 1400px){
        padding: ${props => props.space8x};
    }

    margin: ${props => props.gutter};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ms};
    margin-right: ${props => props.me};

    @media only screen and (max-width: 575.98px){
        margin: ${props => props.gutter3x};
    }

    @media only screen and (min-width: 576px){
        margin: ${props => props.gutter4x};
    }

    @media only screen and (min-width: 768px) and (max-width: 991.98px){
        margin: ${props => props.gutter5x};
    }

    @media (min-width: 992px) and (max-width: 1199.98px){
        margin: ${props => props.gutter6x};
    }

    @media only screen and (min-width: 1200px){
        margin: ${props => props.gutter7x};
    }

    @media only screen and (min-width: 1400px){
        margin: ${props => props.gutter8x};
    }   
`

