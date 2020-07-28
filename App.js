import React, { Component } from 'react'
import { SafeAreaView , StyleSheet} from 'react-native'
import Main from './src/screen'
// import Form from './src/component/Form'
// import Box from './src/component/Box'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// import Filter from './src/component/Filter'

const defaultStore = {
  words: [
    {id : 1 ,en : 'One' , vn : 'Mot' , isMemorized : false},
    {id : 2 ,en : 'Two' , vn : 'Hai' , isMemorized : true},
    {id : 3 ,en : 'Three' , vn : 'Ba' , isMemorized : false},
    {id : 4 ,en : 'Four' , vn : 'Bon' , isMemorized : true},
    {id : 5 ,en : 'Five' , vn : 'Nam' , isMemorized : false},
  ],
  shouldShowForm : false,   
  filterMode: 'Show_All',
}

// 1 : Tao ra store
const store = createStore(function(state = defaultStore , action){
    if (action.type === 'TOGGLE_FORM'){
      return {...state , shouldShowForm : !state.shouldShowForm}
    }
    if (action.type === 'ADD_WORD'){
      const newWords = Object.assign([],state.words)
      newWords.unshift(action.newWord)
      return {...state , words : newWords}
    }
    if (action.type === 'TOGGLE_WORD'){
      const newWords = state.words.map(word => {
        if (word.id == action.id){
            return {...word , isMemorized : !word.isMemorized}
        }
        return word
      })
      return {...state , words : newWords}
    }
    if (action.type === 'REMOVE_WORD'){
      const newWords = state.words.filter(word => word.id != action.id)
      return {...state , words : newWords}
    }
    if (action.type === 'SET_FILTER_MODE'){
      return {...state , filterMode : action.filterMode}
    }
    return state
})


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

