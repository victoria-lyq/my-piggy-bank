import { NativeBaseProvider, extendTheme } from 'native-base';
import { AccountPage } from './src/component/overview/AccountPage';
import { Footer } from './src/component/Footer';
import React, { useState, Fragment } from 'react';
import { SafeAreaView } from 'react-native';
import { TransactionsPage } from './src/component/transactions/TransactionsPage';
export default function App() {
  const [selectedPage, setSelectedPage] = useState(0);

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

  return (
    <NativeBaseProvider theme={theme}>
      <Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: '#818cf8' }} />
      </Fragment>
      {selectedPage === 0 && <AccountPage />}
      {selectedPage === 1 && <TransactionsPage />}
      <Footer selected={selectedPage} setSelected={setSelectedPage} />
    </NativeBaseProvider>
  );
}
