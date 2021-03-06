import React, { PureComponent } from 'react'
import { Text, View , StyleSheet , TouchableOpacity } from 'react-native'
import { DimensionApp } from '../unit/dimension'
import {connect} from 'react-redux';
import * as actionCreators from '../redux/action/actionCreators'

class WordItem extends PureComponent {
    render() {
        const { filterMode , item } = this.props
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
                            onPress={() => this.props.toggleWord(item._id)}
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
                            onPress={() => this.props.removeWord(item._id)}
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


export default connect(null , actionCreators)(WordItem)



