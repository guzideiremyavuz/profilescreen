import { 
StyleSheet, 
Text, 
View,
TextInput,
Image
} from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native';



const Profile_Page = () => {

  const [name, setName] = useState("")
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)

  const showDatepicker = () => {
    setShow(true);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate); 
  };
  
  

  return (
    <View style={styles.container}>

      <Image source={require('../assets/profile.png')}
        style={styles.Image}/>

        <Text>Name</Text>
        <TextInput
        style={styles.textInputStyle}
        placeholder='Enter your name'
        onChangeText={(value)=>setName(value)}/>


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

     <Button onPress={showDatepicker} title="Select Date of Birth" />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
          maximumDate={new Date()}
        />
      )}

    </View>
  )
}

export default Profile_Page


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  Image:{
      width:60,
      height:60,
      marginVertical:10
  },
  textInputStyle:{
      borderWidth:1,
      width:'80%',
      height:30,
      borderRadius:10,
      marginVertical:10,
      textAlign:'center'
  },

})