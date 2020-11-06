import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { Text, View, Button, ScrollView, TextInput , Alert, AsyncStorage,BackHandler } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

import styles from './global'

import StatusB from './StatusBar'

export default function App() {
  const [cont,setCont]=useState([])
  const [per,setPer]=useState(false)
  const [tmp,setTmp]=useState('')

  async function closeApp(){
    try {
      await AsyncStorage.setItem('Key',JSON.stringify(cont))
      BackHandler.exitApp();
    } catch (error) {
      alert('Erro!')
    }
  }

  async function saveData(){
    await AsyncStorage.setItem('Key',JSON.stringify(cont))
    alert('Dados atuais salvos')
  }  
  
  function getData(){
    Alert.alert(
      'Aviso',
      'Você quer carregar os seus dados?',
      [
        {
          text: 'Sim',
          onPress: async() => {
            let i=await AsyncStorage.getItem('Key')
            let e=JSON.parse(i)
            setCont(e);
          }
        },
        {
          text: 'Não',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        }
      ],
      { cancelable: false }
    )
  }

  function Plt(){
    setPer(true)
  }

  function PlusList(){
      let nom=tmp

      const array = cont.slice();
      array.push({nome:nom,list:0})
      setCont(array);
      setTmp('')
   
  } 

  function Plus(i){
    let newArr = [...cont]; 
    newArr[i].list +=1; 

    return setCont(newArr);
  }

  function Less(i){
    let newArr = [...cont]; 
    newArr[i].list -=1; 

    return setCont(newArr); 
  }

  function edit(i){
    let newArr = [...cont];
    Alert.alert(
      'Aviso',
      'Você deseja apagar o item "'+newArr[i].nome+'"?',
      [
        {
          text: 'Sim',
          onPress: () => {
            newArr.splice(i,1)

            setCont(newArr); 
          }
        },
        {
          text: 'Não',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        }
      ],
      { cancelable: false }
    )
   

  }
  
  function prompt(){
    function no(){
      setPer(false)
    }
    
    function yes(){
      PlusList()
      setPer(false)
      
    }
    
    if(per){
      return(
        <View style={styles.pos} visibl={true}>
          <Text>Novo Item da List</Text>
          <TextInput style={styles.inputPromp} value={tmp} onChangeText={tmp => setTmp(tmp)} autoCorrect={false} multiline={false} maxLength={20} autoFocus={true}/>
          <View style={styles.prompBt}>
            <Button color='#480077' onPress={yes} title="ok"/>
            <Button color='#480077' onPress={no} title="Cancelar"/>
          </View>
        </View>
    )}
  }

  
  return (
    <View style={styles.container}>

      <StatusB/>

      <View style={styles.btsView}>
        <Button title="+" color='#7400bb' onPress={Plt}/>    
        <View style={styles.dados}>
          <Button style={styles.load} title="Load" color='#7400bb' onPress={getData}/>    
          <Button title="Save" color='#7400bb' onPress={saveData}/>    
          <Button title="Sair" color='#7400bb' onPress={closeApp}/>    

        </View>
      </View>
    
      <ScrollView>
        
        {
          cont.map((count,i)=>(
            <View key={i} style={styles.corp}>
                <View style={styles.corpTrash}>
                  <Feather name="trash" size={24} color="white" onPress={()=>edit(i)}/>
                </View>

                <View >

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

          <View style={styles.last}>
            
          </View>
        </ScrollView>
        
        {prompt()}

    </View>
  );
}

