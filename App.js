import { NativeBaseProvider, extendTheme } from 'native-base';
import AccountPage from './src/component/overview/AccountPage';
import { Footer } from './src/component/Footer';
import React, { useState, Fragment } from 'react';
import { SafeAreaView } from 'react-native';
import TransactionsPage from './src/component/transactions/TransactionsPage';
import TransactionDetail from './src/component/transactions/TransactionDetail';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('AccountPage');

  const theme = extendTheme({
    fontConfig: {
      Menlo: {
        100: {
          normal: 'Menlo',
          italic: 'Menlo-Italic',
        },
        200: {
          normal: 'Menlo',
          italic: 'Menlo-Italic',
        },
        300: {
          normal: 'Menlo',
          italic: 'Menlo-Italic',
        },
        400: {
          normal: 'Menlo',
          italic: 'Menlo-Italic',
        },
        500: {
          normal: 'Menlo',
          italic: 'Menlo-Italic',
        },
        600: {
          normal: 'Menlo',
          italic: 'Menlo-Italic',
        },
      },
    },

    // Use the monospace font for all text styles
    fonts: {
      heading: 'Menlo',
      body: 'Menlo',
      mono: 'Menlo',
    },
  });

  const Stack = createStackNavigator();
  const navigationRef = useNavigationContainerRef();

  // const navigationRef = useNavigationContainerRef();
  function navigate(name) {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name);
    } else {
      // You can decide what to do if react navigation is not ready
      // You can ignore this, or add these actions to a queue you can call later
    }
  }
  return (
    <NativeBaseProvider theme={theme}>
      <Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: '#818cf8' }} />
      </Fragment>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => setCurrentRoute(navigationRef.getCurrentRoute().name)}
        onStateChange={() =>
          setCurrentRoute(navigationRef.getCurrentRoute().name)
        }
      >
        <Stack.Navigator
          initialRouteName="AccountPage"
          screenOptions={{ headerShown: false, animationEnabled: false }}
        >
          <Stack.Screen name="AccountPage" component={AccountPage} />
          <Stack.Screen name="TransactionsPage" component={TransactionsPage} />
          <Stack.Screen
            name="TransactionDetail"
            component={TransactionDetail}
          />
        </Stack.Navigator>
        <Footer currentRoute={currentRoute} navigate={navigate} />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
