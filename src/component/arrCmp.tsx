import React from "react";

type personListProps = {
  personList: {
    name: string;
    age: number;
  }[];
};

function ArrCmp({ personList }: personListProps) {
  return (
    <div>
      <ul>
        {personList?.map((itm, idx) => (
          <li key={idx}>
            Name: {itm?.name}, age: {itm?.age}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrCmp;
