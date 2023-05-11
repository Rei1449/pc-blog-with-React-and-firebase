import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate('/login');
    });
  };

  return (
    <div className="logoutPage">
      <div className="logoutContainer">
        <h1>ログアウトする</h1>
        <button className="logoutButton" onClick={logout}>
          ログアウト
        </button>
      </div>
    </div>
  );
};

export default Logout;
