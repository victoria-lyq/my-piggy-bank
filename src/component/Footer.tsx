import { Center, HStack, Icon, Pressable, Text } from 'native-base';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

interface FooterProps {
  currentRoute: any;
  navigate: (pageName: string) => void;
}

export function Footer(props: FooterProps) {
  return (
    <HStack
      bg="white"
      alignItems="center"
      safeAreaBottom
      shadow={6}
      pt="3"
      position={'absolute'}
      bottom={0}
    >
      <Pressable
        opacity={props.currentRoute === 'AccountPage' ? 1 : 0.5}
        flex={1}
        onPress={() => props.navigate('AccountPage')}
      >
        <Center>
          <Icon
            mb="1"
            as={MaterialIcons}
            name="account-balance"
            color={
              props.currentRoute === 'AccountPage'
                ? 'indigo.600'
                : 'trueGray.600'
            }
            size="md"
          />
          <Text
            color={
              props.currentRoute === 'AccountPage'
                ? 'indigo.600'
                : 'trueGray.600'
            }
            fontSize="12"
            bold
          >
            Overview
          </Text>
        </Center>
      </Pressable>
      <Pressable
        opacity={props.currentRoute === 'TransactionsPage' ? 1 : 0.5}
        flex={1}
        onPress={() => props.navigate('TransactionsPage')}
      >
        <Center>
          <Icon
            mb="1"
            as={MaterialIcons}
            color={
              props.currentRoute === 'TransactionsPage'
                ? 'indigo.600'
                : 'trueGray.600'
            }
            name="receipt"
            size="md"
          />
          <Text
            color={
              props.currentRoute === 'TransactionsPage'
                ? 'indigo.600'
                : 'trueGray.600'
            }
            fontSize="12"
            bold
          >
            Transactions
          </Text>
        </Center>
      </Pressable>
      <Pressable opacity={false ? 1 : 0.5} flex={1} onPress={() => {}}>
        <Center>
          <Icon
            mb="1"
            as={MaterialIcons}
            name="monetization-on"
            color={false ? 'indigo.600' : 'trueGray.600'}
            size="md"
          />
          <Text
            color={false ? 'indigo.600' : 'trueGray.600'}
            fontSize="12"
            bold
          >
            Budgets
          </Text>
        </Center>
      </Pressable>
      <Pressable opacity={false ? 1 : 0.5} flex={1} onPress={() => {}}>
        <Center>
          <Icon
            mb="1"
            as={MaterialIcons}
            color={false ? 'indigo.600' : 'trueGray.600'}
            name="notifications-none"
            size="md"
          />
          <Text
            color={false ? 'indigo.600' : 'trueGray.600'}
            fontSize="12"
            bold
          >
            Notifications
          </Text>
        </Center>
      </Pressable>
    </HStack>
  );
}
