import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const config = {
  apiKey: 'AIzaSyCD9FFCULgzNQa5I-tcgLryQTDrhzoC2Ww',
  authDomain: 'sabay-app-565c6.firebaseapp.com',
  projectId: 'sabay-app-565c6',
  storageBucket: 'sabay-app-565c6.appspot.com',
  messagingSenderId: '662313829722',
  appId: '1:662313829722:web:7a98328290accb78729f63',
  measurementId: 'G-YMEJ241BXW',
};

const VAPID_KEY =
  'BJRJjBpM16BGvnxAf0LzzjC2PirWP38r20KPo6OxHNPxDsPcGIIXz2UyKt3swUnROWg9ymXfiSt3EnFRXtooW9g';

const app = initializeApp(config);
const messaging = getMessaging(app);
let fcmToken;
// const topic = 'matchday';

export const requestFirebaseNotificationPermission = async () => {
  fcmToken = await getToken(messaging, { vapidKey: VAPID_KEY });
  if (fcmToken) {
    return fcmToken;
  } else {
    console.log('error to get firebaseToken');
  }
};

onMessage(messaging, (payload) => {
  console.log('foreground message: ', payload);

  let notificationObject = {};
  notificationObject = payload.data;

  if (payload.notification) {
    const notificationOption = payload.notification;
    notificationObject = { ...notificationOption };
  }
  alert(notificationObject.title);
});
