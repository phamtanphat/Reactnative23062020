import React, { Component } from 'react'
import { Text, View , StyleSheet , TouchableOpacity , FlatList} from 'react-native'
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
            ]
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
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
    }
})



