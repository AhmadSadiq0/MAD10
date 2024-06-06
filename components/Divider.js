import {StyleSheet, Text, View} from 'react-native';

const Divider = props => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};
const styles = StyleSheet.create ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  text: {
    width: 'auto',
    paddingHorizontal: 5,
  },
});
export default Divider;
