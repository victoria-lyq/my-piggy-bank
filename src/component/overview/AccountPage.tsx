import AssetsComponent from './AssetsComponent';
import { mockAssets } from '../../model/mock';
import { ScrollView, View } from 'native-base';
import { HeaderComponent } from './HeaderComponent';
import { LineGraphComponent } from './LineGraphComponent';
import { SafeAreaView } from 'react-native';
import { Fragment } from 'react';
import { RefreshComponent } from '../RefreshComponent';

export function AccountPage() {
    return (
        <Fragment>
            <HeaderComponent />
            <ScrollView height={'full'}>
                <RefreshComponent />
                <LineGraphComponent />
                <AssetsComponent assets={mockAssets} />
            </ScrollView>
        </Fragment>
    );
}
