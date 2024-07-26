import { Fragment, ReactElement } from 'react';
import { getTransactions, transactionsJson } from '../../model/mock';
import { Box, FlatList, HStack, Text, VStack } from 'native-base';
import { ListRenderItemInfo } from 'react-native';
import { Transaction } from '../../model/Transaction';

export function TransactionsPage() {
  const mockTransactions = getTransactions(transactionsJson);
  console.log(mockTransactions);
  return (
    <Box>
      <FlatList
        data={mockTransactions}
        renderItem={(info: ListRenderItemInfo<Transaction>) => (
          <Fragment>
            <HStack
              h={12}
              borderBottomColor={'gray.300'}
              borderBottomWidth={1}
              justifyContent={'space-between'}
              alignItems={'center'}
              p={2}
            >
              <VStack>
                <Text fontWeight={'bold'}>{info.item.merchant}</Text>
                <Text>{info.item.date.getDate()}</Text>
              </VStack>

              <Text>{info.item.amount}</Text>
            </HStack>
          </Fragment>
        )}
      ></FlatList>
    </Box>
  );
}
