import React , {useState , useEffect}from 'react'
import { View, Text , TouchableOpacity} from 'react-native'

export default function DetailProduct(props) {
    const [count, setCount] = useState(0)
    const [name, setname] = useState({name : 'Teo'})
    // componentWillUnmount
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Hello")
        },1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    // component did update
   
    return (
        <View>
            <Text>{count}</Text>
            <TouchableOpacity
                onPress={() => setCount(count + 1)}
            >
                <Text>Increase</Text>
            </TouchableOpacity>
        </View>
    )
}
