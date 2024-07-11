import { Asset } from "../model/Asset";
import { HStack, VStack, Text, Center } from 'native-base';

export function AssetComponent(asset: Asset) {
    return (
      <Center w="full" h="20" bg="violet.200" rounded="sm" shadow={3} key={asset.name}>
        <HStack w="full" alignContent={"space-between"} justifyContent={"space-between"} paddingX={8}>
          <Text fontSize="14" fontWeight="bold">{asset.name}</Text>
          <Text fontSize="14">{asset.value}</Text>
        </HStack>
      </Center>
    );
}

interface AssetsComponentProps {
  assets: Asset[];
}

export default function AssetsComponent({ assets }: AssetsComponentProps) {
  return(
    <Center w="full" h="full" paddingX={5} >
      <VStack space={2} justifyContent={"center"} paddingY={10}>
        {assets.map((asset) => AssetComponent(asset))}
      </VStack>
    </Center>
  )
}

