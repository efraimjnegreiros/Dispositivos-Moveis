import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Input, Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function Login() {
  return (
    <View style={styles.container}>
      <Avatar
        size="xlarge"
        rounded
        title="EN"
        source={{
          uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
      />
      <Text style={styles.label}>Email</Text>
      <Input
        placeholder="Digite o seu email..."
        keyboardType="email-address"
        leftIcon={<Icon name="chevron-left" size={20} color="gray" />}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />
      <Text style={styles.label}>Senha</Text>
      <Input
        placeholder="Digite a sua senha..."
        secureTextEntry={true}
        leftIcon={<Icon name="chevron-left" size={20} color="gray" />}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />
      <Button
        title="Logar"
        buttonStyle={styles.botao}
        titleStyle={{ color: 'white' }}
      />
      <Button
        title="Cadastrar-se"
        buttonStyle={styles.botao}
        titleStyle={{ color: 'white' }}
      />
      <Text>Esqueceu a senha?</Text>
      <StatusBar style="auto" />
    </View>
  );
}
 export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Header
      centerComponent={{ text: 'Cadastro', style: { color: '#fff' } }}
    />
      <Text style={styles.label}>Nome</Text>
      <Input
        placeholder="Digite o seu email..."
        keyboardType="email-address"
        leftIcon={<Icon name="chevron-left" size={20} color="gray" />}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />
      <Text style={styles.label}>Email</Text>
      <Input
        placeholder="Digite o seu email..."
        keyboardType="email-address"
        leftIcon={<Icon name="chevron-left" size={20} color="gray" />}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />
      <Text style={styles.label}>Senha</Text>
      <Input
        placeholder="Digite a sua senha..."
        secureTextEntry={true}
        leftIcon={<Icon name="chevron-left" size={20} color="gray" />}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />
      <Button
        title="Cadastrar"
        buttonStyle={styles.botao}
        titleStyle={{ color: 'white' }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, 
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color: 'gray',
  },
  
  input: {
    height: 50,
    paddingHorizontal: 10,
  },
  botao: {
    width: 200,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 5,
    marginBottom: 10,
  },
});
