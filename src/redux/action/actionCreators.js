import actionTypes from "./actionTypes";

export function toggleForm(){
    return {type : actionTypes.TOGGLE_FORM}
}
export function addWord(newWord){
    return {type : actionTypes.ADD_WORD , newWord}
}
export function setFilterMode(filterMode){
    return {type : actionTypes.SET_FILTER_MODE , filterMode}
}
export function toggleWord(id){
    return {type : actionTypes.TOGGLE_WORD , id}
}
export function removeWord(id){
    return {type : actionTypes.REMOVE_WORD , id}
}