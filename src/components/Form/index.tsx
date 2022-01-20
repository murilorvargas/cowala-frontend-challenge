import React from 'react';

import Container from './styles';

const Form: React.FC = () => {
  return (
    <Container>
      <div>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" placeholder="Digite seu nome" />
      </div>
      <div>
        <div>
          <label htmlFor="profession">Profissão</label>
          <input
            type="text"
            id="profession"
            placeholder="Digite sua profissão"
          />
        </div>
        <div>
          <label htmlFor="phone-number">Celular</label>
          <input
            type="text"
            id="phone-number"
            placeholder="Digite seu número de telefone"
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="ip">Meu IP</label>
          <input type="text" id="ip" disabled />
        </div>
        <button type="button">ENCONTRAR IP</button>
      </div>
      <div>
        <button type="submit">SALVAR</button>
        <button type="button">LIMPAR</button>
      </div>
    </Container>
  );
};

export default Form;
