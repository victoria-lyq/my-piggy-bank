import { Box, HStack, Icon, IconButton, Text } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export function HeaderComponent() {
    return (
        <Box width={'full'}>
            <HStack
                alignItems={'center'}
                justifyContent={'flex-end'}
                backgroundColor={'indigo.200'}
                width={'full'}
            >
                <HStack>
                    <IconButton
                        icon={
                            <Icon
                                as={MaterialIcons}
                                name="favorite"
                                size="sm"
                                color="white"
                            />
                        }
                    />
                    <IconButton
                        icon={
                            <Icon
                                as={MaterialIcons}
                                name="search"
                                size="sm"
                                color="white"
                            />
                        }
                    />
                    <IconButton
                        icon={
                            <Icon
                                as={MaterialIcons}
                                name="more-vert"
                                size="sm"
                                color="white"
                            />
                        }
                    />
                </HStack>
            </HStack>
        </Box>
    );
}
