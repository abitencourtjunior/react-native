import React from 'react'
import { View, Text} from 'react-native'
import Standard from '../style/Standard'

function parOrImpar(number) {
   
    const value = number % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={Standard.ex}> {value} </Text>
    
    /*
   if(number % 2 == 0) {
       return <Text style={Standard.ex}> Par </Text>
   }

   return <Text style={Standard.ex}> Impar </Text>
   */
}

export default props =>
    <View>
        {parOrImpar(props.number)}
        {/*
            props.number % 2 == 0
            ? <Text style={Standard.ex}> Par </Text>
            : <Text style={Standard.ex}> Impar </Text>
        */}
    </View>