import { NativeBaseProvider } from 'native-base';
import { AccountPage } from './src/component/overview/AccountPage';
import { Footer } from './src/component/Footer';
import React, { useState, Fragment } from 'react';
import { SafeAreaView } from 'react-native';
import { TransactionsPage } from './src/component/transactions/TransactionsPage';
export default function App() {
    const [selectedPage, setSelectedPage] = useState(1);
    return (
        <NativeBaseProvider>
            <Fragment>
                <SafeAreaView style={{ flex: 0, backgroundColor: '#818cf8' }} />
            </Fragment>
            {selectedPage === 0 && <AccountPage />}
            {selectedPage === 1 && <TransactionsPage />}
            <Footer selected={selectedPage} setSelected={setSelectedPage} />
        </NativeBaseProvider>
    );
}
