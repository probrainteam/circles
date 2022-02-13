import Item from "components/atoms/Item";
import React from "react";
// interface ItemProps {
//   isCheck: boolean;
//   name: string;
//   studentId: string;
//   phone: string;
//   grade: string;
//   isDues: boolean;
//   state: "재학" | "휴학";
// }

function ItemList() {
  const list = [
    {
      isCheck: false,
      name: "변수미",
      studentId: "2022000000",
      phone: "000000000",
      grade: "4",
      isDues: false,
      state: "재학",
    },
    {
      isCheck: false,
      name: "전병민",
      studentId: "2022000000",
      phone: "000000000",
      grade: "4",
      isDues: false,
      state: "재학",
    },
    {
      isCheck: false,
      name: "최현석",
      studentId: "2022000000",
      phone: "000000000",
      grade: "4",
      isDues: false,
      state: "재학",
    },
  ];
  return (
    <table>
      <thead>
        <th>
          <input type="checkbox" />
        </th>
        <th>이름</th>
        <th>학번</th>
        <th>전화번호</th>
        <th>학년</th>
        <th>이메일</th>
      </thead>
      <tbody>
        {list.map((item) => (
          <Item {...item}></Item>
        ))}
      </tbody>
    </table>
  );
}

export default ItemList;
