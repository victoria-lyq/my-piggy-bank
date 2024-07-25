import { Center, HStack, Icon, Pressable, Text } from 'native-base';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

interface FooterProps {
    selected: number;
    setSelected: React.Dispatch<React.SetStateAction<number>>;
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
                opacity={props.selected === 0 ? 1 : 0.5}
                flex={1}
                onPress={() => props.setSelected(0)}
            >
                <Center>
                    <Icon
                        mb="1"
                        as={MaterialIcons}
                        name="account-balance"
                        color={
                            props.selected === 0 ? 'indigo.600' : 'trueGray.600'
                        }
                        size="md"
                    />
                    <Text
                        color={
                            props.selected === 0 ? 'indigo.600' : 'trueGray.600'
                        }
                        fontSize="12"
                        bold
                    >
                        Overview
                    </Text>
                </Center>
            </Pressable>
            <Pressable
                opacity={props.selected === 1 ? 1 : 0.5}
                flex={1}
                onPress={() => props.setSelected(1)}
            >
                <Center>
                    <Icon
                        mb="1"
                        as={MaterialIcons}
                        color={
                            props.selected === 1 ? 'indigo.600' : 'trueGray.600'
                        }
                        name="receipt-long"
                        size="md"
                    />
                    <Text
                        color={
                            props.selected === 1 ? 'indigo.600' : 'trueGray.600'
                        }
                        fontSize="12"
                        bold
                    >
                        Transactions
                    </Text>
                </Center>
            </Pressable>
            <Pressable
                opacity={props.selected === 2 ? 1 : 0.5}
                flex={1}
                onPress={() => props.setSelected(2)}
            >
                <Center>
                    <Icon
                        mb="1"
                        as={MaterialIcons}
                        name="monetization-on"
                        color={
                            props.selected === 2 ? 'indigo.600' : 'trueGray.600'
                        }
                        size="md"
                    />
                    <Text
                        color={
                            props.selected === 2 ? 'indigo.600' : 'trueGray.600'
                        }
                        fontSize="12"
                        bold
                    >
                        Budgets
                    </Text>
                </Center>
            </Pressable>
            <Pressable
                opacity={props.selected === 3 ? 1 : 0.5}
                flex={1}
                onPress={() => props.setSelected(3)}
            >
                <Center>
                    <Icon
                        mb="1"
                        as={MaterialIcons}
                        color={
                            props.selected === 3 ? 'indigo.600' : 'trueGray.600'
                        }
                        name="notifications-none"
                        size="md"
                    />
                    <Text
                        color={
                            props.selected === 3 ? 'indigo.600' : 'trueGray.600'
                        }
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
