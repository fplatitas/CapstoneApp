import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/fonts/icon.png')}
        style={styles.image}
      />
      <Text style={styles.title}>USER LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder="enter your email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="enter your password"
        secureTextEntry
      />
      <View style={styles.rememberContainer}>
        <Text style={styles.rememberText}>Remember me</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Forgotten your username or password?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  rememberContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '80%',
    marginVertical: 10,
  },
  rememberText: {
    fontSize: 14,
  },
  button: {
    backgroundColor: '#FFCC00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 20,
    color: '#666',
  },
});

export default LoginScreen;