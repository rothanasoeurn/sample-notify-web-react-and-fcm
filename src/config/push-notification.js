import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const config = {
  apiKey: 'AIzaSyCD9FFCULgzNQa5I-tcgLryQTDrhzotugc',
  authDomain: 'test-my-app-565c6.firebaseapp.com',
  projectId: 'test-my-app-565c6',
  storageBucket: 'test-my-app-565c6.appspot.com',
  messagingSenderId: '662313829902',
  appId: '1:662313829902:web:7a98328290accb78729f30',
  measurementId: 'G-YMEJ241BEN',
};

const VAPID_KEY =
  'BJRJjBpM16BGvnxAf0LzzjC2PirWP38r20KPo6OxHNPxDsPcGIIXz2UyKt3swUnROWg9ymXfiSt3EnFRXtooghT';

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
