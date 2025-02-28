import React from 'react';
import { Text, Button } from '@chakra-ui/react';

interface CartSummaryProps {
  domains: { name: string; available: boolean }[];
  numDomainsRequired: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ domains, numDomainsRequired }) => {
  const isComplete = domains.length >= numDomainsRequired;
  const handlePurchase = () => {
    if(domains.length > numDomainsRequired){
      alert('Please remove some domains. You have exceeded the capacity.');
      return;
    }
  }
  return (
    <Text>
      {domains.length} out of {numDomainsRequired} domains added.
      <Button disabled={!isComplete} onClick={handlePurchase} mt={2} w="100%">
        Purchase
      </Button>
    </Text>
  );
};

export default CartSummary;