import React, { useEffect, useState } from 'react';
import './Home.css';
import { db } from '../firebase';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { auth } from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [postList, setpostList] = useState([]);
  const [filterVal, setFilterVal] = useState('');
  const [valuePost, setValuePost] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'posts'));
      setpostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  useEffect(() => {
    setValuePost((prevValuePost) =>
      prevValuePost.length > 0 ? prevValuePost : postList
    );
  }, [postList]);

  console.log(postList);
  //console.log(filterVal);
  console.log(valuePost);
  const handleInputChange = (e) => {
    setFilterVal(e.target.value);
    search(e.target.value);
  };

  const search = (value) => {
    if (value === '') {
      setpostList(valuePost);
      return;
    }

    const searchedPost = valuePost.filter(
      (post) =>
        Object.values(post).filter(
          (item) =>
            item !== undefined &&
            item !== null &&
            typeof item === 'string' &&
            item.toUpperCase().indexOf(value.toUpperCase()) !== -1
        ).length > 0
    );

    setpostList(searchedPost);
  };

  const displayUserName = (e) => {
    if (typeof e !== 'undefined') {
      return <h3>@{e.username}</h3>;
    }
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'posts', id));
    window.location.href = '/';
  };

  const aaa = () => {};

  return (
    <div className="homePage">
      {/*検索欄*/}
      <div>
        <nav className="searchBar">
          <input
            type="text"
            value={filterVal}
            placeholder="検索欄"
            onChange={handleInputChange}
          />
        </nav>
      </div>
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
              <button className="postHeaderIcon">
                <FontAwesomeIcon icon={faStar} />
              </button>
              <div className="postHeaderIcon" onClick={aaa}>
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
            <div className="postTextContainer">{post.postsText}</div>
            <div className="nameAndDeleteButton">
              {displayUserName(post.author)}
              {post.author.id === auth.currentUser?.uid && (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
