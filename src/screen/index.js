import React, { Component } from 'react'
import { 
    View , 
    StyleSheet , 
    Alert
} from 'react-native'
import Form from '../component/Form';
import Filter from '../component/Filter';
import Word from '../component/Word';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state= {
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
    }
    onToggleForm = () => {
        this.setState({shouldShowForm : !this.state.shouldShowForm})
    }
    onAddWord = (en , vn) => {
        if( !en.length > 0 || !vn.length > 0){
            Alert.alert(
                "Thong bao",
                "Ban chua nhap du thong tin",
                [
                    {text : 'Da hieu' , style : 'cancel'},
                ],
                { cancelable: false }
            )
        }else{
            const newWords = Object.assign([],this.state.words)
            const newWord = {
                id : newWords.length + 1,
                en : en,
                vn : vn,
                isMemorized : false
            }
            newWords.unshift(newWord)
            this.setState({words : newWords })
        }
    }
    onToggleWord = (id) =>{
        const newWords = this.state.words.map(word => {
            if (word.id == id){
                return {...word , isMemorized : !word.isMemorized}
            }
            return word
        })
        this.setState({words : newWords})
    }
    onRemoveWord = (id) => {
        const newWords = this.state.words.filter(word => word.id != id)
        this.setState({words : newWords})
    }
    onSetFilterMode = (filterMode) =>{
        this.setState({filterMode})
    }
    render() {
        return (
            <View style={styles.container}>
                <Form 
                    onAddWord={this.onAddWord}
                    onToggleForm={this.onToggleForm}
                    shouldShowForm={this.state.shouldShowForm}/>
                <Filter 
                    onSetFilterMode={this.onSetFilterMode}
                    filterMode={this.state.filterMode}/>
                <Word 
                    onRemoveWord={this.onRemoveWord}
                    onToggleWord={this.onToggleWord}
                    words={this.state.words} 
                    filterMode={this.state.filterMode}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
       flex : 1,
       marginHorizontal: 5
    }
})



