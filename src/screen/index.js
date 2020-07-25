import React, { Component } from 'react'
import { 
    View , 
    StyleSheet , 
    Alert
} from 'react-native'
import { DimensionApp } from '../unit/dimension'
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
            en : '',
            vn : '',    
            filterMode: 'Show_All',
        }
    }
    toggleForm = () => {
        this.setState({shouldShowForm : !this.state.shouldShowForm})
    }
    addWord = () => {
        const { en , vn } = this.state
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
            this.textInputVn.clear()
            this.textInputEn.clear()
        }
    }
    toggleWord = (id) =>{
        const newWords = this.state.words.map(word => {
            if (word.id == id){
                return {...word , isMemorized : !word.isMemorized}
            }
            return word
        })
        this.setState({words : newWords})
    }
    removeWord = (id) => {
        const newWords = this.state.words.filter(word => word.id != id)
        this.setState({words : newWords})
    }
    render() {
        return (
            <View style={styles.container}>
                <Form 
                    shouldShowForm={this.state.shouldShowForm}/>
                <Filter 
                    filterMode={this.state.filterMode}/>
                <Word 
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
    },
    flexBoxWord: {
        height : DimensionApp.getWidth() / 3,
        flexDirection : 'column',
        backgroundColor : '#b0bec5',
        borderRadius : 10,
        marginBottom : 10,
        justifyContent : 'space-around'
    },
    flexBoxElement: {
        flexDirection : 'row',
        justifyContent : 'space-around'
    },
    textStyleEn : {
        color : '#2BA848',
        fontSize : DimensionApp.getWidth() / 12
    },
    textStyleVn : {
        color : '#DC3545',
        fontSize : DimensionApp.getWidth() / 12
    },
    touchableIsMemorized: {
        padding : DimensionApp.getWidth() / 50 ,
        borderRadius : 5,
    },
    touchableRemove: {
        padding : DimensionApp.getWidth() / 50 ,
        borderRadius : 5,
        backgroundColor : '#E0A800'
    },
    textStyleMemorized: {
        color: 'white',
        fontSize : DimensionApp.getWidth() / 12
    },
    textStyleRemove: {
        color: 'white',
        fontSize : DimensionApp.getWidth() / 12 
    },
    containerTextInput: {
        width : '100%',
        height: 150,
        justifyContent : 'space-evenly'
    },
    textInput : {
        borderWidth : 1,
        height: 60,
        fontSize : 20,
        paddingHorizontal: 10,
    },
    touchableAddword : {
        backgroundColor : '#218838',
        padding : 15,
        borderRadius : 10
    },
    textTouchable: {
        color : 'white',
        fontSize : 20,
        fontWeight : '500'
    },
    touchableCancel: {
        backgroundColor : 'red',
        padding : 15,
        borderRadius : 10
    },
    buttonOpenForm: {
        width : '100%',
        height : 50,
        backgroundColor : '#45B157',
        borderRadius : 5,
        marginBottom : 10,
        justifyContent : 'center',
        alignItems : 'center'
    },
    textOpenForm: {
        color : 'white',
        fontSize : 30
    },
    containerTouchable: {
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        marginBottom : 10
    },
    containerPickerStyle: {
        borderWidth: 1,
        borderRadius: 1,
        borderColor: 'black',
        padding : 20,
        marginVertical : 10
      },
    pickerStyle: {
        padding: 50,
      },
})



