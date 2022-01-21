import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { LocalStorageData } from '../../hooks/useLocalStorage';
import api from '../../services/api';
import Container from './styles';

type FormProps = {
  createLocalStorage: (data: LocalStorageData) => void;
  clearLocalStorage: () => void;
  userData: LocalStorageData;
};

type userFormData = {
  name: string;
  profession: string;
  number: string;
  ip: string;
};

const userFormSchema = yup.object().shape({
  name: yup.string().required(),
  profession: yup.string().required(),
  number: yup.string().required(),
  ip: yup.string().required(),
});

const Form = ({
  createLocalStorage,
  clearLocalStorage,
  userData,
}: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm({
    resolver: yupResolver(userFormSchema),
    defaultValues: userData,
  });

  const handleClearData = () => {
    reset();
    clearLocalStorage();
  };

  const handleFetchIp = async () => {
    await api.get('api/ip').then(response => setValue('ip', response.data));
    clearErrors('ip');
  };

  const onSubmit: SubmitHandler<userFormData> = values => {
    createLocalStorage(values);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite seu nome"
          className={errors.name && 'error'}
          {...register('name')}
        />
      </div>
      <div>
        <div>
          <label htmlFor="profession">Profissão</label>
          <input
            type="text"
            id="profession"
            name="profession"
            placeholder="Digite sua profissão"
            className={errors.profession && 'error'}
            {...register('profession')}
          />
        </div>
        <div>
          <label htmlFor="number">Celular</label>
          <input
            type="text"
            id="number"
            name="number"
            placeholder="Digite seu número de celular"
            className={errors.number && 'error'}
            {...register('number')}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="ip">Meu IP</label>
          <input
            type="text"
            name="ip"
            id="ip"
            {...register('ip')}
            readOnly
            className={errors.ip && 'error'}
          />
        </div>
        <button type="button" onClick={handleFetchIp}>
          ENCONTRAR IP
        </button>
      </div>
      <div>
        <button type="submit">SALVAR</button>
        <button type="button" onClick={handleClearData}>
          LIMPAR
        </button>
      </div>
    </Container>
  );
};

export default Form;
