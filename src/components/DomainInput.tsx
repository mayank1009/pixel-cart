import React, { useState } from 'react';
import { Input, Button, HStack } from '@chakra-ui/react';

interface DomainInputProps {
  onAddDomain: (domain: string) => void;
}

const DomainInput: React.FC<DomainInputProps> = ({ onAddDomain }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    const domain = inputValue.trim().toLowerCase();
    if (domain.match(/\.(com|xyz|app)$/)) {
      onAddDomain(domain);
      setInputValue('');
    } else {
      alert('Invalid domain. Must end with .com, .xyz, or .app.');
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <HStack>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a domain (e.g., example.com)"
      />
      <Button onClick={handleAdd}>Add</Button>
    </HStack>
  );
};

export default DomainInput;