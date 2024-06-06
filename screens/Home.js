import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Button, FlatList,Platform} from 'react-native';
import Header from '../components/Header';
//hooks
import {useState, useEffect,useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Card} from '../components';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import axios from 'axios' ;
export default function Home (props) {

  alert('Hellooo World')

  let i = 10;
  console.log ('Parent re rendered');
  //useState hook is used to create a state
  const [count, setCount] = useState (0);
  const [value, setValue] = useState (0);
  const navigation = useNavigation ();
    const [expoPushToken, setExpoPushToken] = useState('');
  const [channels, setChannels] = useState([]);
  const [notification, setNotification] = useState(undefined);
const [weather, setWeather] = useState (null);


  //useEffect is hook
  //it requires 2 parameter
  //1st par is mandatory function
  //2nd parameter is optional array
  useEffect (
    () => {
      console.log ('helloooo');
      console.log ('helloooo2');
    },
    [value]
  );
   const notificationListener = useRef();
  const responseListener = useRef();
 useEffect(() => {
  loadWeatherData()
    registerForPushNotificationsAsync().then(token => token && console.log(token));

    if (Platform.OS === 'android') {
      Notifications.getNotificationChannelsAsync().then(value => setChannels(value ?? []));
    }
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(notificationListener.current);
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);


  const loadWeatherData=async()=>{
    let res=await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=30.0442&lon=72.3441&appid=4251b5f89948a271b3def71083a728f0&units=metric')
    setWeather(res.data)
    console.log(res.data)
  }


  async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    // EAS projectId is used here.
    try {
      const projectId =
        Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
      if (!projectId) {
        throw new Error('Project ID not found');
      }
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
        })
      ).data;
      console.log(token);
    } catch (e) {
      token = `${e}`;
    }
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}
  return (
    <View style={styles.container}>
    {weather?<Text style={{fontWeight:'bold',alignSelf:'flex-end'}}>{`Current tem[er${weather.main.temp}`}</Text>:null}
      <FlatList
        numColumns={2}
        data={[
          {course: 'Javascriot', banner: require ('../assets/learn_js.jpeg')},
          {course: 'Typesript', banner: require ('../assets/learn_js.jpeg')},
          {course: 'Javascriot', banner: require ('../assets/learn_js.jpeg')},
          {course: 'Typesript', banner: require ('../assets/learn_js.jpeg')},
        ]}
        renderItem={({item}) => {
          return <Card course={item.course} banner={item.banner} />;
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontWeight: 'bold',
  },
});
