import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import OtherText from './OtherText';
export default function Card (props) {
  return (
    <View style={styles.container}>
      <Image
        style={{height: '50%', width: '100%'}}
        resizeMode={'contain'}
        source={props.banner}
      />

      <View style={styles.row}>
        <OtherText
          text={props.course}
          style={{fontSize: 12, marginHorizontal: 0, marginRight: 10}}
        />

        <Image source={require ('../assets/Stars.png')} />
      </View>
      <OtherText text={props.by} style={{fontSize: 10, color: 'grey'}} />
      <Image source={require ('../assets/Bar.png')} style={{width: '70%'}} />
    </View>
  );
}
const styles = StyleSheet.create ({
  container: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  card: {
    backgroundColor: 'white',
    width: '90%',
    height: '70%',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    elevation: 10,
  },
  row: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
