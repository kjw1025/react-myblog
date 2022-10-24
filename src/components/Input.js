import React from "react";

export default function Input({
  txtInput,
  setTxtInput,
  listTitle,
  setListTitle,
  likeCount,
  setLikeCount,
}) {
  // 업로드 기능
  const upLoadList = () => {
    if (txtInput === "") {
      alert("내용을 입력하세요");
    } else {
      let copyListTitle = [...listTitle];
      copyListTitle.unshift(txtInput);
      let copyLikeCount = [...likeCount];
      copyLikeCount.unshift(0);
      setListTitle(copyListTitle);
      setLikeCount(copyLikeCount);
    }
  };

  return (
    <div className="inputbox">
      <input
        onChange={(e) => {
          setTxtInput(e.target.value);
        }}
      ></input>
      <button className="inputBt" onClick={upLoadList}>
        업로드
      </button>
    </div>
  );
}
