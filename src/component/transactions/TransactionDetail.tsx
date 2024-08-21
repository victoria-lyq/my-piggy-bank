import { Box, Button } from 'native-base';
import { Transaction } from '../../model/Transaction';

interface TransactionDetailPageProps {
  item: Transaction;
  navigation: any;
}
const TransactionDetail: React.FC<TransactionDetailPageProps> = ({
  item: Transaction,
  navigation,
}) => {
  return (
    <Box>
      {/* return button to transactions page */}
      <Button
        variant="ghost"
        onPress={() => {
          navigation.goBack();
        }}
        _text={{ color: 'indigo.600' }}
      ></Button>
    </Box>
  );
};

export default TransactionDetail;
