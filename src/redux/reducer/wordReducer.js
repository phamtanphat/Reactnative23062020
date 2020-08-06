
export default function wordReducer(state = [] , action){
    if (action.type === 'FETCH_All_WORDS'){
      return action.words
    }
    if (action.type === 'ADD_WORD'){
        const newWords = Object.assign([],state)
        newWords.unshift(action.newWord)
        return newWords
    }
    if (action.type === 'TOGGLE_WORD'){
      const newWords = state.map(word => {
        if (word._id == action._id){
            return {...word , isMemorized : !word.isMemorized}
        }
        return word
      })
      return newWords
    }
    if (action.type === 'REMOVE_WORD'){
      const newWords = state.filter(word => word._id != action._id)
      return newWords
    }
    return state
} 