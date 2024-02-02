export interface TaskFormProps {
    task? : Task | null //only in modal its real
    btnTitle : string
    taskList : Task[]
    setTaskList : React.Dispatch<React.SetStateAction<Task[]>>
    handleUpdate?(id : number, title : string | undefined, difficult : number) : void
    //to perplexo que precisa diss tudo pra tipar
}

export interface TaskListProps {
    taskList : Task[]
    handleDeleteTask(id : number) : void
    handleEdit(task : Task) : void
}

export interface Task {
    id : number
    title : string | undefined
    difficult : number | undefined // can be an empty space in htmlInput
    minsTime? : number | undefined // can be an empty space in htmlInput
}
