import React from "react";

export default function Modal({ listTitle, title }) {
  return (
    <div className="modal">
      <h4>{listTitle[title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
