import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
export default function OtherText (props) {
  return (
    <View>
      <Text style={{...styles.text, ...props.style}} onPress={props.onPress}>
        {props.text}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create ({
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
