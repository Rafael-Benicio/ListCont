import {StyleSheet, Dimensions} from 'react-native'

const deviceWidth = Dimensions.get('window').width/2
const deviceHeight = Dimensions.get('window').height/2


const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:"#480077",
        justifyContent:'space-between',
        padding:20

    },
    btsVision:{
        flexDirection:'row'
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
    corp:{
        height:45,
        padding:5,
        flexDirection:'row',
        backgroundColor:'#7400bb',
        alignItems:'center',
        borderStyle:'solid',
        borderBottomWidth:1,
        borderColor:"#480077"
    },
    btList:{
        color:'#fff',
        fontSize:18,
        marginLeft:60
    },
    corpTrash:{
        marginLeft:15
    }
})

export default styles
