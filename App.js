import React from 'react';
import { StyleSheet, Text, View, Alert, Platform } from 'react-native';
import { Constants, Notifications, Permissions } from 'expo';

import Routes from './app/navigation/index';

async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();

  console.log(token);

  return token;

}


export default class App extends React.Component {

   state = {
    notification: {},
  };

componentDidMount() {
    registerForPushNotificationsAsync().then(token => {

    }).catch(error=>{

    });
     this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

   _handleNotification = (notification) => {
    this.setState({notification: notification});
  };
  render() {
    return (
      <Routes />
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
