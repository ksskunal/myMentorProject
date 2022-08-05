const reducer = (state = 0,action)=>{
    if(action.type === 'adminstatus3'){
        return state + action.payload
    }else if(action.type === 'adminstatus0'){
        return state - action.payload
    }else{
        return state
    }

}

export default reducer