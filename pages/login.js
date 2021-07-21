import React, { useState, Fragment } from 'react';
import { css } from '@emotion/react';
import MasterPage from '../components/layouts/MasterPage';
import {
  Formulario,
  Campo,
  InputSubmit,
  Error,
} from '../components/ui/Formulario';
import Router from 'next/router';

import firebase from '../firebase';

// Validaciones
import useValidacion from '../hooks/useValidacion';
import validarIniciarsesion from '../validacion/validarIniciarsesion';

const STATE_INICIAL = {
  email: '',
  password: '',
};

export default function Login() {
  const [error, setError] = useState(false);

  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarIniciarsesion, iniciarSesion);

  const { email, password } = valores;

  async function iniciarSesion() {
    try {
      await firebase.login(email, password);
      Router.push('/');
    } catch (error) {
      console.error('hubo un error al autenticar el usuario', error.message);
      setError(error.message);
    }
  }

  return (
    <div>
      <MasterPage>
        <Fragment>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >
            Iniciar Sesion
          </h1>
          <Formulario onSubmit={handleSubmit} noValidate>
            <Campo>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Tu Email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {errores.email && <Error>{errores.email}</Error>}
            <Campo>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Tu Password"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {errores.password && <Error>{errores.password}</Error>}

            {error && <Error>{error}</Error>}
            <InputSubmit type="submit" value="Iniciar Sesion" />
          </Formulario>
        </Fragment>
      </MasterPage>
    </div>
  );
}
