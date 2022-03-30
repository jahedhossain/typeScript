import { useState } from "react";
import Form from "./component/Form";
import CustomTable from "./component/table";
import { fromStateType } from "./type";

function App() {
  const [rowDto, setRowDto] = useState<fromStateType[]>([]);
  const [fromState, setFromSate] = useState<fromStateType>({
    userName: "",
    userEmail: "",
    age: 0,
  });

  const addClickEventHandler = () => {
    const obj = {
      ...fromState,
      isSelected: false,
    };
    setRowDto([...rowDto, obj]);
    setFromSate({
      userName: "",
      userEmail: "",
      age: 0,
    });
  };

  const removeHandler = (index: number) => {
    setRowDto(rowDto.filter((item, idx) => idx !== index));
  };

  return (
    <div>
      <Form
        fromState={fromState}
        setFromSate={setFromSate}
        addClickEventHandler={addClickEventHandler}
      />
      <CustomTable rowDto={rowDto} removeHandler={removeHandler} />
    </div>
  );
}

export default App;
