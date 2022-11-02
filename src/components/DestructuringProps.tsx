type DestructuringProp = {
  name: string;
};

const DestructuringProps = ({ name }: DestructuringProp) => {
  return <div>{name}</div>;
};

export default DestructuringProps;
