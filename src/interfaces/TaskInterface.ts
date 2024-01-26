interface Task {
    id : number
    title : string | undefined
    difficult : number | undefined // can be an empty space in htmlInput
    minsTime? : number | undefined // can be an empty space in htmlInput
}
export default Task