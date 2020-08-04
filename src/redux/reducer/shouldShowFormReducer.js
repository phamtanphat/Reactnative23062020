export default function shouldShowFormReducer(state = false , action){
    if (action.type === 'TOGGLE_FORM'){
      return !state
    }
    return state
} 