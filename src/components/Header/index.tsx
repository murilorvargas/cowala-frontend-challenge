import React from 'react';

import Container from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src="/images/logo.png" alt="Logo" />
      <img src="/images/cowala-software.png" alt="Cowala Software" />
    </Container>
  );
};

export default Header;
