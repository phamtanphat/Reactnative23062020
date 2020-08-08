import React, { Component } from 'react'
import { Text, View , FlatList , Image} from 'react-native'
import { DimensionApp } from '../../unit/dimension';


export default class ListProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [
                {id : '1' , name : "Macbook pro 2020" , uri : require('../../assets/images/hinh1.jpg')},
                {id : '2' , name : "Macbook pro 2019" , uri : require('../../assets/images/hinh2.jpg')}
            ]
        }
    }
    renderItem = (item) => {
        return(
            <View style={{alignItems : 'center'}}>
                <Image 
                    style={{width : DimensionApp.getWidth() / 2 , height : DimensionApp.getWidth() / 2}}
                    source={item.uri}/>
                <Text style={{color : 'red'}}>{item.name}</Text>
            </View>
        )
    }
    render() {
        return (
        <FlatList 
            data={this.state.products}
            numColumns={2}
            extraData={this.state.products}
            keyExtractor={(item,index) => index.toString()}
            renderItem={({item}) => this.renderItem(item)}
        />)
    }
}
