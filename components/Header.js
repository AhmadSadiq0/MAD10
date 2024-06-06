//custom component
import {View, Text, StyleSheet, Button} from 'react-native';
import {useState} from 'react';
const Header = props => {
  const [childState, setChildState] = useState (0);

  console.log ('Child re render');
  return (
    <View>
      <Text style={styles.text}>{'child State' + childState}</Text>
      <Button
        title="Change State"
        onPress={() => setChildState (childState + 1)}
      />

    </View>
  );
};
const styles = StyleSheet.create ({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default Header;
