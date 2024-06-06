import {View, Text, StyleSheet} from 'react-native';
import {Button, PrimaryText, SecondaryText} from '../components';

const Landing = props => {
  return (
    <View style={styles.container}>
      <PrimaryText text={'JoiN IT Group to Kick Start Your Lesson'} />
      <SecondaryText text={'Join and Learn from our Top Instructors!'} />
      <View style={styles.row}>
        <Button
          title="Sign In"
          onPress={() => props.navigation.navigate ('Login')}
        />
        <Button
          fill={true}
          title="Sign Up"
          onPress={() => props.navigation.navigate ('Signup')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Landing;
