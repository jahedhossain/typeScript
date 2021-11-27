import "./App.css";
import ObjCmp from "./component/objCmp";
import ArrCmp from "./component/arrCmp";
import ParentCom from "./component/parentCom";
import Button from './component/button';


function App() {
  const personName = {
    name: "jahed",
    age: 10,
  };

  const personList = [
    {
      name: "foo 1",
      age: 10,
    },
    {
      name: "foo 2",
      age: 10,
    },
    {
      name: "foo 3",
      age: 0,
 
    },
  ];

  return (
    <>
      <ObjCmp name={personName} />
      <ArrCmp personList={personList} />
      <ParentCom>ParentCom</ParentCom>
      <Button handleClick ={(id, e) => {
        console.log('object', id, e)
      }}/>
    </>
  );
}

export default App;
