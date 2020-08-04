const defaultWords = [
  {id : 1 ,en : 'One' , vn : 'Mot' , isMemorized : false},
  {id : 2 ,en : 'Two' , vn : 'Hai' , isMemorized : true},
  {id : 3 ,en : 'Three' , vn : 'Ba' , isMemorized : false},
  {id : 4 ,en : 'Four' , vn : 'Bon' , isMemorized : true},
  {id : 5 ,en : 'Five' , vn : 'Nam' , isMemorized : false},
]

export default function wordReducer(state = defaultWords , action){
    if (action.type === 'ADD_WORD'){
        const newWords = Object.assign([],state)
        newWords.unshift(action.newWord)
        return newWords
    }
    if (action.type === 'TOGGLE_WORD'){
      const newWords = state.map(word => {
        if (word.id == action.id){
            return {...word , isMemorized : !word.isMemorized}
        }
        return word
      })
      return newWords
    }
    if (action.type === 'REMOVE_WORD'){
      const newWords = state.filter(word => word.id != action.id)
      return newWords
    }
    return state
} 