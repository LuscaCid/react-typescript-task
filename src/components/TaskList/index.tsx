import { Container } from "./style";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { TaskListProps } from "../../@types/componentsProps";

export const TaskList = ({handleEdit ,taskList, handleDeleteTask} : TaskListProps) => {
    return (
        <Container>
            {taskList.length > 0 ? (<h1>Minhas Tasks</h1>): (<h1>Não há tarefas cadastradas. O/</h1>)}
            <div className="tasks">
                {taskList.length > 0 && taskList.map(element => {
                    return <div 
                    key={element.id}
                    className="task">
                        <div>
                            <h2>{element.title}</h2>
                            <span>Dificuldade: {element.difficult}</span>
                        </div>
                        <div className="timeAndIcons">
                        {
                                element.minsTime && (
                                    <div className="overclock">
                                        <span>time:</span>
                                        <div className="clock">
                                            <span id="mins">02</span>
                                            <span id="middle">:</span>
                                            <span id="secconds">30</span>
                                        </div>
                                    </div>
                                    
                                )
                            }
                        <div className="icons">
                            <div onClick={() => handleEdit(element)}>

                                <FaPencilAlt />
                            </div>
                            
                            <div onClick={() => {handleDeleteTask(element.id)}}>
                                <FaRegTrashAlt />
                            </div>
                            

                        </div>  
                        </div>
                         
                    </div>
                })}
            </div>   
        </Container>
    )
}