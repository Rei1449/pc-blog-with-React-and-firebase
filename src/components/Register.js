import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = ({ displayName, setDisplayName }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistration = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // ユーザーの表示名を設定する
        updateProfile(user, {
          displayName: displayName,
        })
          .then(() => {
            navigate('/login');
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="registerPage">
      <div className="registerContainer">
        <h1>ユーザ登録</h1>
        <div className="inputRegister">
          <div>ユーザ名</div>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div className="inputRegister">
          <div>メールアドレス</div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputRegister">
          <div>パスワード</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="registerButton" onClick={handleRegistration}>
          ユーザ登録
        </button>
      </div>
    </div>
  );
};

export default Register;
