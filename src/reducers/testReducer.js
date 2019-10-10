const testReducer=(state=['asdad','asdadgfgg'],action)=>{
    switch (action.type) {
        case 'ADD_STRING':
            console.log('weszło');
            return [...state,action.payload.newArrElement];
        default:
            return state
    }
};

export default testReducer;