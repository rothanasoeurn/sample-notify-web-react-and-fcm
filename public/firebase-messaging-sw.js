/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
//version --- 9.00
// importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js");
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js'
);
const config = {
  apiKey: 'AIzaSyCD9FFCULgzNQa5I-tcgLryQTDrhzotugc',
  authDomain: 'test-my-app-565c6.firebaseapp.com',
  projectId: 'test-my-app-565c6',
  storageBucket: 'test-my-app-565c6.appspot.com',
  messagingSenderId: '662313829902',
  appId: '1:662313829902:web:7a98328290accb78729f30',
  measurementId: 'G-YMEJ241BEN',
};

firebase.initializeApp(config);

const isSupported = firebase.messaging.isSupported();
console.log('isSupported: ', isSupported);
if (isSupported) {
  const messaging = firebase.messaging();
  messaging.onBackgroundMessage((payload) => {
    if (payload.notification) {
      console.log('Do not continue to work');
      return;
    }
    console.log('onBackgroundMessage payload: ', payload);
    const notification = payload.data;
    if (!notification) {
      console.warn('Unknown notification on message');
      return;
    }

    const notificationOption = {
      ...notification,
      icon: notification.image || '../public/idol.jpg',
    };

    self.registration.showNotification(notification.title, notificationOption);
  });
} else {
  console.log("Don't have the permission!!!");
}
