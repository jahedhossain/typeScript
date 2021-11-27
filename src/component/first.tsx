type firstPorps = {
  name: string;
};

function First({ name }: firstPorps) {
  return (
    <div>
      <h1> Name: {name}</h1>
    </div>
  );
}

export default First;
