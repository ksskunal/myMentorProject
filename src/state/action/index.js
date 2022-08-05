export  const adminStatus3=(adminstatus)=>{
    return (dispatch)=>{
        dispatch(
            {
                type: 'adminstatus3',
                payload : adminstatus
            }
        )
    }
}

export  const adminStatus0=(adminstatus)=>{
    return (dispatch)=>{
        dispatch(
            {
                type: 'adminstatus1',
                payload : adminstatus
            }
        )
    }
}