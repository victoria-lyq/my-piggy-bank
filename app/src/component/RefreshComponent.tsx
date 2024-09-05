import { View } from 'native-base';
import { Dimensions } from 'react-native';

export function RefreshComponent() {
    const screenHeight = Dimensions.get('window').height;
    return (
        <View
            background={'indigo.400'}
            h={screenHeight}
            position={'absolute'}
            top={-screenHeight}
            left={0}
            right={0}
        ></View>
    );
}
