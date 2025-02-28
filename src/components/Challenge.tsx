import React, { useState, useCallback } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import DomainInput from './DomainInput';
import DomainList from './DomainList';
import CartSummary from './CartSummary';
import ActionButtons from './ActionButtons';
import { isDomainAvailable } from '../lib/resources';

interface Domain {
  name: string;
  available: boolean;
}

interface ChallengeProps {
  numDomainsRequired: number;
}

const Challenge: React.FC<ChallengeProps> = ({ numDomainsRequired }) => {
  const [domains, setDomains] = useState<Domain[]>([]);
  // let domainCopy : Domain[] = [];
  const handleAddDomain = useCallback(async (domain: string) => {
    const isDomainUnique = !domains.some((d) => d.name === domain);
    if (!isDomainUnique) {
      alert('Domain already exists. Please try different one.');
      return;
    }
    const available = await isDomainAvailable(domain);
    setDomains((prev) => [...prev, { name: domain, available }]);
    // domainCopy.push({ name: domain, available })
  }, [domains]);

  const handleDeleteDomain = useCallback((domain: string) => {
    setDomains((prev) => prev.filter((d) => d.name !== domain));
    // domainCopy = domainCopy.filter((d)=>d.name != domain)
  }, []);

  return (
    <Box p={4}>
      <VStack gap={4} align="stretch">
        <DomainInput onAddDomain={handleAddDomain} />
        <DomainList domains={domains} onDeleteDomain={handleDeleteDomain} />
        <CartSummary domains={domains} numDomainsRequired={numDomainsRequired} />
        <ActionButtons domains={domains} setDomains={setDomains} numDomainsRequired={numDomainsRequired} />
      </VStack>
    </Box>
  );
};

export default Challenge;