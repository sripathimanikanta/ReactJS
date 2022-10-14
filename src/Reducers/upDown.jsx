const initialState = 0;

const changeTheNumber = (state=initialState, action) =>{
    switch(action.type){
        case "Increment" : return state + action.payload;
        case "Decrement": return state>0? state - action.payload: state;
        case "DeleteNum": return state=0;
        default : return state;
    }
}

export default changeTheNumber;