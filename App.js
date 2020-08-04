import React, { Component } from 'react'
import { SafeAreaView , StyleSheet} from 'react-native'
import Main from './src/screen'
// import Form from './src/component/Form'
// import Box from './src/component/Box'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

// import Filter from './src/component/Filter'

const defaultWords = [
  {id : 1 ,en : 'One' , vn : 'Mot' , isMemorized : false},
  {id : 2 ,en : 'Two' , vn : 'Hai' , isMemorized : true},
  {id : 3 ,en : 'Three' , vn : 'Ba' , isMemorized : false},
  {id : 4 ,en : 'Four' , vn : 'Bon' , isMemorized : true},
  {id : 5 ,en : 'Five' , vn : 'Nam' , isMemorized : false},
]

function wordReducer(state = defaultWords , action){
  if (action.type === 'ADD_WORD'){
      const newWords = Object.assign([],state)
      newWords.unshift(action.newWord)
      return newWords
  }
  return state
} 
function shouldShowFormReducer(state = false , action){
  if (action.type === 'TOGGLE_FORM'){
    return !state
  }
  return state
} 
function filterModeFormReducer(state = 'Show_All' , action){
  return state
} 

const rootReducer = combineReducers({
  words : wordReducer,
  shouldShowForm : shouldShowFormReducer,
  filterMode : filterModeFormReducer
})

// const reducer = function(state = defaultStore , action){
  // if (action.type === 'ADD_WORD'){
  //   const newWords = Object.assign([],state.words)
  //   newWords.unshift(action.newWord)
  //   return {...state , words : newWords}
  // }
//   if (action.type === 'TOGGLE_WORD'){
//     const newWords = state.words.map(word => {
//       if (word.id == action.id){
//           return {...word , isMemorized : !word.isMemorized}
//       }
//       return word
//     })
//     return {...state , words : newWords}
//   }
//   if (action.type === 'REMOVE_WORD'){
//     const newWords = state.words.filter(word => word.id != action.id)
//     return {...state , words : newWords}
//   }
//   if (action.type === 'SET_FILTER_MODE'){
//     return {...state , filterMode : action.filterMode}
//   }
//   return state
// }
const store = createStore(rootReducer)


export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <Main />
        </Provider>
      </SafeAreaView>
    )
  }
}

console.disableYellowBox = true

const styles = StyleSheet.create({
    container : {
      flex : 1,
    },
})

