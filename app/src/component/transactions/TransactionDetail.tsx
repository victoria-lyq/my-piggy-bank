import {
  Box,
  Button,
  VStack,
  HStack,
  Text,
  Divider,
  Icon,
  Modal,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { Transaction } from '../../model/Transaction';
import {
  NavigationProp,
  RouteProp,
  ParamListBase,
} from '@react-navigation/native';
import { useState } from 'react';
import ReceiptInfo from './ReceiptInfo';

interface TransactionDetailPageProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, 'TransactionDetail'> & {
    params: {
      item: Transaction;
    };
  };
}

const TransactionDetail: React.FC<TransactionDetailPageProps> = ({
  navigation,
  route,
}) => {
  const { item: transaction } = route.params;
  const [showModal, setShowModal] = useState(false);

  const displayTotal =
    transaction.amount < 0
      ? `$${Math.abs(transaction.amount).toFixed(2)}`
      : `+$${transaction.amount.toFixed(2)}`;

  if (!transaction) {
    return (
      <Box
        p={4}
        bgColor="white"
        flex={1}
        justifyContent="center"
        alignItems="center"
      >
        <Text>Transaction not found</Text>
      </Box>
    );
  }

  return (
    <Box p={4} bgColor="white" flex={1}>
      {/* Back button */}
      <Button
        position="absolute"
        size={'xs'}
        left={2}
        top={2}
        width={10}
        height={10}
        zIndex={100}
        leftIcon={
          <Icon
            as={MaterialIcons}
            name="arrow-back"
            size="md"
            color="indigo.600"
          />
        }
        onPress={() => navigation.goBack()}
        variant={'ghost'}
        colorScheme={'indigo'}
      />

      {/* Amount and recipient details */}
      <VStack space={2} alignItems="center" mt={3}>
        <Text fontSize="4xl" fontWeight="bold">
          {displayTotal}
        </Text>
        <Text fontSize="md" color={'gray.500'}>
          {transaction.merchant}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {transaction.date.toFormat('M/d/yyyy, h:mm a')}
        </Text>
      </VStack>

      {/* Status section */}
      <Box mt={6} p={4} bgColor="gray.100" borderRadius="md">
        <VStack space={2}>
          <Text fontWeight="bold">Category: {transaction.category}</Text>
          <Text fontWeight="bold">
            Status: {transaction.status || 'Pending'}
          </Text>
          <Text color="gray.500">{transaction.account.name}</Text>

          <Divider mt={2} />
          <HStack justifyContent="space-between">
            <Text fontWeight="bold">Total</Text>
            <Text fontWeight="bold">{displayTotal}</Text>
          </HStack>
        </VStack>
      </Box>

      {/* Action buttons */}
      <VStack mt={4} space={2}>
        <Button
          colorScheme={'indigo'}
          variant="outline"
          onPress={() => {
            setShowModal(true);
          }}
        >
          Link Receipt
        </Button>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
          <ReceiptInfo currentTotal={transaction.amount} />
        </Modal>
      </VStack>

      {/* Transaction ID */}
      <Box mt={4} p={4} bgColor="gray.100" borderRadius="md">
        <Text color="gray.500">Transaction ID</Text>
        <Text>{transaction.originalStatement}</Text>
      </Box>
    </Box>
  );
};

export default TransactionDetail;
