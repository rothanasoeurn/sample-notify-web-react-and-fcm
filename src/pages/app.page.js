import React, { memo } from 'react';
import { observer } from 'mobx-react-lite';
import useStore from '../store';

const AppPage = () => {
  const { userStore } = useStore();

  return (
    <div className='content'>
      <div className='center'>Username: {userStore.user.username}</div>
    </div>
  );
};

export default memo(observer(AppPage));
