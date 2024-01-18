import styled from 'styled-components'

export const Container = styled.div`
    
    .fade{
        
        width: 100%; 
        height: 100vh; 
        position: absolute;
        background-color: #000;
        opacity : .7;
        z-index: 1;
    }
    .modal{
        padding: 2rem 1.2rem;
        position: absolute;
        top: 14%;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: min(46rem, 90%);
        z-index: 2;
        background: #000;
        border-left: 2px solid #61dafb;
        display : flex ;
        flex-direction: column;
        border-radius: .2rem;
        h1{
            margin: 0 2.1rem;
            display: flex;
            justify-content: space-between;
            button{
                background: none;
                border: none;
                color: white;
                font-size: 1.7rem;
                cursor: pointer;
                transition: color 0.5s;
                &:hover{
                    color: #61dafb;
                }
            }
        }
    }
    
`
