import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import { DimensionApp } from '../unit/dimension'

export default class Main extends Component {
    render() {
        const words = [
            {id : 1 ,en : 'One' , vn : 'Mot' , isMemorized : false},
            {id : 2 ,en : 'Two' , vn : 'Hai' , isMemorized : true},
            {id : 3 ,en : 'Three' , vn : 'Ba' , isMemorized : false},
            {id : 4 ,en : 'Four' , vn : 'Bon' , isMemorized : true},
            {id : 5 ,en : 'Five' , vn : 'Nam' , isMemorized : false},
            
        ]
        return (
            <View style={styles.container}>
                {
                    words.map(word => {
                        return (
                            <View style={styles.flexBoxText} key={word.id.toString()}>
                                <Text style={styles.textStyleEn}> {word.en} </Text>
                                <Text 
                                    style={styles.textStyleVn}> 
                                        {word.isMemorized ? '----' : word.vn} 
                                </Text>
                            </View>
                        )
                    })
                }
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
       flex : 1,
    },
    flexBoxText: {
        flexDirection : 'row',
        justifyContent : 'space-around'
    },
    textStyleEn : {
        color : '#2BA848',
        fontSize : DimensionApp.getWidth() / 10
    },
    textStyleVn : {
        color : '#DC3545',
        fontSize : DimensionApp.getWidth() / 10
    }
})



