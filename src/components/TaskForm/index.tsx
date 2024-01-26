import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Container } from "./style";
import Task from "../../interfaces/TaskInterface";

interface Props {
    task? : Task | null //only in modal its real
    btnTitle : string
    taskList : Task[]
    setTaskList : React.Dispatch<React.SetStateAction<Task[]>>
    handleUpdate?(id : number, title : string | undefined, difficult : number) : void
    //to perplexo que precisa diss tudo pra tipar
}
 //vai receber o id do clickado
export const TaskForm = ({handleUpdate,task ,btnTitle, taskList, setTaskList}: Props) => {
    const [id, setId] = useState<number>(0)
    const [taskTitle, setTaskTitle] = useState<string | undefined>('')
    const [difficultLevel, setDifficultLevel] = useState<undefined | number>(undefined)
    const [minsTime, setMinsTime] = useState<number | undefined>(undefined) 
    
    function verifyTitle(taskTitle : string): Task[] {
        const arrWithElement : Task[]= taskList.filter(task => task.title ===taskTitle)
        return arrWithElement
    }
    
    const handleCreateTask = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!taskTitle)return alert('must have an title')
        const [alreadyExists] = verifyTitle(taskTitle)

        if(alreadyExists){
            const confirma = confirm('Já existe uma task com este titulo, deseja prosseguir?')
            if(!confirma)return
        }
        let newTask : Task;
        if(minsTime){
            newTask = {
                id : Math.round(Math.random()*10000),
                title : taskTitle,
                difficult : difficultLevel,
                minsTime : minsTime
            }
        } else {
            newTask = {
            id : Math.round(Math.random()*10000),
            title : taskTitle,
            difficult : difficultLevel
            }
        }
        
        setTaskTitle('')
        setDifficultLevel(0)
        setTaskList!(prevState => [...prevState, newTask ])
        const actualArray : Task[]= [...taskList, newTask] 
        localStorage.setItem("@TODO-array", JSON.stringify(actualArray))
    }
    
    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        if(e.target.name == 'title'){
            setTaskTitle(e.target.value)
        } else if(e.target.name == 'diff'){
            setDifficultLevel(parseInt(e.target.value))
        }  else if(e.target.name == "mins") {
            console.log('input mins', e.target.value )
            //let valueOfInput : number | undefined = Number(e.target.value)
           // if(valueOfInput < 0)setMinsTime(undefined) 
        }
    }

    useEffect(() => {
        if(task){
            setId(task.id)
            setDifficultLevel(task.difficult)
            setTaskTitle(task.title)
            
        }
    }, [task])

    useEffect(() => {

    }, [])

    //container its a form element created with styled components
    return (
        <Container onSubmit={(e) => {
            if(handleUpdate){
                e.preventDefault()//cannot send form
                handleUpdate(id, taskTitle, Number(difficultLevel))
            } else {
                handleCreateTask(e)
            }

        }}>
            <div className="input-wrapper">
                <label htmlFor="titleInput">Título:</label>
                <input 
                name="title"
                value={String(taskTitle)}
                placeholder="Título"
                type="text"
                id="titleInput"
                onChange={handleChange}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="titleDiff">Dificuldade:</label>
                <input 
                name="diff"
                value={Number(difficultLevel)}
                max={10}
                placeholder="Nível"
                type="number"
                id="titleDiff"
                onChange={handleChange}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="mins">Tempo limite:</label>
                <input 
                    name="mins"
                    type="number" 
                    max={60}
                    placeholder="mins"
                    id="mins"
                    
                    onChange={e => setMinsTime(e.target.value)}//tanto desta form quanto pela handle

                />
            </div>
            
            <button
                type="submit">
                {btnTitle}
            </button>
        </Container>
    )
}