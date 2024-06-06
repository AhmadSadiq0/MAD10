import {View, Text, StyleSheet} from 'react-native';
import {Button, PrimaryText, SecondaryText, Input} from '../components';
import {getAuth, sendPasswordResetEmail} from 'firebase/auth';
import {useState} from 'react';
const Forget = props => {
  const [email, setEmail] = useState (null);
  const auth = getAuth ();
  const onRestorePressed = async () => {
    sendPasswordResetEmail (auth, email)
      .then (() => {
        alert ('A restore password email sent!');
      })
      .catch (error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert (errorMessage);
      });
  };
  return (
    <View style={styles.container}>
      <PrimaryText style={{fontSize: 30}} text={'Forget'} />
      <SecondaryText text={'Enter your email to restore password!'} />
      <Input onChangeText={t => setEmail (t)} inputName={'Email Here'} />
      <Button
        fill={true}
        title={'Restore'}
        onPress={() => onRestorePressed ()}
      />
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Forget;
