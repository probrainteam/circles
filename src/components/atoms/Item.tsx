import React from "react";

interface ItemProps {
  isCheck: boolean;
  name: string;
  studentId: string;
  phone: string;
  grade: string;
  isDues: boolean;
  state: string;
}

function Item({
  isCheck,
  name,
  studentId,
  phone,
  grade,
  isDues,
  state,
}: ItemProps) {
  return (
    <tr>
      <td>
        <input type="checkbox" checked={isCheck} />
      </td>
      <td>{name}</td>
      <td>{studentId}</td>
      <td>{phone}</td>
      <td>{grade}</td>
      <td>{isDues ? "O" : "X"}</td>
      <td>{state}</td>
    </tr>
  );
}

export default Item;
