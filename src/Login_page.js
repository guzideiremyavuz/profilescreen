import { 
    StyleSheet,
    Text, 
    View,
    Pressable,
    Image,
    TextInput
} from 'react-native'

import React, { useState } from 'react'

const Login_page = ({navigation}) => {

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState()

  return (

    <View style={styles.container}>

        <Image source={require('../assets/login_icon.png')}
        style={styles.Image}/>

        <Text style={styles.welcome}>Welcome</Text>

        <Text>E-mail</Text>
        <TextInput
        style={styles.textInputStyle}
        placeholder='Enter your e-mail'
        inputMode='email'
        onChangeText={(value)=>setMail(value)}
        />

        <Text>Password</Text>
        <TextInput 
        style={styles.textInputStyle}
        placeholder='Enter your password'
        inputMode='email'            
        onChangeText={(value)=>setPassword(value)}
        />

      <Pressable 
        onPress={()=> navigation.navigate('Profile')}
        style ={ ({pressed}) => [{
          backgroundColor:pressed? "gray": 'lightblue',
          marginTop:50
        },styles.signUpbutton]}>

        <Text style={styles.buttonText}>Sign Up</Text>

      </Pressable>
    </View>


  )
}

export default Login_page

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome:{
        fontWeight:'bold',
        fontSize:25,
        marginVertical:5
    },
    Image:{
        width:100,
        height:100,
        marginVertical:10
    },
    textInputStyle:{
        borderWidth:1,
        width:'80%',
        height:50,
        borderRadius:10,
        marginVertical:20,
        textAlign:'center'
    },
    signUpbutton:{
        borderWidth:0,
        width:"30%",
        height:50,
        borderRadius:15,
        alignItems: 'center',
        justifyContent:'center'
    },
    buttonText:{
        fontWeight:'bold',
        color:'white'
    }

    


})