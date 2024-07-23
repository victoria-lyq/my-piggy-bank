import AssetsComponent from './AssetsComponent';
import { mockAssets } from '../model/mock';
import { ScrollView } from 'native-base';
import { HeaderComponent } from './HeaderComponent';
import { LineGraphComponent } from './LineGraphComponent';
import { SafeAreaView } from 'react-native';
import { Fragment } from 'react';

export function HomePage() {
    return (
        <Fragment>
            <SafeAreaView style={{ flex: 0, backgroundColor: '#c7d2fe' }} />
            {/* <SafeAreaView style={{ flex: 1 }}> */}
            <HeaderComponent />
            <ScrollView height={'full'}>
                <LineGraphComponent />
                <AssetsComponent assets={mockAssets} />
            </ScrollView>
            {/* </SafeAreaView> */}
        </Fragment>
    );
}
