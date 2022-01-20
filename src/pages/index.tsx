import Head from 'next/head';
import React from 'react';

import Form from '../components/Form';
import Container from '../styles/pages/Home';

const pages: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <Form />
      </Container>
    </>
  );
};

export default pages;
