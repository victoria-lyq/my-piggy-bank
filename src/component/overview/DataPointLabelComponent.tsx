import { Container, Text } from 'native-base';
import { Pointer } from 'react-native-gifted-charts/dist/Components/common/Pointer';

export function DataPointLabelComponent(props: { label: string }) {
  return (
    <Pointer
      showPointerStrip
      pointerLabelComponent={<DataPointLabel label={props.label} />}
    />
  );
}

function DataPointLabel(props: { label: string }) {
  return (
    <Container width={5} height={5} bg="indigo.400">
      <Text>{props.label}</Text>
    </Container>
  );
}
