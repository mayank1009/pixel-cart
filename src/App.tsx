// src/App.tsx
import React from 'react';
import { Container } from '@chakra-ui/react';
import Challenge from './components/Challenge';

const App: React.FC = () => {
  return (
    <Container maxW="container.md" py={4}>
      <Challenge numDomainsRequired={5} />
    </Container>
  );
};

export default App;