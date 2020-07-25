import React, { Component } from 'react'
import {FlatList} from 'react-native'
import WordItem from './WordItem'

export default class Word extends Component {
    render() {
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                data={this.props.words}
                extraData={this.props.words}
                keyExtractor={(item,index) => index.toString()}
                renderItem={({item}) => (
                    <WordItem 
                        item={item} 
                        filterMode={this.props.filterMode}/>)
                }
            />
        )
    }
}
