import actionTypes from "./actionTypes";
import Axios from "axios";


const BASE_URL = 'https://servertuvung23062020.herokuapp.com'

const GET_WORD_ENDPOINT = BASE_URL + '/word'

export function toggleForm(){
    return {type : actionTypes.TOGGLE_FORM}
}
export function addWord(newWord){
    return {type : actionTypes.ADD_WORD , newWord}
}
export function setFilterMode(filterMode){
    return {type : actionTypes.SET_FILTER_MODE , filterMode}
}
export function toggleWord(_id){
    return {type : actionTypes.TOGGLE_WORD , _id}
}
export function removeWord(_id){
    return {type : actionTypes.REMOVE_WORD , _id}
}
export function fetchAllWords(){
    return (dispatch) => {
        Axios.get(GET_WORD_ENDPOINT)
        .then(response => {
            const { success , words} = response.data
            if(success) {
                dispatch({type : actionTypes.FETCH_All_WORDS , words})
            }
        })
        .catch(error => console.log(error.message))
    }
}