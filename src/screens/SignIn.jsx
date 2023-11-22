import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Input from "../components/Input";
import Logo from '../assets/svg/sign_up.svg';
import Button from "../components/Button";
import { Link, useNavigation } from "@react-navigation/native";
import PressableButton from "../components/PressableButton";

export default function SignIn() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
   
  };


  const {navigate} = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Logo height={220} width={220} style={{ alignSelf: "center" }} />

        <View>
          <Input placeholder="Enter your e-mail" value={email} label="E-mail"  onChangeText={(val)=>setEmail(val)}/>
          <Input placeholder="Enter your Password" value={senha} password label="Password" onChangeText={(val)=>setSenha(val)}/>
          <Button title="Login" onPress={()=>handleLogin()}/>
        </View>
          <PressableButton label="Don't have an account yet? Click here" onPress={()=>navigate('SignUp')}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  }
});
