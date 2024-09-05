import { Center, HStack, Icon, Pressable, Text } from 'native-base';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { FooterTab, StackParamList } from '../component/enums';

interface FooterProps {
  currentRoute: FooterTab;
  navigate: (name: string, params) => void;
}

// Manually create an array of the enum values
const footerTabs = [
  FooterTab.Overview,
  FooterTab.Transactions,
  FooterTab.Budgets,
  FooterTab.Accounts,
];

const getFooterAction = (tab: FooterTab) => {
  switch (tab) {
    case FooterTab.Overview:
      return 'OverviewPage';
    case FooterTab.Transactions:
      return 'TransactionsPage';
    case FooterTab.Budgets:
      return 'BudgetsPage';
    case FooterTab.Accounts:
      return 'AccountPage';
    default:
      return '';
  }
};

const getFooterColor = (tab: FooterTab, currentRoute: FooterTab) => {
  return tab === currentRoute ? 'indigo.600' : 'trueGray.600';
};

const getFooterIcon = (tab: FooterTab) => {
  switch (tab) {
    case FooterTab.Overview:
      return 'account-balance';
    case FooterTab.Transactions:
      return 'receipt';
    case FooterTab.Budgets:
      return 'monetization-on';
    case FooterTab.Accounts:
      return 'layers';
    default:
      return '';
  }
};

export function Footer(props: FooterProps) {
  return (
    <HStack
      bg="white"
      justifyContent="space-between"
      safeAreaBottom
      shadow={6}
      pt="3"
      position={'absolute'}
      bottom={0}
      width={'100%'}
    >
      {footerTabs.map((tab: FooterTab) => (
        <Pressable
          _pressed={{ opacity: 30 }}
          flex={1}
          key={tab}
          opacity={props.currentRoute === tab ? 1 : 0.5}
          onPress={() => props.navigate(getFooterAction(tab), {})}
        >
          <Center>
            <Icon
              mb="1"
              as={MaterialIcons}
              name={getFooterIcon(tab)}
              color={
                props.currentRoute === tab
                  ? 'indigo.600'
                  : getFooterColor(tab, props.currentRoute)
              }
              size="md"
            />
            <Text
              color={
                props.currentRoute === tab
                  ? 'indigo.600'
                  : getFooterColor(tab, props.currentRoute)
              }
              fontSize="12"
              bold
            >
              {tab}
            </Text>
          </Center>
        </Pressable>
      ))}
    </HStack>
  );
}
