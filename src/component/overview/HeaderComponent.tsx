import { Box, HStack, Icon, IconButton, Text } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export function HeaderComponent() {
    return (
        <Box width={'full'}>
            <HStack
                alignItems={'center'}
                justifyContent={'flex-end'}
                backgroundColor={'indigo.400'}
                width={'full'}
                height={8}
            >
                <HStack>
                    <IconButton
                        icon={
                            <Icon
                                as={MaterialIcons}
                                name="add"
                                size={5}
                                color="white"
                            />
                        }
                    />
                </HStack>
            </HStack>
        </Box>
    );
}
