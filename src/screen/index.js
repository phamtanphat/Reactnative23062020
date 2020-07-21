import React, { Component } from 'react'
import { 
    Text, 
    View , 
    StyleSheet , 
    TouchableOpacity , 
    FlatList , 
    TextInput ,
    Alert
} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { DimensionApp } from '../unit/dimension'
import Form from '../component/Form';

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
    renderForm = () => {
        if (this.state.shouldShowForm){
            return (
                <View >
                    <View style={styles.containerTextInput}>
                    <TextInput 
                        ref={ref => this.textInputEn = ref}
                        onChangeText={text =>  this.state.en = text}
                        placeholder="English"
                        style={styles.textInput}/>
                    <TextInput 
                        ref={ref => this.textInputVn = ref}
                        onChangeText={text => this.state.vn = text}
                        placeholder="Vietnamese"
                        style={styles.textInput}/>
                    </View>
                    <View style={styles.containerTouchable}>
                        <TouchableOpacity
                            onPress={() => {
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
                            }}
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
    renderItemWord = (item) => {
        const { filterMode } = this.state
        if(filterMode === 'Show_Forgot' && !item.isMemorized){
            return null
        } else if (filterMode === 'Show_Memorized' && item.isMemorized){
            return null
        } else{
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
                            onPress={() => this.toggleWord(item.id)}
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
                            onPress={() => this.removeWord(item.id)}
                            style={styles.touchableRemove}>
                            <Text 
                                style={styles.textStyleRemove}> 
                                Remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
       
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderForm()}
                <View style={styles.containerPickerStyle}>
                    <RNPickerSelect
                    value={this.state.filterMode}
                    onValueChange={(value) => this.setState({filterMode : value})}
                    items={[
                        { label: 'Show All', value: 'Show_All' },
                        { label: 'Show Forgot', value: 'Show_Forgot' },
                        { label: 'Show Memorized', value: 'Show_Memorized' },
                    ]}
                    />
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.words}
                    extraData={this.state.words}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={({item}) => this.renderItemWord(item)}
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



