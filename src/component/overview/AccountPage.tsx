import AssetsComponent from './AssetsComponent';
import { mockAssets } from '../../model/mock';
import { ScrollView } from 'native-base';
import { HeaderComponent } from './HeaderComponent';
import { LineGraphComponent } from './LineGraphComponent';
import { Fragment } from 'react';
import { RefreshComponent } from '../RefreshComponent';

const AccountPage: React.FC = () => {
  return (
    <Fragment>
      <HeaderComponent />
      <ScrollView height={'full'} background={'white'}>
        <RefreshComponent />
        <LineGraphComponent />
        <AssetsComponent assets={mockAssets} />
      </ScrollView>
    </Fragment>
  );
};

export default AccountPage;
