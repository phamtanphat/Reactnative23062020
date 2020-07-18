import React, { Component } from 'react'
import { Text, View , StyleSheet , TouchableOpacity , FlatList , TextInput  } from 'react-native'
import { DimensionApp } from '../unit/dimension'

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
            shouldShowForm : false
        }
    }
    toggleForm = () => {
        this.setState({shouldShowForm : !this.state.shouldShowForm})
    }
    renderForm = () => {
        if (this.state.shouldShowForm){
            return (
                <View >
                    <View style={styles.containerTextInput}>
                    <TextInput 
                        onChangeText={text =>  this.state.en = text}
                        placeholder="English"
                        style={styles.textInput}/>
                    <TextInput 
                        onChangeText={text => this.state.vn = text}
                        placeholder="Vietnamese"
                        style={styles.textInput}/>
                    </View>
                    <View style={styles.containerTouchable}>
                        <TouchableOpacity
                            style={styles.touchableAddword}
                        >
                            <Text style={styles.textTouchable}>Add word</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.toggleForm}
                            style={styles.touchableCancel}
                        >
                            <Text style={styles.textTouchable}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            );
        } else {
            return (
                <TouchableOpacity
                    style={styles.buttonOpenForm}
                    onPress={this.toggleForm}>
                    <Text style={styles.textOpenForm}>+</Text>
                </TouchableOpacity>
            )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderForm()}
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.words}
                    extraData={this.state.words}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={({item}) => {
                        return(
                            <View 
                                style={styles.flexBoxWord}>
                                <View style={styles.flexBoxElement}>
                                    <Text style={styles.textStyleEn}> {item.en} </Text>
                                    <Text 
                                        style={styles.textStyleVn}> 
                                            {item.isMemorized ? '----' : item.vn} 
                                    </Text>
                                </View>
                                <View style={styles.flexBoxElement}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            const newWords = this.state.words.map(word => {
                                                if (word.id == item.id){
                                                    return {...word , isMemorized : !item.isMemorized}
                                                }
                                                return word
                                            })
                                            this.setState({words : newWords})
                                        }}
                                        style={
                                            [styles.touchableIsMemorized , 
                                                {backgroundColor : item.isMemorized ? '#2BA848' : '#DC3545'}
                                            ]
                                        }>
                                        <Text 
                                            style={styles.textStyleMemorized}> 
                                            {item.isMemorized ? 'Forgot' : 'Memorized'}  
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            const newWords = this.state.words.filter(word => word.id != item.id)
                                            this.setState({words : newWords})
                                        }}
                                        style={styles.touchableRemove}>
                                        <Text 
                                            style={styles.textStyleRemove}> 
                                            Remove
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                
                />
                
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
})



