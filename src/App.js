/* eslint-disable */

import React, { useState } from "react";
import Nav from "./components/Nav";
import Modal from "./components/Modal";
import List from "./components/List";
import Input from "./components/Input";
import "./App.css";

function App() {
  let [listTitle, setListTitle] = useState([]);
  let [likeCount, setLikeCount] = useState([]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [txtInput, setTxtInput] = useState("");

  return (
    <div className="App">
      <Nav></Nav>

      {listTitle.map(function (item, i) {
        return (
          <List
            listTitle={listTitle}
            setListTitle={setListTitle}
            likeCount={likeCount}
            setLikeCount={setLikeCount}
            title={title}
            setTitle={setTitle}
            setModal={setModal}
            i={i}
          ></List>
        );
      })}

      <Input
        txtInput={txtInput}
        setTxtInput={setTxtInput}
        listTitle={listTitle}
        setListTitle={setListTitle}
        likeCount={likeCount}
        setLikeCount={setLikeCount}
      ></Input>

      {modal == true ? <Modal listTitle={listTitle} title={title} /> : null}
    </div>
  );
}

export default App;
