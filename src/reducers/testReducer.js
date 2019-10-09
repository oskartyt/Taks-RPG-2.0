const testReducer=(state=['asdad','asdadgfgg'],action)=>{
    switch (action) {
        case 'ADD_STRING':
            return [...state,action.payload.newArrElement]
        default:
            return state
    }
};

export default testReducer;