import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
    SafeAreaView,
    Text,
    StyleSheet,
    ImageBackground,
    StatusBar
} from 'react-native'

const City = () =>{
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground
             source={require('../../assets/city-background.jpg')}
             style={styles.imageLayout}
             >
                <Text style={[styles.cityText,styles.cityName]}>London</Text>
                <Text style={[styles.cityText,styles.countryName]}>UK</Text>
             </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0
    },
    imageLayout:{
        flex:1
    },
    cityName:{

        fontSize:40,

    },
    countryName:{
        fontSize:30,
    },
    cityText:{
        justifyContent:'center',
        alignSelf:'center',
        color:'white',
        fontWeight:'bold'
    }
})
export default City