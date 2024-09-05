import { HStack, Modal, VStack, Text, Button, Input } from 'native-base';
import { useState } from 'react';

interface ReceiptInfoProps {
  currentTotal: number;
}

const ReceiptInfo: React.FC<ReceiptInfoProps> = ({ currentTotal }) => {
  const [tip, setTip] = useState<string>('');

  return (
    <Modal.Content maxWidth="350">
      <Modal.Body>
        <VStack space={3}>
          <HStack alignItems="center" justifyContent="space-between">
            <Text fontWeight="medium">Sub Total</Text>
            <Text color="blueGray.400">{Math.abs(currentTotal)}</Text>
          </HStack>
          <HStack alignItems="center" justifyContent="space-between">
            <Text fontWeight="medium">Tip and fees</Text>
            <Input
              keyboardType="decimal-pad"
              size="sm"
              variant="rounded"
              width={'25%'}
              placeholder="0.00"
              placeholderTextColor="blueGray.400"
              value={tip}
              onChangeText={(e) => {
                const value = e.replace(/[^0-9.]/g, '');
                const [integer, decimal] = value.split('.');
                if (decimal && decimal.length > 2) {
                  return;
                }
                setTip(value);
              }}
              style={{
                textAlign: 'right',
              }}
              _focus={{ borderColor: 'indigo.400', bg: 'indigo.100' }}
            />
          </HStack>
          <HStack alignItems="center" justifyContent="space-between">
            <Text fontWeight="medium">Total Amount</Text>
            <Text color="indigo.500">
              {Math.abs(currentTotal) + parseFloat(tip || '0')}
            </Text>
          </HStack>
        </VStack>
      </Modal.Body>
      <Modal.Footer>
        <Button colorScheme="indigo" flex="1" onPress={() => {}}>
          Save
        </Button>
      </Modal.Footer>
    </Modal.Content>
  );
};

export default ReceiptInfo;
