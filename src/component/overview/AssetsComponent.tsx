import { Asset } from '../../model/Asset';
import { HStack, VStack, Text, Center } from 'native-base';

export function AssetComponent(asset: Asset) {
    return (
        <Center
            w="full"
            h="20"
            rounded="sm"
            key={asset.name}
            borderBottomWidth={0.5}
            borderBottomColor={'blueGray.200'}
        >
            <HStack
                w="full"
                alignContent={'space-between'}
                justifyContent={'space-between'}
                paddingX={5}
            >
                <Text fontSize="14" fontWeight="bold" color="indigo.600">
                    {asset.name}
                </Text>
                <Text fontSize="14" color="blueGray.500">
                    {asset.value}
                </Text>
            </HStack>
        </Center>
    );
}

interface AssetsComponentProps {
    assets: Asset[];
}

export default function AssetsComponent({ assets }: AssetsComponentProps) {
    return (
        <Center w="full" paddingX={5} background={'white'}>
            <VStack space={2} justifyContent={'center'} paddingY={10}>
                {assets.map((asset) => AssetComponent(asset))}
            </VStack>
        </Center>
    );
}
