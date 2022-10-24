import React from "react";

export default function List({
  listTitle,
  setListTitle,
  likeCount,
  setLikeCount,
  title,
  setTitle,
  setModal,
  i,
}) {
  // 삭제 기능
  const deletList = () => {
    let copy = [...listTitle];
    copy.splice(i, 1);
    setListTitle(copy);
  };
  // 좋아요 기능
  const upCount = (e) => {
    e.stopPropagation();
    let newLikeCount = [...likeCount];
    newLikeCount[i] = newLikeCount[i] + 1;
    setLikeCount(newLikeCount);
  };

  return (
    <div className="list" key={i}>
      <h3
        onClick={() => {
          setModal(true);
          setTitle(i);
        }}
      >
        {listTitle[i]}
        <span className="likeBt" onClick={upCount}>
          👍 {likeCount[i]}
        </span>
      </h3>
      <p>2월 17일 발행</p>
      <button className="deletBt" onClick={deletList}>
        삭제
      </button>
      <hr />
    </div>
  );
}
