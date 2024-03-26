import styled from 'styled-components'

// {BgCont, Heading,UlCont}

export const BgCont = styled.div`
    background-color:#eef4f7;
    min-height:100vh;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    
`
export const Heading = styled.h1`
    color:#334155;
    font-size:30px;
    border-bottom:3px solid #52bbf0;
    text-align:center;
    width:180px;
    align-self:center;
    padding-bottom:10px;
`
export const UlCont = styled.ul`
    width:90%;
    list-style-type:none;
    padding-left:0px;
    display:flex;
    align-items:center;
    align-self:center;
    flex-wrap:wrap;
    gap:20px;

`

export const LoaderCont = styled.div`
    height:80vh;
    display:flex;
    justify-content:center;
    align-items:center;
`
