import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isAuth }) => {
  {
    /*isAuthはそのまま渡すとオブジェクト型でくる。
    {}で囲むと真偽値を受け取れる*/
  }
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      {!isAuth ? (
        <>
          <Link to="/login">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            ログイン
          </Link>
          <Link to="/register">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            ユーザ登録
          </Link>
        </>
      ) : (
        <>
          <Link to="/createPost">
            <FontAwesomeIcon icon={faFilePen} />
            記事投稿
          </Link>
          <Link to="/logout">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            ログアウト
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
