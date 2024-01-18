import {Container} from './style'
import { useEffect, useState } from 'react'
import Task from '../../interfaces/TaskInterface'
import reactImgLogo from '../../assets/react.svg'
interface props {
    taskList : Task[]
}

export const Header = ( {taskList} : props) => {
    
    const [tamanho, setTamanho] = useState<number>(0)
    useEffect(() => {
        setTamanho(taskList.length)
    }, [taskList.length])
    return (
        <Container>
            <div className="react-img">
                <img src={reactImgLogo} alt="react-logo" />
            </div>
            <h1>
                TO-DO react - ts
            </h1>
            <span>tasks: {tamanho}</span>
        </Container>
    )
}