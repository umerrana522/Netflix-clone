import React from 'react';
import { SafeAreaView, View, Image, StyleSheet, Text } from 'react-native';
import {useEffect} from 'react';




const NewSapScreen=() => {



//    function moveToUserScreen(){
//     navigation.navigate('UserSelectionScreen');
//     console.log("moveToUserScreen is Called");
//    }

//    useEffect( ()=> {
//     console.log('effect is called');
//     setTimeout(moveToUserScreen, 3000);
//    }

//    )
   
    return (
       <SafeAreaView style={styles.container}>
        <View>
        <Image source ={require('../assets/logos_netflix.png')}/>


        </View>

       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        justifyContent:'center',
        alignItems:'center',
        height:"100%",
        width:"100%",

    }
})

export default NewSapScreen;