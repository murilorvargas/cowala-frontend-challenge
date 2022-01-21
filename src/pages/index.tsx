import Head from 'next/head';
import React from 'react';

import Form from '../components/Form';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Container from '../styles/pages/Home';

const Home: React.FC = () => {
  const { clearLocalStorage, createLocalStorage, userData } = useLocalStorage();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <Form
          clearLocalStorage={clearLocalStorage}
          createLocalStorage={createLocalStorage}
          userData={userData}
        />
      </Container>
    </>
  );
};

export default Home;
