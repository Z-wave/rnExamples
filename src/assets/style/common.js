import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    flex:{
        flex: 1,
        flexDirection: 'row',
    },
    flexCenter:{
        justifyContent:'center'
    },
    textRight:{
        textAlign: 'left'
    },
    white:{
        color:'white'
    },
    itemWrap:{
        padding:5,
        backgroundColor:'#fff'
    },
    itemPic:{
        width:60,
        height:60,
        borderRadius:100
    },
    itemLine:{
        height:1,
        backgroundColor:'#efefef'
    },
    itemRight:{
        marginLeft:10,
        flex:2
    },
    itemCount:{
        justifyContent:'space-between',
        marginTop:10,
        alignItems:'flex-end'
    },
    navWrap:{
        backgroundColor:'#00acb0'
    },
    nav:{
        padding:15
    },
    active:{
        backgroundColor:'#38d8dc'
    }
    
})