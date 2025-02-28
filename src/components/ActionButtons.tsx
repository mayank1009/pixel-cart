// src/components/ActionButtons.tsx
import React from 'react';
import { Button, HStack } from '@chakra-ui/react';
type DomainPriority = Record<string, number>;
interface ActionButtonsProps {
  domains: { name: string; available: boolean }[];
  setDomains: React.Dispatch<React.SetStateAction<{ name: string; available: boolean }[]>>;
  numDomainsRequired: number;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ domains, setDomains,  numDomainsRequired }) => {
  const handleClearCart = () => {
    setDomains([])
    // domainCopy=[]
  };

  const handleRemoveUnavailable = () => {
    setDomains((prev) => prev.filter((domain) => domain.available));
  };
 
  const handleCopyDomains = () => {
    const domainList = domains.map((d) => d.name).join(', ');
    navigator.clipboard.writeText(domainList);
  };

  const handleKeepBestDomains = () => {
    const priority: DomainPriority = { '.com': 1, '.app': 2, '.xyz': 3 };
    const sortedDomains = [...domains].sort((a, b) => {
    const aPriority = priority[a.name.slice(-4)] || 3;
    const bPriority = priority[b.name.slice(-4)] || 3;
    return aPriority - bPriority || a.name.length - b.name.length;
  });
  setDomains(sortedDomains.slice(0, numDomainsRequired));
  };

  return (
    <HStack>
      <Button onClick={handleClearCart}>Clear Cart</Button>
      <Button onClick={handleRemoveUnavailable}>Remove Unavailable</Button>
      <Button onClick={handleCopyDomains}>Copy Domains</Button>
      <Button onClick={handleKeepBestDomains}>Keep Best Domains</Button>
    </HStack>
  );
};

export default ActionButtons;