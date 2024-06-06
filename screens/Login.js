import {View, Text, StyleSheet, Pressable} from 'react-native';
import {
  Button,
  PrimaryText,
  SecondaryText,
  Input,
  Divider,
} from '../components';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = props => {
  const auth = getAuth ();
  const [email, setEmail] = useState ();
  const [password, setPassword] = useState ();

  const _storeUserCredentials = async () => {
    try {
      await AsyncStorage.setItem ('email', email);
      await AsyncStorage.setItem ('password', password);
    } catch (e) {
      console.log (e);
    }
  };
  const _getUserCredentials = async () => {
    try {
      let email = await AsyncStorage.getItem ('email');
      let password = await AsyncStorage.getItem ('password');
      return {email, password};
    } catch (e) {
      console.log (e);
    }
  };

  useEffect (async () => {
    const credetials = await _getUserCredentials ();
    setEmail (credetials.email);
    setPassword (credetials.password);
  }, []);

  const onSignInPressed = () => {
    if (email && password) {
      signInWithEmailAndPassword (auth, email, password)
        .then (async userCredential => {
          // Signed in
          const user = userCredential.user;
          props.navigation.navigate ('Home');
          await _storeUserCredentials ();
          // ...
        })
        .catch (error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert (errorMessage);
        });
    } else {
      alert ('Kindly enter email and password!');
    }
  };
  const onForgetPressed = () => {
    props.navigation.navigate ('Forget');
  };
  return (
    <View style={styles.container}>
      <PrimaryText style={{fontSize: 30}} text={'Sign in'} />
      <SecondaryText text={'Please Sign in with your account'} />
      <Input
        value={email}
        onChangeText={t => setEmail (t)}
        inputName={'Email Here'}
      />
      <Input
        value={password}
        secure={true}
        onChangeText={t => setPassword (t)}
        inputName={'Password'}
      />

      <Button
        fill={true}
        title={'SIGN IN'}
        onPress={() => onSignInPressed ()}
      />
      <Pressable
        style={styles.forgetPassword}
        onPress={() => onForgetPressed ()}
      >
        <Text>Forget Password?</Text>
      </Pressable>
      <Divider text={'Or Sign in with'} />
      <Button
        style={styles.fullWidthButton}
        fill={true}
        image={require ('../assets/fb_icon.png')}
        title={'SIGN IN WITH FACEBOOK'}
      />
      <Button
        image={require ('../assets/google_icon.png')}
        style={styles.fullWidthButton}
        title={'SIGN IN WITH GMAIL'}
      />

    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  fullWidthButton: {
    width: '80%',
  },
  forgetPassword: {
    alignSelf: 'flex-end',
  },
});

export default Login;
