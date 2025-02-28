import React from 'react';
import { HStack, Text, Button } from '@chakra-ui/react';

interface DomainItemProps {
  domain: { name: string; available: boolean };
  onDeleteDomain: (domain: string) => void;
}

const DomainItem: React.FC<DomainItemProps> = ({ domain, onDeleteDomain }) => {
  return (
    <HStack justify="space-between">
      <Text>
        {domain.name} - {domain.available ? 'Available' : 'Unavailable'}
      </Text>
      <Button size="sm" onClick={() => onDeleteDomain(domain.name)}>
        Delete
      </Button>
    </HStack>
  );
};

export default DomainItem;