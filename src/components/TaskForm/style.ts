import styled from 'styled-components'

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    color: #fff;
    margin: auto;
    width: min(46rem, 90%);
    margin-top: 4rem;
    border: 1px solid ${({theme}) => theme.borderColor};
    padding: 2rem 1.3rem;
    border-radius: 0.6rem;
    gap: 2rem;
    .input-wrapper{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        label{
            font-size: 2.2rem;
        }
        input{
            background: none;
            color: white;
            font-size: 1.5rem;
            border: none;
            border-bottom: 1.1px solid ${({theme}) => theme.borderColor};
            padding: 1rem 1.2rem;
        }
    }
    button{
        color: white;
        background: none;
        border: 1px solid ${({theme}) => theme.borderColor};
        border-radius: 222rem;
        cursor: pointer;
        transition: background .4s;
        &:hover{
            background: #61dbfb;
            filter: brightness(.9);
        }
    }
`