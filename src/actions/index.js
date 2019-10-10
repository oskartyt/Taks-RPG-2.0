export const addToList=(newArrElement)=>{
    return{
        type: 'ADD_STRING',
        payload: {newArrElement}
    }
};