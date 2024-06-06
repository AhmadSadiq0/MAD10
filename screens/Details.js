import {View, Text} from 'react-native';
import {getAuth} from 'firebase/auth';
import {getFirestore, getDoc, doc} from 'firebase/firestore';
import app from '../firebase';
import {useEffect, useState} from 'react';
function DetailsScreen (props) {
  const db = getFirestore (app);
  const auth = getAuth ();

  const [profileData, setProfileData] = useState ();
  alert (auth.currentUser.email);

  const loadProfile = async () => {
    let profile = await getDoc (doc (db, 'Users', auth.currentUser.email));
    if (profile.exists ()) {
      console.log (profile.data ());
      setProfileData (profile.data ());
    }
  };

  useEffect (() => {
    loadProfile ();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {profileData
        ? <View>
            <Text>{`Address :${profileData.address}`}</Text>
            <Text>{`Email :${profileData.email}`}</Text>
            <Text>{`FirstName :${profileData.firstName}`}</Text>
            <Text>{`LastName :${profileData.lastName}`}</Text>
          </View>
        : null}
    </View>
  );
}

export default DetailsScreen;
