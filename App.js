import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

import styles from './global'

import Bts from './components/bts'

export default function App() {
  const [contList,setContList]=useState([])

  const PlusCount=()=>{
    alert('oi')
  }


  return (
    <View style={styles.container}>

      {/* Cabeçalho */}

      <View style={styles.btsView}>
        <Bts title="+" color='#7400bb'/>
      </View>

      {/* Corpo para rolamento */}
      
      <View >
        <View style={styles.corp}>

          <View>
            <Bts title="/" color="#480077" />
          </View>

          {/* Nome doque está sendo listdo */}

          <View>
            <Text>Ali</Text>
          </View>

          {/* Contador do listado */}

          <View style={styles.corpBts}>
            <Bts title='+' color='#480077' />

            <TextInput style={styles.leftInput} maxLength={3} defaultValue={contList}/>
            
            <Bts title='-' color='#480077' onPress={e=>setContList(1)}/>
          </View>
          
        </View>

      </View>
      
    </View>
  );
}

