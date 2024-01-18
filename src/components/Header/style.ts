import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    width: 100%;
    //background-color:;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 2rem;
    border-bottom: 1px solid ${({theme}) => theme.borderColor};
    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .react-img{
        img{
            filter:  drop-shadow(1px 1px 3px rgb(255,255,255, 0.3));
            width: 5.5rem;
            animation: spinner 5s linear infinite;
        }
    }
    
    span{
        font-size: 1.5em;
    }
`