import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const onClickEnter = () => {
    setMessage("안녕하세요");
  };
  const onClickLeave = () => {
    setMessage("안녕히가세요");
  };
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        빨강
      </button>
      <button
        onClick={() => {
          setColor("blue");
        }}
      >
        파랑
      </button>
      <button
        onClick={() => {
          setColor("green");
        }}
      >
        초록
      </button>
    </div>
  );
};

export default Say;
