import {View, Text, StyleSheet} from 'react-native';
import {Button, PrimaryText, SecondaryText, Input} from '../components';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {useState} from 'react';
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
} from 'firebase/firestore';
import app from '../firebase';

const Signup = props => {
  const db = getFirestore (db);
  const auth = getAuth ();
  const [email, setEmail] = useState ();
  const [password, setPassword] = useState ();
  const [firstName, setFirstName] = useState ();
  const [lastName, setLastName] = useState ();
  const [address, setAddress] = useState ();

  const onSignupPressed = async () => {
    //store data in db
    const docRef = await setDoc (doc (db, 'Users', email), {
      firstName,
      lastName,
      address,
      email,
    });

    //auth
    createUserWithEmailAndPassword (auth, email, password)
      .then (userCredential => {
        // Signed up
        const user = userCredential.user;
        alert ('User created!');
        // ...
      })
      .catch (error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert (errorMessage);
        // ..
      });
  };
  return (
    <View style={styles.container}>
      <PrimaryText style={{fontSize: 30}} text={'Sign Up'} />
      <SecondaryText text={'Please Sign up with your email and password'} />
      <Input onChangeText={t => setEmail (t)} inputName={'Email Here'} />
      <Input
        secure={true}
        onChangeText={t => setPassword (t)}
        inputName={'Password'}
      />
      <Input onChangeText={t => setFirstName (t)} inputName={'First Name'} />

      <Input onChangeText={t => setLastName (t)} inputName={'Last Name'} />

      <Input onChangeText={t => setAddress (t)} inputName={'Address'} />

      <Button
        onPress={() => onSignupPressed ()}
        fill={true}
        title={'SIGN UP'}
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

export default Signup;
