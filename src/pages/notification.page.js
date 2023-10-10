import React, { useEffect, useState } from 'react';
import { requestFirebaseNotificationPermission } from '../config/push-notification';

const NotificationPage = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    requestFirebaseNotificationPermission().then((fcmToken) => {
      setToken(fcmToken);
    });
  }, []);

  return (
    <div className='content'>
      <div className='center'>
        <h1>Notification Page</h1>
      </div>
      <div className='center'>
        <p style={{ width: '100%', border: '1px solid', padding: 20 }}>
          {token ?? ''}
        </p>
      </div>
    </div>
  );
};

export default NotificationPage;
