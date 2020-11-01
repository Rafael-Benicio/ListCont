import React from 'react'
import {View, Button, TouchableOpacity} from 'react-native'



const Bts = ({ title , color }) => {
  return (
    <View>
        <Button color={color} title={title}/>
    </View>
  );
}

export default Bts

