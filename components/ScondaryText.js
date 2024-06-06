import {Text, StyleSheet} from 'react-native';

const SecondaryText = props => {
  return <Text style={styles.text}>{props.text}</Text>;
};

const styles = StyleSheet.create ({
  text: {
    fontSize: 15,
    alignSelf: 'center',
  },
});
export default SecondaryText;
