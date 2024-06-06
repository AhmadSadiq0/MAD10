import {Text, StyleSheet} from 'react-native';

const PrimaryText = props => {
  return (
    <Text
      style={{
        ...styles.text,
        ...props.style,
      }}
    >
      {props.text}
    </Text>
  );
};

const styles = StyleSheet.create ({
  text: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
export default PrimaryText;
