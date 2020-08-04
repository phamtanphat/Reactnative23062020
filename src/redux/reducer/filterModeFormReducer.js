export default function filterModeFormReducer(state = 'Show_All' , action){
    if (action.type === 'SET_FILTER_MODE'){
      return action.filterMode
    }
    return state
} 