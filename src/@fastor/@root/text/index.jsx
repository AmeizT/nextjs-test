import { css } from 'styled-components'

export const Typography = css`
    line-height: ${props => props.leading};
    letter-spacing: ${props => props.tracking};

    ${(props) => {
        switch(props.ff){
            case "sub":
                return css`
                    font-family: var(--ffSub);
                `
        }
    }}

    ${(props) => {
        switch(props.writemode){
            case "vert":
                return css`
                    writing-mode: vertical-rl;
                `

            default:
                return css`
                    writing-mode: ${props => props.writemode};
                `
        }
    }}

    font-feature-settings: ${props => props.ffs};
    font-style: ${props => props.fst};
    
    ${(props) => {
        switch(props.textpos){
            case "start":
                return css`
                    text-align: left;
                `
            
            case "cen":
                return css`
                    text-align: center;
                `

            case "even":
                return css`
                    text-align: justify;
                `

            case "base":
                return css`
                    vertical-align: baseline;
                `

            case "top":
                return css`
                    vertical-align: text-top; 
                `

            case "bottom":
                return css`
                    vertical-align: text-bottom;
                `

            case "sup":
                return css`
                    vertical-align: super;
                `

            case "sub":
                return css`
                    vertical-align: sub;
                `

            default:
                return css`
                    text-align: ${props => props.textpos};
                    @media only screen and (min-width: 1024px){
                        text-align: ${props => props.textpos7x};
                    }
                    
                `
        }
    }}

    ${(props) => {
        switch(props.mute){
            case true:
                return css`
                    color: var(--gray20);
                    @media(prefers-color-scheme: dark){
                        color: var(--gray20);
                    }
                `
        }
    }}

    ${(props) => {
        switch(props.fw){
            case 10:
                return css`
                    font-weight: 100;
                `

            case 30:
                return css`
                    font-weight: 300;
                `

            case 40:
                return css`
                    font-weight: 400;
                `

            case 50:
                return css`
                    font-weight: 500;
                `

            case 60:
                return css`
                    font-weight: 600;
                `

            case 70:
                return css`
                    font-weight: 700;
                `

            case 80:
                return css`
                    font-weight: 800;
                `

            case 90:
                return css`
                    font-weight: 900;
                `

            case 95:
                return css`
                    font-weight: 950;
                `
        }
    }}
    
    ${(props) => {
        switch(props.fs){
            case 10:
                return css`
                    font-size: var(--fs10);
                `

            case 12:
                return css`
                    font-size: var(--fs12);
                `

            case 14:
                return css`
                    font-size: var(--fs14);
                `

            case 16:
                return css`
                    font-size: var(--fs16);
                `

            case 18:
                return css`
                    font-size: var(--fs18);
                `

            case 20:
                return css`
                    font-size: var(--fs20);
                `

            case 24:
                return css`
                    font-size: var(--fs24);
                `
            
            case 28:
                return css`
                    font-size: var(--fs28);
                `

            case 32:
                return css`
                    font-size: var(--fs32);
                `

            case 48:
                return css`
                    font-size: var(--fs48);
                `

            case 60:
                return css`
                    font-size: var(--fs60);
                `
            
            default: 
                return css`
                    font-size: ${props => props.fs};
                    @media only screen and (max-width: 575.98px){
                        font-size: ${props => props.fs3x};
                    }

                    @media only screen and (min-width: 576px){
                        font-size: ${props => props.fs4x};
                    }

                    @media only screen and (min-width: 768px) and (max-width: 991.98px){
                        font-size: ${props => props.fs5x};
                    }

                    @media (min-width: 992px) and (max-width: 1199.98px){
                        font-size: ${props => props.fs6x};
                    }

                    @media only screen and (min-width: 1200px){
                        font-size: ${props => props.fs7x};
                    }

                    @media only screen and (min-width: 1400px){
                        font-size: ${props => props.fs8x};
                    }
                `
        }
    }}


    ${(props) => {
        switch(props.prefs){
            case "caps":
                return css`
                    text-transform: capitalize;
                `

            case "upper":
                return css`
                    text-transform: uppercase;
                `

            case "lower":
                return css`
                    text-transform: lowercase;
                `
            
            case "strike":
                return css`
                    text-decoration: line-through;
                `

            case "strip":
                return css`
                    text-decoration: underline;
                `

            case "upstrip":
                return css`
                    text-decoration: underline;
                    text-transform: uppercase;
                `

            case "capstrip":
                return css`
                    text-decoration: underline;
                    text-transform: capitalize;
                `

            case "lowstrike":
                return css`
                    text-decoration: line-through;
                    text-transform: lowercase;
                `

            case "upstrike":
                return css`
                    text-decoration: line-through;
                    text-transform: uppercase;
                `
        }
    }}
    
    text-stroke: ${props => props.stroke};
    -webkit-text-stroke: ${props => props.stroke};    
    color: ${props => props.hue};
    background: ${props => props.bgg};
    @media(prefers-color-scheme: dark){
        color: ${props => props.hued};
        background: ${props => props.bgd};
    }
    background-clip: ${props => props.bgClip};
    -webkit-background-clip: ${props => props.bgClip};
`