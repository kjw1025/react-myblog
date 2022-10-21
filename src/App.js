/* eslint-disable */

import React, { useState } from "react";
import "./App.css";

function App() {
  let [listTitle, setListTitle] = useState([
    "남자 코트추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [likeCount, setLikeCount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {/* <List listTitle={listTitle}></List> */}

      {listTitle.map(function (item, i) {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                setModal(true);
                setTitle(i);
              }}
            >
              {listTitle[i]}
              <span
                onClick={() => {
                  let newLikeCount = [...likeCount];
                  newLikeCount[i] = newLikeCount[i] + 1;
                  setLikeCount(newLikeCount);
                }}
              >
                👍 {likeCount[i]}
              </span>
            </h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}

      {modal == true ? <Modal listTitle={listTitle} title={title} /> : null}
    </div>
  );
}

// function List({ listTitle }) {
//   let [likeCount, setLikeCount] = useState(0);

//   const countUp = () => {
//     setLikeCount(likeCount + 1);
//   };

//   return (
//     <div className="list">
//       <h3 onClick={changeModal}>
//         {listTitle}
//         <span onClick={countUp}>👍</span>
//         {likeCount}
//       </h3>
//       <p>2월 17일 발행</p>
//       <hr />
//     </div>
//   );
// }

function Modal({ listTitle, title }) {
  return (
    <div className="modal">
      <h4>{listTitle[title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
