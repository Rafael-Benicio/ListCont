import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Button, TextInput , Alert, AsyncStorage } from 'react-native';

import styles from './global'


export default function App() {
  const [cont,setCont]=useState([
    {
      nome:'Manga 1',
      list:0
    }
  ])

  let per=true

  function PlusList(){
    let nom="NOM"

    const array = cont.slice();
    array.push({nome:nom,list:0})
    setCont(array);
  } 

  function Plus(i){
    let newArr = [...cont]; 
    newArr[i].list +=1; 

    setCont(newArr); 
  }

  function Less(i){
    let newArr = [...cont]; 
    newArr[i].list -=1; 

    setCont(newArr); 
  }

  function edit(i){
    let newArr = [...cont];

    newArr.splice(i,1)

    setCont(newArr); 

  }

  return (
    <View style={styles.container}>

      <View style={styles.btsView}>
        <Button title="+" color='#7400bb' onPress={PlusList}/>
        
        
      </View>

        {
          cont.map((count,i)=>(
            <View style={styles.corp}>
                <View>
                  <Button title="/" color="#480077" onPress={()=>edit(i)} />
                </View>

                <View style={styles.corpTex}>

                  <Text style={styles.tex}>{count.nome}</Text>
                </View>

                <View style={styles.corpBts}>
                  <Button title='+' color='#480077' onPress={()=>Plus(i)}/>

                  {/* <TextInput style={styles.leftInput} maxLength={3} defaultValue={""+count.list+""}/> */}
                  <Text style={styles.leftInput} >{count.list}</Text>
                  <Button title='-' color='#480077' onPress={()=>Less(i)}/>
                </View>
            </View >
        ))} 

        <View style={styles.pos}>
          <Text>Novo Item da List</Text>
          <TextInput style={styles.inputPromp} autoCorrect={false} multiline={false} maxLength={10} autoFocus={true}/>
          <View style={styles.prompBt}>
            <Button color='#480077' title="ok"/>
            <Button color='#480077' title="Cancelar"/>
          </View>
        </View>

    </View>
  );
}

