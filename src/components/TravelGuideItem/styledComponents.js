import styled from 'styled-components'

// {CardCont, Img, Para}

export const CardCont = styled.li`
    background-color:#ffffff;
    width:40%;
    border:1px solid #ffffff;
    flex-grow:1;
`
export const Img = styled.img`
    width:100%;
`

export const Para = styled.h1`
    color:${props => (props.desc ? '#64748b' : '#475569')};
    font-size:${props => (props.desc ? '17px' : '22px')};
    padding:15px;
    margin:0;
    font-weight:${props => (props.desc ? 'normal' : 'bold')};
`
