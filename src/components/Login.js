import React from 'react';
import { login } from "../utils/auth";
import { useDispatch } from 'react-redux';
import '../bloks/auth-form/auth-form.css';

function Login ({ onLogin }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch()

  function handleSubmit (e) {
    e.preventDefault();
    login(email, password)
      .then(res => {
        res.email = email
        onLogin(Promise.resolve(res))
      })
      .catch((err) => {
        onLogin(Promise.reject(err))
      })
  }

  return (
    <div className="auth-form">
      <form className="auth-form__form" onSubmit={ handleSubmit }>
        <div className="auth-form__wrapper">
          <h3 className="auth-form__title">Вход</h3>
          <label className="auth-form__input">
            <input
              type="text" name="name" id="email"
              className="auth-form__textfield" placeholder="Email"
              onChange={ e => setEmail(e.target.value) } required
            />
          </label>
          <label className="auth-form__input">
            <input
              type="password" name="password" id="password"
              className="auth-form__textfield" placeholder="Пароль"
              onChange={ e => setPassword(e.target.value) } required
            />
          </label>
        </div>
        <button className="auth-form__button" type="submit"> Войти</button>
      </form>
    </div>
  )
}

export default Login;
