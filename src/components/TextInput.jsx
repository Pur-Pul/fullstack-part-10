import React from "react";
import { TextInput as NativeTextInput, Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  input: {
    height: 50,
    margin: 15,
    marginBottom: 0,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10
  },
  button: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 50,
    margin: 15,
    borderRadius: 4,
    padding: 10
  }
});

const TextInput = ({ error, style, ...props }) => {
    const inputStyle = [styles.input, error && { borderColor: "red" }]
    return (
    <View>
      <NativeTextInput style={inputStyle} {...props} />
      <Text style={{ marginLeft: 15, color: 'red' }}>{error}</Text>
    </View>
  )
};
export default TextInput;
