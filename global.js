import {StyleSheet, Dimensions} from 'react-native'

const deviceWidth = Dimensions.get('window').width/2
const deviceHeight = Dimensions.get('window').height/2

const styles = StyleSheet.create({
    container: {
      
    },
    btsView:{
      flexDirection:'row',
      alignItems:'flex-start',
      paddingLeft:20,
      paddingRight:20,
      paddingTop:20,
      paddingBottom:20,
      justifyContent:'space-between',
      backgroundColor: '#480077',
    },
    dados:{
      flexDirection:'row',
      width:180,
      justifyContent:'space-between'
    },
    corp:{
      height:45,
      padding:5,
      flexDirection:'row',
      backgroundColor:'#7400bb',
      justifyContent:'space-between',
      alignItems:'center',
      borderStyle:'solid',
      borderBottomWidth:1,
      borderColor:"#480077"
    },
    last:{
      height:75,
      // backgroundColor:'#7400bb',

    },
    corpTrash:{
      marginLeft:10
    },
    corpBts:{
      flexDirection:'row',
      alignItems:'center'
    },
    leftInput:{
      backgroundColor:'#fff',
      height:30,
      marginLeft:3,
      marginRight:3,
      width:27,
      textAlign:'center',
      paddingTop:4
      
    },
    corpTex:{
      alignItems:'center',
      justifyContent:'center'
    },
    bt:{
      backgroundColor: "#DDDDDD"
    },
    tex:{
      color:'#fff'
    },
    pos:{
      position:'absolute',
      right:deviceWidth-125,
      top:deviceHeight-125,
      backgroundColor:'#fff',
      borderRadius:15,
      width:250,
      opacity:100,
      alignItems:'center',
      justifyContent:'center',
      borderStyle:'solid',
      borderWidth:1,
      borderColor:"#480077",
      padding:10
    },
    inputPromp:{
      backgroundColor:'#eee',
      width:200,
      borderRadius:8,
      paddingVertical:5,
      paddingHorizontal:8,
      fontSize:18,
      marginTop:5
    },
    prompBt:{
      marginTop:10,
      flexDirection:'row',
      justifyContent:'space-between',
      width:150
    },
    scroller:{
      paddingBottom:40
    }
  });

export default styles