export const IncreNum = (num)=> {
    return{
        type: "Increment",
        payload: num
    }
}

export const DecreNum = (num)=>{
    return{
        type: "Decrement",
        payload: num
    }
}

export const DeleteNum =()=>{
    return{
        type: "DeleteNum",
    }
}

