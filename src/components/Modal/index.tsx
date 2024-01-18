import React from 'react'
import { Container } from './style'

interface Props {
    children : React.ReactNode
}
//geralmente um modal tem uma parte que esconde as de trás, uma fade, um background opaco
const Modal = ({children}: Props) => {

    const closeCloseWithClickOutSide = (event : React.MouseEvent) => {
        const modal = document.querySelector('#modal')
        modal!.classList.add('hide')
    }

    const closeWithClickInX = () => {
        const modal = document.querySelector('#modal')
        modal!.classList.add('hide')     
    }

    return (
        <Container id='modal' className='hide'>
            <div className='fade' onClick={closeCloseWithClickOutSide}></div>
            <div className='modal'>
                <h1>
                    Edição
                    <button onClick={closeWithClickInX}>
                        x
                    </button>
                </h1>
                {children}
            </div>
        </Container>
    )
}

export default Modal
