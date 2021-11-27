import React from "react";

type EventProps = {
  handleClick: (id: number, event: React.MouseEvent<HTMLButtonElement>) => void;
};
function Button({ handleClick }: EventProps) {
  return (
    <button
      type="button"
      onClick={(e) => {
        handleClick(10, e);
      }}
    >
      Click
    </button>
  );
}
export default Button;
