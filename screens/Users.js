import {View, Text, FlatList} from 'react-native';
import {getAuth} from 'firebase/auth';
import {
  getFirestore,
  getDocs,
  collection,
  query,
  onSnapshot,
} from 'firebase/firestore';
import app from '../firebase';
import {useEffect, useState} from 'react';
function UsersScreen (props) {
  const db = getFirestore (app);
  const auth = getAuth ();
  const [users, setUsers] = useState ([]);

  const [profileData, setProfileData] = useState ();

  const loadUsers = async () => {
    //For one time fetching of data
    // const querySnapshot = await getDocs (collection (db, 'Users'));
    // querySnapshot.forEach (doc => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log (doc.id, ' => ', doc.data ());
    //   u.push (doc.data ());
    // });
    // setUsers (u);

    //For real time fetching of data
    const q = query (collection (db, 'Users'));
    const unsubscribe = onSnapshot (q, querySnapshot => {
      let u = [];
      querySnapshot.forEach (doc => {
        u.push (doc.data ());
      });
      console.log (u);
      setUsers (u);
    });
    return unsubscribe;
  };

  useEffect (() => {
    //mount
    let unsub = loadUsers ();
    //component un mount
    return () => unsub ();
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        data={users}
        renderItem={({item}) => {
          return (
            <View
              style={{
                height: 40,
                margin: 10,
                backgroundColor: '#d3d3d3',
                justifyContent: 'center',
              }}
            >
              <Text>{item.firstName}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />

    </View>
  );
}

export default UsersScreen;
