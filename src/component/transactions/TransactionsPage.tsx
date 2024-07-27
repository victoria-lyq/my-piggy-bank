import { MaterialIcons } from '@expo/vector-icons';
import { getTransactions, transactionsJson } from '../../model/mock';
import {
  Box,
  Center,
  FlatList,
  HStack,
  Icon,
  Text,
  View,
  VStack,
} from 'native-base';
import { Dimensions, ListRenderItemInfo } from 'react-native';
import { Transaction } from '../../model/Transaction';
import { DateTime } from 'luxon';

export function formatTransactionDate(date: DateTime) {
  const now = DateTime.now();
  const diff = now.diff(date, ['days', 'hours', 'minutes']).toObject();

  if (diff.days < 1) {
    if (diff.hours < 1) {
      return `${Math.round(diff.minutes)} minutes ago`;
    }
    return `${Math.round(diff.hours)} hours ago`;
  } else if (diff.days < 7) {
    return date.toFormat('cccc'); // Day of the week (e.g., Monday)
  } else {
    return date.toFormat('MM/dd/yyyy');
  }
}

export function TransactionsPage() {
  const mockTransactions = getTransactions(transactionsJson);
  console.log(mockTransactions);
  const windowWidth = Dimensions.get('window').width;
  return (
    <Box>
      <FlatList
        contentContainerStyle={{ minHeight: `100%` }}
        scrollEnabled={true}
        data={mockTransactions}
        ListFooterComponent={<View style={{ height: 180 }} />}
        renderItem={(info: ListRenderItemInfo<Transaction>) => (
          <HStack
            justifyContent={'space-between'}
            alignItems={'center'}
            justifyItems={'center'}
            p={3}
            borderBottomWidth={1}
            borderColor={'gray.200'}
            width={windowWidth * 0.95}
            alignSelf={'center'}
          >
            <VStack space={2}>
              <Text
                fontWeight={'bold'}
                fontSize={'md'}
                numberOfLines={1}
                ellipsizeMode={'tail'}
                width={windowWidth * 0.6} // Adjust this width as needed
              >
                {info.item.merchant}
              </Text>
              <Text fontSize={'xs'} color={'gray.500'}>
                {formatTransactionDate(info.item.date as DateTime)}
              </Text>
            </VStack>
            <HStack alignSelf="center" alignItems="center" space={3}>
              <Text
                color={info.item.type === 'Charge' ? 'rose.600' : 'lime.600'}
                fontWeight="semibold"
                fontSize="md"
              >
                {info.item.type === 'Charge'
                  ? '-' + '$' + Math.abs(info.item.amount).toFixed(2)
                  : '+' + '$' + info.item.amount.toFixed(2)}
              </Text>
              <Icon
                as={MaterialIcons}
                name="keyboard-arrow-right"
                size="md"
                color={'gray.300'}
              />
            </HStack>
          </HStack>
        )}
      ></FlatList>
    </Box>
  );
}
