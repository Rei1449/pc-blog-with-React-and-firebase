import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem('isAuth', true);
        setIsAuth(true);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <h1>ログインして始める</h1>
        <div className="inputLogin">
          <div>メールアドレス</div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="メールアドレス"
          />
        </div>
        <div className="inputLogin">
          <div>パスワード</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="パスワード"
          />
        </div>
        <button className="loginButton" onClick={handleLogin}>
          ログイン
        </button>
      </div>
    </div>
  );
};

export default Login;
