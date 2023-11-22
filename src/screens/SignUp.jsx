import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Sign from '../assets/svg/sign_up.svg'
import Input from '../components/Input'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import PressableButton from '../components/PressableButton'

const SignUp = () => {

  const {navigate} = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSignUp = async() =>{
   
  }

  return (
    <View style={styles.container}>
      <Sign
        height={220}
        width={220}
        style={{alignSelf:'center'}}
      />
      <Input label="Username" value={username} placeholder='enter your username' onChangeText={(val)=>setUsername(val)}/>
      <Input value={email} label="E-mail" placeholder='enter your e-mail' onChangeText={(val)=>setEmail(val)}/>
      <Input label="Password" value={senha} placeholder='enter your password' onChangeText={(val)=>setSenha(val)}/>
      <Button title='SignUp' onPress={()=>handleSignUp()}/>
      <PressableButton label='Already have an account? Click here' onPress={()=>navigate('Login')}/>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    paddingHorizontal:24,
    backgroundColor:'#fff'
  }
})