//no 'G' in string
export const GNotAllowedMiddleware=({dispatch})=>{
  return next=>{
      return action=>{
          let G='G';
          if (action.type === 'ADD_STRING'){
              if (action.payload.newArrElement.includes(G)){
                  return dispatch({ type: "OH_NO_FOUND_G" });
              }
          }
          return next(action)
      }
  }
};