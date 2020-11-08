import React,{useState} from 'react'
import {View, Button, BackHandler, Text, TextInput, AsyncStorage, ScrollView, TouchableOpacity} from 'react-native'
import { Feather } from '@expo/vector-icons'; 

import styles from './styles'

import  StatusB from '../../../StatusBar'

export default function Home({navigation }){
    const [grupo,setGrupo]=useState([])
    const [per,setPer]=useState(false)
    const [tmp,setTmp]=useState('')

    function AddList(){
        // let newArr = [...grupo]; 
        // newArr[i].list +=1; 
    
        // return setCont(newArr);
    }

    function Plt(){
        setPer(true)
    }

    function PlusList(){
        let nom=tmp
  
        const array = grupo.slice();
        array.push({nome:nom,list:[]})
        setGrupo(array);
        console.log(array);
        setTmp('')
     
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

    function closeApp(){
        BackHandler.exitApp();
    }

    return(
        <View>
            <StatusB/>
            <View style={styles.header} >
                <Button title="+" color='#7400bb' onPress={Plt}/>    
                <View style={styles.btsVision} >  
                <Button title="Sair" color='#7400bb' onPress={closeApp}/>    
                </View>
            </View>

            <ScrollView>{
                grupo.map((gp,i)=>(
                    <TouchableOpacity key={i}>    
                       <View style={styles.corp}>
                            <View style={styles.corpTrash}>
                                <Feather name="trash" size={24} color="white" onPress={()=>edit(i)}/>
                            </View>
                            
                            <Text style={styles.btList}>{gp.nome}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            }</ScrollView>
            <Button title="List" onPress={()=>navigation.navigate('List')}/>

            {
                prompt()
            }
        </View>
    ) 
}