import { ReactElement } from 'react'
import {Container} from './style'

export const Footer = () : ReactElement=> {
    return (
        <Container>
            <span>React With Typescript</span>
            <p>@2024</p>
            <span>github : <a href="https://github.com/luscacid" target='_blank'>@LucasCid</a></span>
        </Container>
    )
}   