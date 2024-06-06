import {Pressable, Text, StyleSheet, View, Image} from 'react-native';

const Button = props => {
  return (
    <Pressable
      style={
        props.fill
          ? {...styles.buttonFill, ...props.style}
          : {...styles.button, ...props.style}
      }
      onPress={() => props.onPress ()}
    >
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        {props.image
          ? <Image style={styles.image} source={props.image} />
          : <View />}
        <Text style={props.fill ? styles.textFill : styles.text}>
          {props.title}
        </Text>
        <View />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create ({
  button: {
    height: 50,
    width: '45%',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    margin: 10,
  },
  buttonFill: {
    height: 50,
    width: '45%',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'black',
    alignSelf: 'center',
    margin: 10,
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  textFill: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    height: 50,
    width: 50,
  },
});

export default Button;
