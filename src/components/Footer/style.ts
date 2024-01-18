import styled from 'styled-components'

export const Container = styled.footer`
    height: 8rem;
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 2rem;
    border-top: 1px solid ${({theme}) => theme.borderColor};
    span{
        color: #04d8f9;
    }
    align-items: center;
    font-size: 1.3rem;
    a{
        text-decoration: none;
        color: white;
    }
    position: fixed;
    bottom: 0;
    width: 100%;
    background: ${({theme}) => theme.borderColor};
`
