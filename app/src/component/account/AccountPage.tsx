import { Box, Button } from 'native-base';
import {
  create,
  open,
  dismissLink,
  LinkSuccess,
  LinkExit,
  LinkIOSPresentationStyle,
  LinkLogLevel,
} from 'react-native-plaid-link-sdk';
import React, { useCallback, useEffect, useState } from 'react';

interface AccountPageProps {
  navigation: any;
}
const AccountPage: React.FC = ({ navigation }: AccountPageProps) => {
  const [linkToken, setLinkToken] = useState(null);

  const createLinkToken = useCallback(async () => {
    await fetch(`http://localhost:8080/api/create_link_token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address: 'localhost' }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLinkToken(data.link_token);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setLinkToken]);

  useEffect(() => {
    if (linkToken == null) {
      createLinkToken();
    } else {
      const tokenConfiguration = createLinkTokenConfiguration(linkToken);
      create(tokenConfiguration);
    }
  }, [linkToken]);

  const createLinkTokenConfiguration = (
    token: string,
    noLoadingState: boolean = false,
  ) => {
    return {
      token: token,
      noLoadingState: noLoadingState,
    };
  };

  const createLinkOpenProps = () => {
    return {
      onSuccess: async (success: LinkSuccess) => {
        await fetch(`http://localhost:8080/api/exchange_public_token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ public_token: success.publicToken }),
        }).catch((err) => {
          console.log(err);
        });
        navigation.navigate('Success', success);
      },
      onExit: (linkExit: LinkExit) => {
        console.log('Exit: ', linkExit);
        dismissLink();
      },
      iOSPresentationStyle: LinkIOSPresentationStyle.MODAL,
      logLevel: LinkLogLevel.ERROR,
    };
  };

  const handleOpenLink = () => {
    const openProps = createLinkOpenProps();
    open(openProps);
  };
  return (
    <Box>
      <Button
        variant="subtle"
        size="lg"
        colorScheme="indigo"
        onPress={() => handleOpenLink()}
      >
        Link Account
      </Button>
    </Box>
  );
};

export default AccountPage;
