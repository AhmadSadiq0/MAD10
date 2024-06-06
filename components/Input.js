import * as React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
const Input = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputText}>{props.inputName}</Text>
      <TextInput
        value={props.value}
        onChangeText={t => props.onChangeText (t)}
        style={styles.input}
        secureTextEntry={props.secure}
      />
    </View>
  );
};
const styles = StyleSheet.create ({
  inputText: {
    fontSize: 16,
    paddingLeft: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    borderRadius: 10,
    height: 40,
    backgroundColor: 'white',
  },
  inputText: {
    marginLeft: 5,
    marginBottom: 5,
  },
  container: {
    margin: 10,
  },
});
export default Input;
