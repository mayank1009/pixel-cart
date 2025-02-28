import React from 'react';
import { VStack } from '@chakra-ui/react';
import DomainItem from './DomainItem';

interface Domain {
  name: string;
  available: boolean;
}

interface DomainListProps {
  domains: Domain[];
  onDeleteDomain: (domain: string) => void;
}

const DomainList: React.FC<DomainListProps> = ({ domains, onDeleteDomain }) => {
  return (
    <VStack align="stretch">
      {domains.map((domain, index) => (
        <DomainItem key={index} domain={domain} onDeleteDomain={onDeleteDomain} />
      ))}
    </VStack>
  );
};

export default DomainList;