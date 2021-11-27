type ObjPorps = {
  name: {
    name: string;
    age: number;
  };
};

function ObjCmp({ name }: ObjPorps) {
  return (
    <div>
      Name: {name.name}, age: {name.age}
    </div>
  );
}

export default ObjCmp;
